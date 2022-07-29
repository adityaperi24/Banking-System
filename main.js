const express = require('express') 

const app = express()
const viewRouter = require('./view.js');
const transactionRouter = require('./transaction.js');


app.use('/view', viewRouter)
app.use('/transaction', transactionRouter)

app.listen(3000, (req,res,next)=> {
    console.log('listening at Port')
})

app.use((err, req, res, next) => {
    
    res.status(500).send(err.message)
  })

  