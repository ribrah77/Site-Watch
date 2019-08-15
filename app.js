const btn = document.querySelector('#button');
if (btn)
    btn.addEventListener('click', loadTabs);function loadTabs() {
        // This is the request to obtain an array of active tabs. It returns a promise.
        // It accepts a config object (see docs)
        browser.tabs.query({ currentWindow:true })
            .then(tabs => {
                const results = document.querySelector('#results');
                parts = [];            
                for (let tab of tabs) {
                    parts.push(`<li>${tab.title}: ${tab.url}</li>`);
                }            
                results.innerHTML = parts.join('');
            });
    }

var { Timer } = require('lib/easytimer/dist/easytimer.min.js');

var timer = new Timer();
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});