const { Router } = require('express');
const router = Router();
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const MATH = '../calculator/javascript';


const getFilesJs = (title, reqPath, res, req, isFile) => {
    exec(`cd ${reqPath} && find . -name "*.js" -not -path "./node_modules/*"`, async (e, sout, se) => {
        try {
            let content;
            const readFileAndSend = async () => {
                content = await fs.readFileSync(reqPath);
                res.render('terminal', {
                    'title':title,
                    'content': content
                });
            }
            try {
                if(isFile) {
                    await readFileAndSend();
                    return;
                }
                content = sout.split('./');
                content = content.filter(file => file.length > 0);
                content = content.map(file => file.replace('\n', ''));
                res.render('files', {
                    'title':title,
                    'content': content
                });
            } catch (ignored) {
                await readFileAndSend();
            }
        } catch (ignored) {
            res.sendStatus(404);
        }
    });
}


router.get('/math', (req, res) => {
    try {
        getFilesJs('Math - Tricky Code', MATH, res, req, false);
    } catch(ignored) {
        res.sendStatus(404);
    }
});

router.get('/math/resumen', (req, res) => {
    fs.readFile(path.join(__dirname, '../calculator/RESUMEN.md'), (err, markdown) => {
        if (err) 
            return res.sendStatus(500);
            res.render('markdown', {
                'title': 'Math - Tricky Code',
                'content': markdown.toString('utf-8')
            });
    });
});

router.get('/math/:dir/:file/', (req, res) => {
    try {
        getFilesJs('Math - Tricky Code', `${MATH}/${req.params.dir}/${req.params.file}`, res, req, true);
    } catch (error) {
        res.sendStatus(404);
    }
});

router.get('/i.css', (req, res) => res.sendFile(path.join(__dirname, 'css', 'index.css')));
router.get('/i.js', (req, res) => res.sendFile(path.join(__dirname, 'js', 'index.js')));
router.get('/f.ico', (req, res) => res.sendFile(path.join(__dirname, 'icon', 'favicon.ico')));


const error_500 = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.6eMkQMI62Rrr_MR6yCNRRQHaF7%26pid%3DApi&f=1&ipt=07371336057c91b0c649b5754b3c33c9ee8653958613666012a36462e5a7b62c&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NAR_oAoEZ7hqH_n3ufVezwEyDM%26pid%3DApi&f=1&ipt=af1898365afe0b8ac176bed43f11f7d52466abf92680bda853d61ca0262e2479&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.P-Zu0RX33TUT0S6yyFNPYAHaHB%26pid%3DApi&f=1&ipt=6378a9cf73cd16b8345af9ab6af3a24b796590dd30ab46aea9451147a57c0e04&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Y4z77YFdvl3qONISSZRxDQHaHa%26pid%3DApi&f=1&ipt=79af7fe68d4a2aa3b81ba3053d71b5efc4722630a562f06fec56e225bb3b847d&ipo=images'
];

const error_404 = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.YQpew3BhunpWz-D6EbZUAQHaEY%26pid%3DApi&f=1&ipt=1d08df2ee416916699d62da782c7511cbff8ef6848d19d4f688f8e3afe1d8276&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.nl6HCWxZ3RSQTTbx6w0TYgHaE8%26pid%3DApi&f=1&ipt=06f093bac15f6a6b119defc9dc3eeaecfef9d227116f15db456310409f76ec17&ipo=images',
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.uu1XV16MR14ofvwrYAh8WwHaEK%26pid%3DApi&f=1&ipt=eca7bb5c042d8e06aa732f7127efed5333124ea23ec8b5540f644a369278361b&ipo=images'
];

router.use((req, res, next) => res.status(404).render('error', {'code': 404, 'text': 'Not Found.', 'image_src': error_404[Math.floor(Math.random() * error_404.length)] }));
router.use((err, req, res, next) => res.status(500).render('error', { 'code': 500, 'text': 'Internal Server Error.', 'image_src': error_500[Math.floor(Math.random() * error_500.length)] }));

module.exports = router;