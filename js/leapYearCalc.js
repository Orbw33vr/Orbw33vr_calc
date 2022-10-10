//Leap Year calculator
function isLeap(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    return "Leap year.";
  } else if (year % 400 === 0 && year % 100 === 1) {
    return "Leap year.";
  } else {
    return "Not leap year.";
  }
}
