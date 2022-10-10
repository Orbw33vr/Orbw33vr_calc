function bmiCalculator(weight, height) {
  var bmiTwo = Math.round(weight / Math.pow(height, 2));
  return bmiTwo;
}
var bmi = bmiCalculator(65, 1.8);
console.log(bmi);
