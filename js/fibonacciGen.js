/*fibonacci generator that takes input as n and outputs to console n items
in the array in fibanacci sequence.*/
let n = prompt("Enter");
let output = [];
//creating an empty array variable
if (n === 1) {
  output = [0];
  // initializing the array
} else if (n === 2) {
  output = [0, 1];
  // adding more array elements
} else {
  output = [0, 1];
  //failsafe incase n = 0 or any other non number
  for (let i = 2; i < n; i++) {
    //for loop to iterate when number is greater than 2
    output.push(output[output.length - 2] + output[output.length - 1]);
    // adding the last item to the second to last item in the Array
  }
}
console.log(output);
