//Estanislao, Francilyn Bernadette P.
//Hands-On Quiz 1: Understanding Exporting Modules Quiz
//WD 201

const calc = require('./calculation.js'); //import calculation.js

//Given Values in the problem
const givenRate = 300;
const numDays = 6;
const numHours = 4;

console.log('The given Rate is: ' + givenRate);
console.log('Number of Days per week is: ' + numDays);
console.log('Number of Hours Worked: ' + numHours);
console.log();

//Computations
const hoursWorked = calc.multiply(numHours, numDays);
const grossIncome = calc.multiply(givenRate, hoursWorked);
const tax = calc.multiply(grossIncome, 0.1);
const sss = calc.divide(grossIncome, numDays);
const pagIbig = calc.divide(grossIncome, hoursWorked);
const philHealth = 400;
const deduct = calc.add(calc.add(tax, sss), calc.add(pagIbig, philHealth));

//Display outputs of the computations
console.log('The gross income is ' + grossIncome + '.');
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-Ibig fund: ' + pagIbig);
console.log('PhilHealth: ' + philHealth);
console.log('Total deductions: ' + deduct);
console.log('The net salary is ' + calc.subtract(grossIncome, deduct));
