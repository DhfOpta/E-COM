const {Schema,model}=require('mongoose')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const TstSchma=new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,unique:true
    } ,
     password:{
        type:String,
        require:true
    }
})

TstSchma.pre('save', async function(next){
    console.log("this "+this);
    const user=this
    try{
        if (!user.isModified('password')) {
            next()
        }
    const salt=await bcrypt.genSalt(10)
    const hsah_Passwor=await bcrypt.hash(user.password,salt)
    user.password=hsah_Passwor
    }catch(er){
next()
    }
 
// resizeBy.status(200).json()
})
TstSchma.methods.genRatTokn=async function(next){
    const user=this
try {
    return jwt.sign({
email:user.email,
name:user.name
 

    },process.env.SecrEAT_KEY,{expiresIn:'1d'})
    // next()
} catch (error) {
    next();
    console.log(error);
}
}
//decod password
TstSchma.methods.DcodPasword=async function(psarod){
    const user=this
   return bcrypt.compare(psarod,user.password)
}
module.exports= model('DataTest',TstSchma)