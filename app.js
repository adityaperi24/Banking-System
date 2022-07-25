const express = require('express') 
const app = express()
const envelopes = []

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

app.listen(3000, (req,res,next)=> {
    console.log('listening at Port')
})

app.get('/', (req,res,next)=>{
    res.status(200).send(envelopes)

})

app.post('/:budgetId/:name/:user/:budget', (req,res,next) => {
    const searchObject= envelopes.find((envelope) => envelope.budgetId === req.params.budgetId);
    if(searchObject){
        res.status(401).send('The BudgetId already exists')
    }
    else{
    const newEnvelope = new Envelope(req.params.budgetId, req.params.name, req.params.user, req.params.budget)
    
    envelopes.push(newEnvelope)

    res.status(201).send(newEnvelope)
    }
})


app.get('/:budgetId/', (req,res,next) => {
      
      const searchObject= envelopes.find((envelope) => envelope.budgetId === req.params.budgetId);
      if(searchObject){

        res.status(200).send(searchObject)
      }

      res.status(401).send('No Object found')
      
})

app.put('/:budgetId/:deduct', (req,res,next) => {
      
    
    try{
    const searchObject = envelopes.find((envelope) => envelope.budgetId === req.params.budgetId);
    if(searchObject){
      searchObject.deductAmount(req.params.deduct)
      res.status(200).send(searchObject)
    }

    else{
           next(Error('Error!Object Not Found'))
    }
} catch(error) {
    next(error)
}

})

app.delete('/:budgetId',(req,res,next) => {
  const searchIndex = envelopes.findIndex((envelope) => envelope.budgetId === req.params.budgetId);
  if(searchIndex != -1){
    envelopes.splice(searchIndex, 1)
    res.status(204).send()
  }
else {
  next(Error('Error!Object Not Found'))
}
})




app.put('/:Id1/:Id2/:transferAmount', (req,res,next) => {
      
    
    try{
    const searchObject1 = envelopes.find((envelope) => envelope.budgetId === req.params.Id1);
    const searchObject2 = envelopes.find((envelope) => envelope.budgetId === req.params.Id2);

    if(searchObject1 && searchObject2){
      searchObject1.deductAmount(req.params.transferAmount)
      searchObject2.addAmount(req.params.transferAmount)
      res.status(200).send(`${req.params.transferAmount} CAD transferred from Account-Id:${req.params.Id1} to Account-Id:${req.params.Id2}`)
    }

    else{
      if(!searchObject1){
           next(Error('Error! Object1 Not Found'))
    }
    else{
      next(Error('Error! Object2 Not Found'))
    }
  }
} catch(error) {
    next(error)
}

})
app.use((err, req, res, next) => {
    
  res.status(500).send(err.message)
})

