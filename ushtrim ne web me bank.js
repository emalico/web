class BankAccount {
  constructor(emri, iban, balanca) {
    this.emri = emri;
    this.iban = iban;
    this.balanca = balanca;
  }
}
const myAccount = new BankAccount("e.sh", "0001", 50);
console.log(myAccount);
