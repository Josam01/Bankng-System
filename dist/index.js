"use strict";
// let age = 90;
// console.log(age);
// let ages:number[] = [1,2,3,4,5]
// ages.push(6)
// console.log(ages)
// let cars = [1,2]
class bankAccount {
    constructor(accountNumber, initialBalance, accountName) {
        this.accountNumber = accountNumber;
        this.initialBalance = initialBalance;
        this.accountName = accountName;
    }
    deposit(amount) {
        if (amount > 0) {
            this.initialBalance += amount;
            console.log(`Deposited ${amount} successfully. Balance:${this.initialBalance}`);
        }
        else {
            console.log(`invalid amount to deposit. Balance:${this.initialBalance}`);
        }
    }
}
const myAccount = new bankAccount(7026720697, 500, 'reddington');
myAccount.deposit(1000);
// console.log(myAccount)
