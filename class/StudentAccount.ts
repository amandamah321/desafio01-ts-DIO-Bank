import { DioAccount } from "./DioAccount"

export class StudentAccount extends DioAccount {

 constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

 deposit = (amount: number): void  => {
    if(this.validateStatus()){
      console.log(`Voce depositou R$${amount}`)
      this.balance = this.balance + amount + 10
    } else {
      throw new Error('Conta inválida')
    }
  }

}