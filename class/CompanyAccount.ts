import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {


    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);

    }

    getLoan = (boolean: boolean): void => {
        if (this.validStatus()) {
            this.deposit(1000)
            console.log('Você pegou um empréstimo de 1000 reais')
            return

        }
        console.log('Sua conta está inativa')

    }


}