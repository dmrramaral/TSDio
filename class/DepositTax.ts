import { DioAccount } from './DioAccount';

export class DepositTax extends DioAccount{



    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
        
    }


    deposit = (amount: number): void => {
        if (!this.validStatus() ) {
            console.log('Sua conta está inativa')
            return
        }
        
        if (amount > 0) {
            amount += 10
            this.balance += amount
            console.log('Você depositou ' + amount + ' reais')
        } else {
            console.log('Você está depositando um valor inválido')
        }
       

    }

}