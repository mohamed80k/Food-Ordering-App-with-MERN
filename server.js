const express=require("express")

const Pizza = require('./models/pizzaModel')
const app=express();
const db = require("./db.js")
app.use(express.json());
const pizzasRoute = require('./routes/pizzasRoute');
app.use('/api/pizzas', pizzasRoute);

app.get('/',(req,res)=>{
    res.send("server Working"+port);
});

const port=process.env.port || 8000;
app.listen(port,()=>'server runing on port port ');
