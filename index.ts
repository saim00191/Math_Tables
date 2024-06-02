#! /usr/bin/env node

import inquirer from "inquirer";

// Math Tables

const number = await inquirer.prompt([
  {
    name: "number",
    type: "number",
    message: "Which Table you Want?",
  },
]);

const lastNumber = await inquirer.prompt([
  {
    name: "lastNumber",
    type: "number",
    message: "Where you want to stop the Table?",
  },
]);

for (let i = 1; i <= lastNumber.lastNumber; i++) {
  console.log(`${number.number} x ${i} = ${number.number * i}`);
}

