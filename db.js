const mongoose=require('mongoose');
var mongoUrl='mongodb+srv://mohamed:AaBbCc123@cluster0.xmqf7.mongodb.net/test1';
mongoose.connect(mongoUrl,{useUnifiedTopology:true,useNewUrlParser:true})
var db=mongoose.connection;
db.on('connected',()=>{
    console.log("Mongo Db Connection Successfull");
})
db.on('error',()=>{
    console.log("Mongo Db Connection failed");
})
module.exports=mongoose


