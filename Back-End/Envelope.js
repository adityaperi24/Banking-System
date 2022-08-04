class Envelope {
    constructor(budgetId, name, user_name, budget) {
      this.budgetId = budgetId
      this.name = name;
      this.user_name = user_name;
      this.budget = Number(budget)
    }
    deductAmount (amount) {
        const newBalance = this.budget - Number(amount)
        if(newBalance < 0){
            throw new Error('Invalid Purchase! Purchase Amount is Greater Than the Transaction Amount')
        }

        this.budget = newBalance
    }
    addAmount (amount) {
  


      this.budget = this.budget + Number(amount)
  }
  }

  module.exports = Envelope