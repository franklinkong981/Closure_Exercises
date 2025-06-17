function createAccount(pin, amount = 0) {
  let accountPin = pin;
  let currentBalance = amount;
  return {
    checkBalance: (pin) => {
      if (pin === accountPin) {
        return `$${currentBalance}`;
      } else {
        return "Invalid PIN.";
      }
    },
    deposit: (pin, depositAmount) => {
      if (pin === accountPin) {
        currentBalance += depositAmount;
        return `Successfully deposited $${depositAmount}. Current balance: $${currentBalance}.`;
      } else {
        return "Invalid PIN.";
      }
    },
    withdraw: (pin, withdrawAmount) => {
      if (pin === accountPin && withdrawAmount < currentBalance) {
        currentBalance -= withdrawAmount;
        return `Successfully withdrew $${withdrawAmount}. Current balance: $${currentBalance}.`;
      } else if (pin  === accountPin && withdrawAmount > currentBalance) {
        return `Withdrawl amount exceeds account balance. Transaction cancelled.`;
      } else {
        return "Invalid PIN.";
      }
    },
    changePin(currentPin, newPin) {
      if (pin === accountPin) {
        accountPin = newPin;
        return "PIN successfully changed!";
      } else {
        "Invalid PIN.";
      }
    }
  }
}

module.exports = { createAccount };
