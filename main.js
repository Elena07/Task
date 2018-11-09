window.addEventListener('load', function (event) {
    var realFileBtn = document.getElementById('real-file');
    var customBtn = document.getElementById('custom-button');
    var customTxt = document.getElementById('custom-text');

    customBtn.addEventListener('click', function () {
        realFileBtn.click();
    });

    realFileBtn.addEventListener('change', function () {
        if (realFileBtn.value) {
            customTxt.innerHTML = realFileBtn.value.replace(/^.*[\\\/]/, '');
        }
        else {
            customTxt.innerHTML = 'Choose file';
        }
    });
});