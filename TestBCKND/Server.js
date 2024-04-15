require('dotenv').config()
const express=require('express')
const app=express()
const PORT=process.env.PORT||5000
const routr=require('./rout n controller/Routr')
app.use(express.json());
app.use('/api',routr)
const connect=require('./MongoDB/mongoose');
app.get('/',async(req,res)=>{
    try {
        res.status(400).json({mg:"Home Test"});

    } catch (error) {
        console.log(error);
    }

})
const startServer=(PORT)=>{
    connect()
    app.listen(PORT);
    console.log(PORT+ " connect");
}
startServer(PORT)