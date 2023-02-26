//Task 1
function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(ucFirst("вася"));

//Task 2
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx') );
console.log(checkSpam("innocent rabbit"));

//Task 3
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}

//Task 4
function extractCurrencyValue(str) {
    return +str.slice(1);
}