const passQuery = require("./database")

async function checkAccount(account) {
    let params = [account]
    let query = 'select * from public."FinanceInfo" where  "budgetID" = $1'
    const accounts =  await passQuery(query, params)
    if(!accounts[0]){
        throw new Error(`Account: ${account} not found`)
    }

    else{
        console.log(`$Account: {account}  found`)
    }
}

async function validateAccount(account) {
  let params = [account]
  let query = 'select * from public."FinanceInfo" where  "budgetID" = $1'
  const accounts =  await passQuery(query, params)
  if(accounts[0]){
      throw new Error(`$ Account: ${account} already exists!`)
  }


}

async function validateNewBalance(account, amount) {
  let params = []
  let query = 'select * from public."FinanceInfo" where  "budgetID" = $1'
  params.push(account)
    
    try{
      let accounts =  await passQuery(query, params)
      const newBalance = Number(accounts[0].budget) -  amount
      


      if (newBalance < 0) {
        throw new Error('Funds not enough')
      } 
      
      return newBalance    


    }
    catch(err)
    {throw err    }
  }






async function validateTransaction(transaction) {
  let params = [transaction]
  let query = 'SELECT * FROM public."Transaction" where "TID" = $1'
  const accounts =  await passQuery(query, params)
  if(accounts[0]){
      throw new Error(`$TransactionId: ${transaction} exists, please use a different transactionID`)
  }


}

async function findTransaction(transaction) {
  let params = [transaction]
  let query = 'SELECT * FROM public."Transaction" where "TID" = $1'
  const accounts =  await passQuery(query, params)
  if(!accounts[0]){
      throw new Error(`$Cannot Proceed! TransactionId: ${transaction} doesnt exist!`)
  }


}



async function checkTransaction(account1, account2, amount) {

  let params = []
  let query = 'select * from public."FinanceInfo" where  "budgetID" = $1'
  params.push(account1)
    
    try{
      let accounts =  await passQuery(query, params)
      const newBalance1 = Number(accounts[0].budget) -  amount
      params = [account2]
      accounts =  await passQuery(query, params)
      const newBalance2 = Number(accounts[0].budget) +  amount

      if (newBalance1 < 0) {
        throw new Error('Funds not enough')
      } 
      
    
    query = 'UPDATE public."FinanceInfo" SET budget=$1 WHERE "budgetID" = $2'
    params  = [newBalance1, account1]
    await passQuery(query, params)

    params  = [newBalance2, account2]
    await passQuery(query, params)

    }
    catch(err)
    {throw err    }
}

module.exports = {checkAccount, checkTransaction, validateTransaction, findTransaction, validateAccount, validateNewBalance}