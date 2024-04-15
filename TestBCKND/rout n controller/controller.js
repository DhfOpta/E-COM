
const bcrypt=require('bcrypt')
const TestBacnd=require('../MongoDB/Schem')
const gtAllData=async(req,res)=>{
    try {
       const dataGt= await TestBacnd.find({})
        res.status(200).json({msg:dataGt})
    } catch (error) {
        res.status(404).json({msg:error})
    }
}

const postData=async(req,res)=>{
    try {
        
   
const {name,email,password}=req.body;
const userExist=await TestBacnd.findOne({email})
if (userExist) {
    console.log(userExist);
    res.status(404).json({msg:"Email Allready Exists:)"})
}

// const salt=bcrypt.genSalt(10)
// const hash_password=await bcrypt.hash(password,10)
// const dataPost=await TestBacnd.create({name,email,password:hash_password})

const dataPost=await TestBacnd.create({name,email,password})

res.status(201).json({msg:"dataPost Succesfull"+" "+ dataPost,token:await dataPost.gtJWTTOckn(),userId:dataPost._id.toString()})
} catch (error) {console.log(error);
        
}
}
module.exports={gtAllData,postData}