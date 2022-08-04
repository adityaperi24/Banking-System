const express = require('express') 
const app = express()
const cors = require('cors')

const viewRouter = require('./view.js');
const transactionRouter = require('./transaction.js');

app.use(cors({
    origin: "http://localhost:3001",
    methods: ["GET", "PUT", "POST", "DELETE"]
}))
app.use('/view', viewRouter)
app.use('/transaction', transactionRouter)

app.listen(3000, (req,res,next)=> {
    console.log('listening at Port')
})

app.use((err, req, res, next) => {
    
    res.status(400).send(err.message)
  })

  