window.addEventListener('load', function () {
    var outputElement = document.getElementById('output');
    if (outputElement !== undefined) {
        navigator.serviceWorker.register('sw.js', {
            scope: '/'
        })
            .then(function (r) {
                /* console.log('registered service worker'); */
            })
            .catch(function (x1) {
                console.error(x1);
            });
        window.addEventListener('beforeinstallprompt', function (e) {
            outputElement.textContent = 'beforeinstallprompt Event fired';
        });
    }
});
