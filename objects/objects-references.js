let myAccount = {
  name: 'Mindy',
  expenses: 0,
  income: 0
}

// let otherAccount = myAccount; 

// otherAccount.income = 1000

let addExpense = function(account, amount) {
  account.expenses += amount;
}

let addIncome = function(account, amount) {
  account.income += amount;
}

let resetAccount = function(account) {
  account.income = 0
  account.expenses = 0
}

let getSummary = function(account) {
  return  `Account for ${account.name} has $${account.income} in income. $${account.expenses} in expenses`
  
}



resetAccount(myAccount)
addIncome(myAccount, 1000)
addExpense(myAccount, 900)
addExpense(myAccount, 20)
console.log(getSummary(myAccount))
resetAccount(myAccount)
console.log(getSummary(myAccount))





