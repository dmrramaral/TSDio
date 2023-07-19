import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"
import { DepositTax } from './class/DepositTax';


console.log('Bem vindo ao banco Dio')
console.log('------------------')
console.log('------------------')
console.log('------------------')
console.log('Conta de empresa')
console.log('*******************')
const companyAccount : CompanyAccount = new CompanyAccount('Company Dio', 1);
companyAccount.deposit(100);
companyAccount.withdraw(50);
companyAccount.getLoan(true);
companyAccount.getBalance();
companyAccount.setStatus(false);
companyAccount.getLoan(true);
console.log('------------------')
console.log('------------------')
console.log('------------------')




console.log('Conta de pessoa')
console.log('*******************')
const peopleAccount : PeopleAccount = new PeopleAccount(1,'People Dio', 2);
peopleAccount.deposit(1000);
peopleAccount.withdraw(500);
peopleAccount.setStatus(false);
peopleAccount.withdraw(500);
console.log('------------------')
console.log('------------------')
console.log('------------------')


console.log('Conta de deposito')
console.log('*******************')
const depositTax : DepositTax = new DepositTax( 'Dio', 3);
depositTax.deposit(100);
depositTax.withdraw(50); 
console.log('------------------')
console.log('------------------')
console.log('------------------')
