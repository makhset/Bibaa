
let num1 = parseInt(prompt("Бырыншы санды енгыз"));
let num2 = parseInt(prompt("Екыншы  санды енгыз"));
let num3 = parseInt(prompt("Ушыншы санды енгыз"));

let largest;

switch (true) {
    case (num1 >= num2 && num1 >= num3):
        largest = num1;
        break;
    case (num2 >= num1 && num2 >= num3):
        largest = num2;
        break;
    case (num3 >= num1 && num3 >= num2):
        largest = num3;
        break;
    default:
        console.log("Error in determining the largest number.");
        break;
}

console.log("The largest number is: " + largest);