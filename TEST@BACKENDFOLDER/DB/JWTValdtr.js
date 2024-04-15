const jwt = require("jsonwebtoken");
const DataTest=require('./modlSchma')
const validttJwt=async (req,res,next)=>{
try {
    const datTokn=await req.header('Authorization')
    console.log('tokn '+datTokn);
 const dataVal= await  jwt.verify(datTokn,process.env.SecrEAT_KEY)
 console.log(dataVal);
 const dataUser=await DataTest.findOne({email:dataVal.email})
 req.user=dataUser;
 req.tokn=datTokn
    next()
} catch (error) {
    console.log(error);
}
}

module.exports=validttJwt