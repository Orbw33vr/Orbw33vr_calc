// fizbuzz using for loop
function exCute() {
  for (var i = 0; i < 101; i++;) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
exCute();

/* fizzbuzz pushing to array using if statements

let output = [];
let count = 1;
function fizzBuzz (){

  if (count % 15 === 0){
    output.push("FizzBuzz");
  }
  else if (count % 5 === 0){
    output.push("Buzz");
  }
  else if (count % 3 === 0 ){
    output.push("Fizz");
  } else {
    output.push(count);
  }
  count++;
  console.log(output);
  }
fizzBuzz();

*/
