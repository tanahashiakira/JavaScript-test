//問題①
const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (a,b,item) {
  return item.indexOf(a) === b;
});

console.log(result);

//問題②

function leapYear(year) {
  if ((year % 4) === 0 && year % 100 != 0 || year % 400 === 0) {
    return true;
  }
  return false;
}

let Year = 2021;
if (leapYear(Year)) {
  console.log(Year + "年はうるう年です。");
} else {
  console.log(Year + "年はうるう年ではありません。");
}