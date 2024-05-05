{
  //

// getter and setter

class BankAccount{
public readonly id:number;
public name:string;
protected _balance :number;

  constructor(id:number,name:string,balance:number){
    this.id=id;
    this.name=name;
    this._balance =balance;
  }
  // setter
  set deposit(amount:number){
    this._balance = this.Balance+amount;
  }
  //getter
  get Balance(){
    return this._balance
  }
  
}

const herAccount = new BankAccount(111, 'Mrs.Jui',40);
herAccount.deposit=50;
const myBalance = herAccount.Balance;
console.log(myBalance);

//
}