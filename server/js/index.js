(() => {
    try {
        if (window.location.pathname.split('/').length > 1 && window.location.pathname.includes('terminal')) {
            const codeElm = document.getElementById('script_base');
            const code = codeElm.textContent;
            const terminal = document.getElementById('terminal');
            codeElm.parentNode.removeChild(codeElm);
            document.getElementById('reload').onclick = () => { eval(code); }
            const createLog = (logs) => {
                logs = (logs + '');
                const logElm = document.createElement('p');
                logElm.textContent = logs.length > 0 && logs !== '\n' && logs !== ' ' ? logs : '-';
                if (logs.length === 0 || logs === '\n' || logs === ' ')
                    logElm.style.opacity = '0';
                return logElm;
            }
            console.log = (...args) => terminal.appendChild(createLog(args));
            console.clear = () => terminal.innerHTML = '';
            setTimeout(() => eval(code), 2000);
        }  if (window.location.pathname.includes('/math/resumen')) {
            const markdown = document.getElementById('markdown-to-render');
            markdown.innerHTML = DOMPurify.sanitize(marked.parse(markdown.innerHTML));
        }
    } catch (error) {
        alert(`Ocurrio un error: ${error}`)
    }
})();
