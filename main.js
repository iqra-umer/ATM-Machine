#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 15000;
const myPin = 12345;
let answer = await inquirer.prompt([
    {
        name: "pinCode",
        type: "number",
        message: "Enter you pin"
    }
]);
if (answer.pinCode === myPin) {
    console.log(chalk.blueBright.bold("CORRECT PINCODE!!!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operators",
            type: "list",
            message: "select an option",
            choices: ["Withdraw", "fastcash", "check Balance", "Deposit"]
        }
    ]);
    if (operationAns.operators === "Withdraw") {
        let withdrawamountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount to withdraw"
            }
        ]);
        if (withdrawamountAns.amount <= myBalance) {
            let balance = myBalance - withdrawamountAns.amount;
            console.log(chalk.blueBright.italic(`Your Remaining Balance Is ${balance}`));
        }
        else {
            console.log(chalk.red.bold("Insufficient Balance"));
        }
    }
    else if (operationAns.operators === "fastcash") {
        let fastCashamountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "what you want",
                choices: ["1000", "3000", "5000", "7000", "9000", "20000"]
            }
        ]);
        if (fastCashamountAns.amount <= myBalance) {
            let balance = myBalance - fastCashamountAns.amount;
            console.log(chalk.greenBright.italic(`Your Remaining Balance Is ${balance}`));
        }
        else {
            console.log(chalk.red.bold("Insufficient Balance"));
        }
    }
    else if (operationAns.operators === "check Balance") {
        console.log(myBalance);
    }
    if (operationAns.operators === "Deposit") {
        let depositamountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your amount to Deposit"
            }
        ]);
        let balance = myBalance += depositamountAns.amount;
        console.log(chalk.bgCyan.italic(`NOW YOUR BALANCE IS ${balance}`));
    }
}
else {
    console.log(chalk.red("INCORRECT PIN CODE!!!"));
}
