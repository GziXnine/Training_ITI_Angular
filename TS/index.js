/** @format */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//! Abstract class implementing IAccount.
var Account = /** @class */ (function () {
    function Account(_accNo, _balance, _dateOfOpening) {
        if (_balance === void 0) { _balance = 0; }
        if (_dateOfOpening === void 0) { _dateOfOpening = new Date(); }
        this.accNo = _accNo;
        this.balance = _balance >= 0 ? _balance : 0;
        this.dateOfOpening = _dateOfOpening;
    }
    Account.prototype.debitAmount = function (amount) {
        if (amount <= 0) {
            console.log("Cannot debit a non-positive amount.");
            return false;
        }
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Debited ".concat(amount, ". New balance: ").concat(this.balance));
            return true;
        }
        else {
            console.log("Not Enough Money");
            return false;
        }
    };
    Account.prototype.creditAmount = function (amount) {
        if (amount <= 0) {
            console.log("Cannot credit a non-positive amount.");
            return;
        }
        this.balance += amount;
        console.log("Credited ".concat(amount, ". New balance: ").concat(this.balance));
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.addCustomer = function () {
        console.log("Customer Added.");
    };
    Account.prototype.removeCustomer = function () {
        console.log("Customer Removed.");
    };
    return Account;
}());
//! Subclasses of Account.
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(_accNo, _balance, _dateOfOpening, _minBalance) {
        var _this = _super.call(this, _accNo, _balance, _dateOfOpening) || this;
        _this.minBalance = _minBalance;
        return _this;
    }
    //! Plus - Claude Sonnet 4.
    SavingsAccount.prototype.debitAmount = function (amount) {
        if (this.balance - amount < this.minBalance) {
            console.log("Cannot debit amount below minimum balance.");
            return false;
        }
        return _super.prototype.debitAmount.call(this, amount);
    };
    return SavingsAccount;
}(Account));
//! Subclass of Account with interest calculation.
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount(_accNo, _balance, _dateOfOpening, _interestRate) {
        var _this = _super.call(this, _accNo, _balance, _dateOfOpening) || this;
        //! Plus
        _this.calculateInterest = function () {
            return _this.balance <= 0 ? 0 : _this.balance * _this.interestRate;
        };
        _this.interestRate = _interestRate;
        return _this;
    }
    return CurrentAccount;
}(Account));
//! Test Cases Using ChatGPT.
var savings = new SavingsAccount("SA001", 5000, new Date("2024-01-01"), 1000);
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
var current = new CurrentAccount("CA002", 8000, new Date("2024-01-01"), 0.05);
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
