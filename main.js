import { BankAccount } from "./src/public/js/BankAccount.js";


let bankAccount = new BankAccount({solde:1000})
bankAccount.setDepot(200)
bankAccount.setRetrait(150)

console.log(bankAccount);
const HISTORIQUEOPERATION = []

let timestamp = new Date().toLocaleString();


// Montant de dépot au solde 

bankAccount.handleDeposit()
console.log("1) function: "+ bankAccount.getMessage());
HISTORIQUEOPERATION.push(`${timestamp} ${bankAccount.getMessage()}`);
console.table(HISTORIQUEOPERATION);


// Montant de retrait au solde

bankAccount.handleWithdraw()
console.log("2) function: "+ bankAccount.getMessage())
HISTORIQUEOPERATION.push(`${timestamp} ${bankAccount.getMessage()}`);
console.table(HISTORIQUEOPERATION);


// Calcul intérets

bankAccount.handleInterestRaise()
console.log("3) function: "+ bankAccount.getMessage())
HISTORIQUEOPERATION.push(`${timestamp} ${bankAccount.getMessage()}`);
console.table(HISTORIQUEOPERATION);


// Nouveau depot 

bankAccount.setDepot(500)
bankAccount.handleDeposit()
console.log("4) function: "+ bankAccount.getMessage());
HISTORIQUEOPERATION.push(`${timestamp} ${bankAccount.getMessage()}`);
console.table(HISTORIQUEOPERATION);


// Nouveau retrait

bankAccount.setRetrait(800)
bankAccount.handleWithdraw()
console.log("5)function: "+ bankAccount.getMessage())
HISTORIQUEOPERATION.push(`${timestamp} ${bankAccount.getMessage()}`);
console.table(HISTORIQUEOPERATION);
