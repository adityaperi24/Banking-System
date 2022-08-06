const express = require('express') 
const app = express()
const cors = require('cors')
const viewRouter = require('./view.js')
const transactionRouter = require('./transaction.js');
const path = require("path")
const  PORT = process.env.PORT || 3000

app.use(cors({
    origin: "http://localhost:3001",
    methods: ["GET", "PUT", "POST", "DELETE"]
}))
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "Front-End/myapp/public")))

}
app.use('/view', viewRouter)
app.use('/transaction', transactionRouter)

app.listen(PORT, (req,res,next)=> {
    console.log('listening at Port ' + PORT)
})

app.use((err, req, res, next) => {
    
    res.status(400).send(err.message)
  })

  