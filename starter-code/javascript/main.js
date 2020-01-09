var chronometer = new Chronometer();
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var minDec = document.getElementById('minDec');
var minUni = document.getElementById('minUni');
var secDec = document.getElementById('secDec');
var secUni = document.getElementById('secUni');
var milDec = document.getElementById('milDec');
var milUni = document.getElementById('milUni');

setInterval(
    function printTime() {
        if (btnLeft.className == "btn stop") {
            minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
            minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
            secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
            secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
        }
    }
    , 1000);


function printMinutes() {

}

function printSeconds() {

}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {

}

function setSplitBtn() {

}

function setStartBtn() {

}

function setResetBtn() {

}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className == 'btn start') {
        btnLeft.className = 'btn stop';
        btnLeft.innerHTML = "STOP";
        btnRight.className = 'btn split';
        btnRight.innerHTML = "SPLIT";
        chronometer.startClick();
        printTime();
    }
    else if (btnLeft.className !== 'btn start') {
        btnLeft.className = 'btn start';
        btnLeft.innerHTML = "START";
        btnRight.className = 'btn reset';
        btnRight.innerHTML = "RESET";
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

});
