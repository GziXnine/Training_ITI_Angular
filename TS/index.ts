/** @format */

//! Interface for Bank Account.
interface IAccount {
  dateOfOpening: Date;

  addCustomer(): void;
  removeCustomer(): void;
}

//! Abstract class implementing IAccount.
abstract class Account implements IAccount {
  accNo: string;
  balance: number;
  dateOfOpening: Date;

  constructor(
    _accNo: string,
    _balance: number = 0,
    _dateOfOpening: Date = new Date()
  ) {
    this.accNo = _accNo;
    this.balance = _balance >= 0 ? _balance : 0;
    this.dateOfOpening = _dateOfOpening;
  }

  public debitAmount(amount: number): boolean {
    if (amount <= 0) {
      console.log("Cannot debit a non-positive amount.");
      return false;
    }

    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Debited ${amount}. New balance: ${this.balance}`);
      return true;
    } else {
      console.log("Not Enough Money");
      return false;
    }
  }

  public creditAmount(amount: number): void {
    if (amount <= 0) {
      console.log("Cannot credit a non-positive amount.");
      return;
    }

    this.balance += amount;
    console.log(`Credited ${amount}. New balance: ${this.balance}`);
  }

  public getBalance(): number {
    return this.balance;
  }

  public addCustomer(): void {
    console.log("Customer Added.");
  }

  public removeCustomer(): void {
    console.log("Customer Removed.");
  }
}

//! Subclasses of Account.
class SavingsAccount extends Account {
  minBalance: number;

  constructor(
    _accNo: string,
    _balance: number,
    _dateOfOpening: Date,
    _minBalance: number
  ) {
    super(_accNo, _balance, _dateOfOpening);
    this.minBalance = _minBalance;
  }

  //! Plus - Claude Sonnet 4.
  public debitAmount(amount: number): boolean {
    if (this.balance - amount < this.minBalance) {
      console.log("Cannot debit amount below minimum balance.");
      return false;
    }

    return super.debitAmount(amount);
  }
}

//! Subclass of Account with interest calculation.
class CurrentAccount extends Account {
  interestRate: number;

  constructor(
    _accNo: string,
    _balance: number,
    _dateOfOpening: Date,
    _interestRate: number
  ) {
    super(_accNo, _balance, _dateOfOpening);
    this.interestRate = _interestRate;
  }

  //! Plus
  public calculateInterest = (): number =>
    this.balance <= 0 ? 0 : this.balance * this.interestRate;
}

//! Test Cases Using ChatGPT.
const savings = new SavingsAccount("SA001", 5000, new Date("2024-01-01"), 1000);
console.log("======== Savings Account Tests ========");
console.log("\n✅ Debit within limit (2000)");
savings.debitAmount(2000); //? Should pass
console.log("Balance:", savings.getBalance()); //? 3000
console.log("\n❌ Debit below min balance (2501)");
savings.debitAmount(2501); //? Should fail
console.log("Balance:", savings.getBalance()); //? Should remain 3000
console.log("\n✅ Debit down to exact min balance (2000)");
savings.debitAmount(2000); //? Should pass
console.log("Balance:", savings.getBalance()); //? 1000
console.log("\n❌ Debit zero");
savings.debitAmount(0); //? Should fail
console.log("\n❌ Debit negative (-500)");
savings.debitAmount(-500); //? Should fail
console.log("\n✅ Credit 1000");
savings.creditAmount(1000); //? Should pass
console.log("Balance:", savings.getBalance()); //? 2000
console.log("\n❌ Credit zero");
savings.creditAmount(0); //? Should fail
console.log("\n❌ Credit negative (-100)");
savings.creditAmount(-100); //? Should fail

const current = new CurrentAccount("CA002", 8000, new Date("2024-01-01"), 0.05);
console.log("\n======== Current Account Tests ========");
console.log("\n✅ Calculate interest");
console.log("Interest:", current.calculateInterest()); //? 400
console.log("\n✅ Debit (3000)");
current.debitAmount(3000); //? Should pass
console.log("Balance:", current.getBalance()); //? 5000
console.log("\n❌ Debit too much (6000)");
current.debitAmount(6000); //? Should fail
console.log("Balance:", current.getBalance()); //? Still 5000
console.log("\n✅ Credit 1500");
current.creditAmount(1500); //? Should pass
console.log("Balance:", current.getBalance()); //? 6500
console.log("\n❌ Debit zero");
current.debitAmount(0); //? Should fail
console.log("\n❌ Debit negative (-100)");
current.debitAmount(-100); //? Should fail
console.log("\n❌ Credit zero");
current.creditAmount(0); //? Should fail
console.log("\n❌ Credit negative (-500)");
current.creditAmount(-500); //? Should fail
console.log("\n✅ Recalculate interest after changes");
console.log("Interest:", current.calculateInterest()); //? Should reflect updated balance
