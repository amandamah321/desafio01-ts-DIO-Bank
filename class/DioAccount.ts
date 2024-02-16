export class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true
  private balanceValidate: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void  => {
    if(this.validateStatus()){
      console.log(`Voce depositou R$${amount}`)
      this.balance = this.balance + amount
    } else {
      throw new Error('Conta inválida')
    }
  }

  withdraw = (amount: number): void => {
    if(this.validateStatus() && this.validadeBalance(amount)){
      console.log(`Voce sacou R$${amount}`)
      this.balance = this.balance - amount
    }else {
      throw new Error('Conta inválida')
    }
  }

  private validadeBalance = (amount: number): boolean  => {
    if (amount <= this.balance) {
      return true
    } else {
      throw new Error('Saldo insuficiente !')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  readonly validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }else {
      throw new Error('Conta inválida')
    }
  }
}
