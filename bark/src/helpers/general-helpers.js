export function capitalize(str) {
    let [first, ...rest] = str;
    let capitalized = (first.toUpperCase() + rest).split(',');
    capitalized = capitalized.join('');
    return capitalized;
}

export function countdown (resetShowAlert) {
    let timeleft = 3;
    let downloadTimer = setInterval(() => {
      if(timeleft <= 0) {
        
        resetShowAlert();
        clearInterval(downloadTimer);
      }
      timeleft -= 1;
    }, 1000);
  }