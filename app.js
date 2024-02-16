"use strict";
exports.__esModule = true;
var StudentAccount_1 = require("./class/StudentAccount");
/*const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Amanda', 10)
console.log(peopleAccount)
peopleAccount.deposit()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit()
console.log(companyAccount)*/
//DIO ACCOUNT EXERCISE
/*const newDioAccount: DioAccount = new DioAccount('Amanda', 2,)

newDioAccount.deposit(100)

newDioAccount.withdraw(150)

console.log(newDioAccount)*/
//COMPANY ACCOUNT EXERCISE
/*const newCompanyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

newCompanyAccount.getLoan(100)
newCompanyAccount.getLoan(3200)

console.log(newCompanyAccount)*/
var newStudentAccount = new StudentAccount_1.StudentAccount('Gabriela', 49);
newStudentAccount.deposit(100);
console.log(newStudentAccount);
