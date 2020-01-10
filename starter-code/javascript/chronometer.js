class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;   
    }, 1000);
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    let remainderSeconds = (this.currentTime % 60);
    return remainderSeconds;
  }

  twoDigitsNumber(input) {
    if(input < 10){
      return ("0" + input);
    }
    else if(input > 9){
      return String(input);
    }
  }

  stopClick() {
    this.intervalId = clearInterval();
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {

  }
}