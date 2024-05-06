
{
  //

// Encapsulation

class BankAccount{
public readonly id:number;
public name:string;
protected _balance :number;

  constructor(id:number,name:string,_balance:number){
    this.id=id;
    this.name=name;
    this._balance =_balance;
  }
  addDeposit(amount :number){

    this._balance =this._balance+amount

  }
  private getBalance(){
    return this._balance;
  }
  getHiddenMethod(){
    return this.getBalance();
  }
}
class StudentAccount extends BankAccount{
  test(){
    this.getHiddenMethod();
  }
}
const herAccount = new BankAccount(111, 'Mrs.Jui',40);
herAccount.name='jui'
herAccount.addDeposit(0);
const myBalance = herAccount.getBalance();
console.log(myBalance);

//
}