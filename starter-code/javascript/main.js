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
            printMinutes();
            printSeconds();
        }
    }
    , 1);


function printMinutes() {
    minUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];
    minDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
    secUni.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];
    secDec.innerHTML = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
}

function printMilliseconds() {

}

function printSplit() {
    document.getElementById("splits").innerHTML += `<li> ${chronometer.splitClick()} </li>`;
}

function clearSplits() {
    document.getElementById("splits").innerHTML = "";
}

function setStopBtn() {
    btnLeft.className = 'btn stop';
    btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
    btnRight.className = 'btn split';
    btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
    btnLeft.className = 'btn start';
    btnLeft.innerHTML = "START";
}

function setResetBtn() {
    btnRight.className = 'btn reset';
    btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.className == 'btn start') {
        setStopBtn();
        setSplitBtn();
        chronometer.startClick();
        printTime();
    }
    else if (btnLeft.className !== 'btn start') {
        setStartBtn();
        setResetBtn();
        chronometer.stopClick();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if (btnRight.className == 'btn split') {
        printSplit();
    }
    else if (btnRight.className !== 'btn split') {
        clearSplits();
        chronometer.resetClick();
        printMinutes();
        printSeconds();
    }
});
