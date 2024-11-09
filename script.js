function handleWithdraw(retrait){
    if(retrait <= solde){
        solde = solde - retrait;
        message = `Vous avez retiré ${retrait}  euros. Nouveau solde : ${solde} euros.`
        // console.log(message);
    }
    else if(retrait > solde){
        message = `Solde insuffisant pour effectuer ce retrait.`
        // console.log(message);
    }
    else {
        message = `Une erreur est survenue.`
        // console.log(message);
    }
    return message;
}

let prenom = "Hamza";
const GENDER = 1;

let text = new String("Hamza");

text.
prenom = "Barbara";

console.log(GENDER,prenom,text,text.toString());

const TAUXINTERET = 0.03;
let solde = 1000;
let depot = 200;
let retrait = 150;
// let message;
let nouveauDepot = 500;
let nouveauRetrait = 800;
let interet;

// Montant de dépot au solde 

solde = solde + depot;
message = `1) Vous avez déposé ${depot} euros. Nouveau solde : ${solde} euros.`
console.log(message);


// Montant de retrait au solde

// if(retrait <= solde){
//     solde = solde - retrait;
//     message = `Vous avez retiré ${retrait}  euros. Nouveau solde : ${solde} euros.`
//     console.log(message);
// }
// else if(retrait > solde){
//     message = `Solde insuffisant pour effectuer ce retrait.`
//     console.log(message);
// }
// else {
//     message = `Une erreur est survenue.`
//     console.log(message);
// }

console.log("2) function: "+ handleWithdraw(retrait,solde))

// Calcul intérets
console.log(solde);

interet = solde * TAUXINTERET
solde = solde + interet
message = `3) Intérêts annuels de 3% ajoutés.
Nouveau solde : ${solde} euros.`
console.log(message,interet,solde);


// Nouveau depot 

solde = solde + nouveauDepot;
message = `4) Vous avez déposé ${nouveauDepot} euros. Nouveau solde : ${solde} euros.`
console.log(message);


// Nouveau retrait

if(nouveauRetrait <= solde){
    solde = solde - nouveauRetrait;
    message = `Vous avez retiré ${nouveauRetrait}  euros. Nouveau solde : ${solde} euros.`
    console.log(message);
}
else if(nouveauRetrait > solde){
    message = `Solde insuffisant pour effectuer ce retrait.`
    console.log(message);
}
else {
    message = `Une erreur est survenue.`
    console.log(message);
}

console.log("function: "+ handleWithdraw(nouveauRetrait))

interet = solde * TAUXINTERET
solde = solde + interet
message = `5) Intérêts annuels de 3% ajoutés.
Nouveau solde : ${solde} euros`

console.log(message)