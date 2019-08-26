(function () {
    var videoElement = document.querySelector('.screenshots__video');
    var cliTab = document.querySelector('.screenshots__control--cli');
    var footerYear = document.querySelector('.footer__year');

    if (cliTab && videoElement) {
        cliTab.addEventListener('click', function() {
            videoElement.play();
        })
    }

    if (footerYear) {
        var currentYear = new Date().getFullYear();
        footerYear.innerText = currentYear;
    }
})();
