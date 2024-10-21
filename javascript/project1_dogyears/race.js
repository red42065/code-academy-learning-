let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let age = 18;

if (early == true && age > 18) {
  raceNumber += 1000;
}

if (early == true && age > 18) {
  console.log(`Race at 9:30 am, ${raceNumber}`);
} else if (early == false && age > 18) {
  console.log(`Late adults run at 11:00 am, ${raceNumber}`);
} else if (age < 18) {
  console.log(`Race at 12:30 pm, ${raceNumber}`);
} else {
  console.log("See the registration desk.");
}
