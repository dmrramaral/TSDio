import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"



const peopleAccount : PeopleAccount = new PeopleAccount(1, 'João', 123456)

/* console.log(peopleAccount) */


const companyAccount: CompanyAccount = new CompanyAccount( 'Empresa', 123456)


console.log(companyAccount.setStatus(false))
console.log(companyAccount.getLoan())
console.log(companyAccount.deposit(1000))
console.log(companyAccount.withdraw(500))
console.log(companyAccount.getBalance())
console.log(companyAccount)