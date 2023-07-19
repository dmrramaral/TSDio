import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount{


    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
     
    }

    getLoan = () => {
        console.log('Você tem um empréstimo de 1000 reais');
    }

   
}