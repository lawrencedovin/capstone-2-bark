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

export function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  // Directly return the joined string
  return splitStr.join(' '); 
}


export function pushToGoodOrNotGoodWith(data, text, goodWith, notGoodWith) {
  return data ? goodWith.push(text) : notGoodWith.push(text);
}

export function splitArrayWithComma(arr) {
  return [arr.slice(0, -1).join(', '), arr.slice(-1)[0]].join(arr.length < 2 ? '' : ' and ');
}