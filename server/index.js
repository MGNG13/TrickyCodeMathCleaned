const express = require('express');
const hbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('combined'));

app.engine(
    'hbs',
    hbs.create({
        defaultLayout: 'main',
        layoutDirs: path.join(__dirname, 'views', 'layouts'),
        extname: '.hbs'
    }).engine
);

app.set('view engine', 'hbs');

app.use(require('./routes.js'));

app.listen(3000, () => console.log('Listening on port 3000.\n~~~~~~~~~~~~~~~~~~~~~~~'));

(() => {
    const printException = (exception) => console.error(`~ Uncaught exception: ${exception}`);
    try {
        process.on('unhandledRejection', (reason) => printException(reason));
    } catch (error) {
        printException(error);
    }
})();
