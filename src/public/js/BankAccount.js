
class BankAccount {

    tauxInteret;
    solde;
    retrait;
    depot;
    message;

    constructor({tauxInteret = 0.03, solde, retrait = null,depot = null}) {
        let message;
        this.message = message  
        this.tauxInteret = tauxInteret;
        this.solde = solde;
        this.retrait = retrait;
        this.depot = depot;
    }

    // Getter
    getSolde(){
        return this.solde
    }
    getRetrait(){
        return this.retrait
    }
    getDepot(){
        return this.depot
    }
    getMessage(){
        return this.message
    }
    
    // Setter
    setRetrait(retrait){
        this.retrait = retrait
    }
    setDepot(depot){
        this.depot = depot
    }
    
    // Methods
    handleWithdraw(){
        if(this.retrait <= this.solde){
            this.solde = this.solde - this.retrait;
            this.message = `Vous avez retiré ${this.retrait}  euros. Nouveau solde : ${this.solde} euros.`
        }
        else if(this.retrait > this.solde){
            this.message = `Solde insuffisant pour effectuer ce retrait.`
        }
        else {
            this.message = `Une erreur est survenue.`
        }
    }

    handleDeposit(){
        if(this.depot > 0){
            this.solde = this.solde + this.depot;
            this.message = `Vous avez déposé ${this.depot}  euros. Nouveau solde : ${this.solde} euros.`
        }
        else if(this.depot <= 0){
            this.message = `Dépot négatif impossible.`
        }
        else {
            this.message = `Une erreur est survenue.`
        }
    }

    handleInterestRaise(){
        let interet = this.solde * this.tauxInteret
        this.solde = this.solde + interet
        this.message = `Intérêts annuels de 3% ajoutés.Nouveau solde : ${this.solde} euros`
    }
}

export { BankAccount };