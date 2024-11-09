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


const HISTORIQUEOPERATION = []
const TAUXINTERET = 0.03;

let solde = 1000;
let depot = 200;
let retrait = 150;
let message;
let nouveauDepot = 500;
let nouveauRetrait = 800;
let interet;

let timestamp = new Date().toLocaleString();

// Montant de dépot au solde 

solde = solde + depot;
message = `1) Vous avez déposé ${depot} euros. Nouveau solde : ${solde} euros.`
console.log(message);
HISTORIQUEOPERATION.push(`${timestamp} ${message}`);
console.table(HISTORIQUEOPERATION);


// Montant de retrait au solde

console.log("2) function: "+ handleWithdraw(retrait))
HISTORIQUEOPERATION.push(`${timestamp} ${message}`);
console.table(HISTORIQUEOPERATION);


// Calcul intérets

interet = solde * TAUXINTERET
solde = solde + interet
message = `3) Intérêts annuels de 3% ajoutés.
Nouveau solde : ${solde} euros.`
console.log(message,interet,solde);
HISTORIQUEOPERATION.push(`${timestamp} ${message}`);
console.table(HISTORIQUEOPERATION);





// Nouveau depot 

solde = solde + nouveauDepot;
message = `4) Vous avez déposé ${nouveauDepot} euros. Nouveau solde : ${solde} euros.`
console.log(message);
HISTORIQUEOPERATION.push(`${timestamp} ${message}`);
console.table(HISTORIQUEOPERATION);


// Nouveau retrait

console.log("function: "+ handleWithdraw(nouveauRetrait))
HISTORIQUEOPERATION.push(`${timestamp} ${message}`);
console.table(HISTORIQUEOPERATION);



interet = solde * TAUXINTERET
solde = solde + interet
message = `5) Intérêts annuels de 3% ajoutés.
Nouveau solde : ${solde} euros`

console.log(message)
HISTORIQUEOPERATION.push(`${timestamp} ${message}`);
console.table(HISTORIQUEOPERATION);

