#! /usr/bin/env node

import inquirer from "inquirer";

const currency : any = {
    USD : 1, 
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.56,
    PKR : 280,
    DIN : 40
}

let user_input = await inquirer.prompt([
    {
        name : "from",
        message : "Enter From Currency",
        type: "list",
        choices : ["USD", "EUR", "GBP" , "INR" , "PKR", "DIN"]
    },
    {
        name : "to",
        message : "Enter To Currency",
        type: "list",
        choices : ["USD", "EUR", "GBP" , "INR" , "PKR" , "DIN"]
   },
   {
        name : "amount",
        message : "Enter Your Amount",
        type: "number"
   
   }
])

let fromAmount = currency[user_input.from];
let toAmount = currency[user_input.to];
let amount = user_input.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(convertAmount);