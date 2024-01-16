
1. control flow statements

if statement
let temperature = 25;
if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature <= 30 && temperature > 20) {
  console.log("It's a pleasant day.");
} else {
  console.log("It's a cold day.");
}

2. switch statement
let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  // ... cases for other days
  default:
    dayName = "Invalid day";
}
console.log(`Today is ${dayName}.`);

3. ternary operators
let age = 18;
let isAdult = age >= 18 ? "Adult" : "Minor";
console.log(isAdult);

