import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      console.log(`Voce pegou um empréstimo de R$ ${amount}`)
      this.balance = this.balance + amount
    } else {
      throw new Error('Conta inválida')
    }
    
  }
}
