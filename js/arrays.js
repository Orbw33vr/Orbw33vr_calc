// Array Practice

//Choosing random object from an Array

function whosPaying(names) {
  let name = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
  let randomName = name[Math.floor(Math.random() * name.length)];
  return randomName + " is going to buy lunch today!";
}
