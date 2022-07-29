const express = require('express') 

const passQuery = require('./database.js')

const {checkAccount, validateNewBalance, validateAccount} = require('./validationchecks.js')

viewRouter = express.Router();


 
viewRouter.get('/', async (req,res,next)=>{
    

         try{
          let query = 'Select * from public."FinanceInfo"'

         const accounts =  await passQuery(query, [])
         res.status(200).send(accounts)
         } catch(err){
          next(err)
         }
  
    
    
})

viewRouter.post('/:budgetId/:name/:user/:budget', async (req,res,next) => {

  

      try{
        await validateAccount(req.params.budgetId)
       
    
        
        query = 'INSERT INTO public."FinanceInfo"("budgetID", name, username, budget) VALUES ($1, $2, $3, $4);'
        params = [req.params.budgetId, req.params.name,req.params.user,Number(req.params.budget) ]
  
        await passQuery(query, params)
        res.status(200).send('Account created successfully!')

      
      } catch(err){
       next(err)
      }
 })


 viewRouter.get('/:budgetId/', async (req,res,next) => {
  let params = []
  let query = 'select * from public."FinanceInfo" where  "budgetID" = $1'
  params.push(req.params.budgetId)
  try{
    const accounts =  await passQuery(query, params)
    if(accounts[0])
    {
      res.status(200).send(accounts[0]) 
    }
    else {
      res.status(401).send('No Account found')
    }
    }  
    catch(err) {
      next(err)
    }

      }
)

viewRouter.put('/:budgetId/:deduct', async (req,res,next) => {
      try{
      await checkAccount(req.params.budgetId)
      const newBalance = await validateNewBalance(req.params.budgetId, req.params.deduct)
      
      
        query = 'UPDATE public."FinanceInfo" SET budget=$1 WHERE "budgetID" = $2'

        params = [newBalance, req.params.budgetId]
        await passQuery(query, params)
        res.status(201).send('Record Updated')
        
    
    }
 catch(error) {
    next(error)
}}
)


viewRouter.delete('/:budgetId',async (req,res,next) => {

  try{

    await checkAccount(req.params.budgetId)
      params = [req.params.budgetId]
    
      query = 'DELETE FROM public."FinanceInfo" WHERE "budgetID" = $1'
      passQuery(query, params)
      res.status(204).send('Deletion successful')
    
  
    
  }
  catch(error) {
    next(error)
  }

})




viewRouter.use((err, req, res, next) => {
    
  res.status(500).send(err.message)
})

module.exports = viewRouter