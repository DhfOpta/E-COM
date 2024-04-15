require('dotenv').config()
const express =require('express')

const conct=require('./DB/Mongose')
const app=express()
const rout=require('./Route/auth-route')
app.use(express.json())
app.use('/aut/api',rout)


const start=()=>{
    conct();
    app.listen(6000);
    console.log('conct '+ 6000);
}
// app.get('/',(req,res)=>{
//     res.status(200).json({msg:"Home page"})
// })
start()
