const Mongoose=require('mongoose')

const url=process.env.Mongo_URL
console.log(url);
const conct=()=>{
    Mongoose.connect(url).then(()=>{console.log('conct DB');}).catch((er)=>{console.log(er);})
}
module.exports=conct