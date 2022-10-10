function getMilk(money, costPerBottle) {
  //assigning money variable to function getMilk
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  let bottlesOfMilk = Math.floor(money / costPerBottle);
  //rounding down
  console.log("buy " + bottlesOfMilk + " bottles of milk")
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return money % costPerBottle;
}

function calcBottles(startingMoney, costPerBottle) {
  let numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
  let change = startingAmount % costPerBottle;
}
console.log("Hello master here is your " + getMilk(18, 8) + " change.")
