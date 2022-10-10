let name = prompt("What is your name?");
const guestList = ["Amanda", "Jack", "Pam", "Daquan", "Laura", "James"];
if (guestList.includes(name)) {
  alert("Hello " + name + "!");
} else {
  alert("Sorry you're not on the guestlist.");
}
