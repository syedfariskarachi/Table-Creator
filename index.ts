#! /usr/bin/env node
import inquirer from "inquirer";
let table = await inquirer.prompt({
  message: "Which table you want: ",
  type: "number",
  name: "num",
});
for (let i = 1; i <= 10; i++) {
  console.log(`${table.num} x ${i} = ${table.num * i}`);
}
