function bmiCalculator(weight, height) {
  var bmiTwo = Math.round(weight / Math.pow(height, 2));
  return bmiTwo;
}
