const express = require('express') 

const passQuery = require('./database.js')
const {checkAccount, checkTransaction, validateTransaction, findTransaction} = require('./validationChecks.js')
transactionRouter = express.Router();








transactionRouter.get('/',  async (req,res,next)=>{
    

    try{
     let query = 'Select * from public."Transaction"'

    const transactions =  await passQuery(query, [])
    console.log(transactions)
    res.status(200).send({transactions:transactions})
    } catch(err){
     next(err)
    }



})

transactionRouter.get('/:transactionId',  async (req,res,next)=>{
    

  try{
   let query = 'Select * from public."Transaction" where "TID"= $1'
   let params = [req.params.transactionId]

  const transactions =  await passQuery(query, params)
  const transaction = transactions[0]
  res.status(200).send(transaction)
  } catch(err){
   next(err)
  }



})


transactionRouter.post('/:transactionId/:amount/:user1/:user2', async (req,res,next) => {
    let params = []
    let query;
    params.push(req.params.budgetId)
  

      try{
      await checkAccount(req.params.user1)
      await checkAccount(req.params.user2)
      await validateTransaction(req.params.transactionId)
      console.log('validated')
      await checkTransaction(req.params.user1, req.params.user2, Number(req.params.amount))
      
      const newDate = new Date()
      query = 'INSERT INTO public."Transaction"("TID", date, amount, "senderAccount", "recipentAccount") VALUES ($1, $2, $3, $4, $5)'
      params = [req.params.transactionId,newDate, req.params.amount, req.params.user1,req.params.user2]
      await passQuery(query, params)
      res.status(200).send({message: 'Transaction successfull!'}      )

      } catch(err){
       next(err)
      }
 })

 transactionRouter.delete('/:transactionId',async (req,res,next) => {
  let params = [req.params.transactionId]
  
  try{
    await findTransaction(req.params.transactionId)
    
    query = 'DELETE FROM public."Transaction" WHERE "TID" = $1'
      passQuery(query, params)
      res.status(200).send({message:'Deletion successful,go back to home page'})
    
  }
  catch(error) {
    next(error)
  }

})


 transactionRouter.use((err, req, res, next) => {
    
  res.status(500).send({message: err.message})
})

 module.exports = transactionRouter













