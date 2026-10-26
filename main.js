class BankAccount {
  owner;
  balance;
  #pincode;
  static currency = "USD";

  constructor(owner, balance, pincode) {
    this.owner = owner;
    this.balance = balance;
    this.#pincode = this.#validatePin(pincode);
  }

  #validatePin(pin) {
    if ((pin + '').length === 4) {
      return pin;
    } else {
      return "0000";
    }
  }

  getInfo() {
    return `Владелец: ${this.owner}, баланс: ${this.balance} ${BankAccount.currency}`;
  }

  get pin() {
    console.log(this.#pincode);
  }

  set pin(newPin) {
    this.#pincode = this.#validatePin(newPin);
  }
}

let acc1 = new BankAccount('Alex', 1200, '1234');
let acc2 = new BankAccount('Anna', 300, '99');

console.log(acc1.getInfo());
console.log(acc2.getInfo());

acc2.pin; 
acc2.pin = '5678';
acc2.pin; 

