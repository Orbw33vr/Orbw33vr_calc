// Array Practice

//Choosing random object from an Array
/*
  let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
  let randomName = names[Math.floor(Math.random() * names.length)];
  console.log(randomName + " is going to buy lunch today!");
*/

//Another way to do this. AKA Longer Verion
  let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
  let numberOfPeople = names.length;
  let randomPersonPosition = Math.floor(Math.random()  * numberOfPeople);
  let randomPerson = names[randomPersonPosition];
  console.log(randomPerson + " is going to pay for lunch today!");
  //alert(randomPerson + " is going to pay for lunch today!");
