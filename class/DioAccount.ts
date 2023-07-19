export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number,) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit = (amount: number): void => {
        if (!this.validStatus() ) {
            console.log('Sua conta está inativa');
            return;
        }
        if (amount > 0) {
            this.balance += amount
            console.log('Você depositou ' + amount + ' reais');
        } else {
            console.log('Você está depositando um valor inválido');
        }
        

    }

    withdraw = (amount: number): void => {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount
            console.log('Você sacou ' + amount + ' reais');
        } else {
            console.log('Você está sacando um valor inválido');
        }
        
    }

    getBalance() {
        return this.balance;
    }

    private validStatus = () : boolean => {
        if (this.status) {
            return true;
            console.log('Sua conta está ativa');
        } else {
            return false;
            console.log('Sua conta está inativa');
        }
    }

    setStatus = (status: boolean): void => {
        this.status = status;
    }

}