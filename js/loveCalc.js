//pseudo RNG love calculator
prompt("Enter your lovers full name.");
prompt("Enter your ful name.")
let c = Math.random();
c *= 100;
c = Math.floor(c);
//some functions practice
function notCompatible(){
    alert("You two are "+ c +"% compatible.\nSorry you two aren't too compatible.");
}
function isCompatible(){
    alert("You two are "+ c +"% compatible.\nYou two are compatible AF!");
}
// if else statement with proper indentations below. aka Control Flow
if (c <= 50){
    notCompatible();
} else {
    if (c >= 51){
        isCompatible();
    }
}
