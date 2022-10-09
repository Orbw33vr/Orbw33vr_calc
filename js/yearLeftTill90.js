function lifeInWeeks(age) {
    let yearsRemaining = 90 - age;
    let days = yearsRemaining * 365;
    let weeks = yearsRemaining * 52;
    let months = yearsRemaining * 12;
    alert("You have "+ days +" days, "+ weeks +" weeks, and "+ months +" months left.");
}
lifeInWeeks(prompt("Type your age here:"))
