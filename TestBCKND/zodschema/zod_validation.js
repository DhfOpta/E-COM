
const validate=(schema)=>async(req,res,next)=>{
    try {
        const data=await schema.parseAsync(req.body);
        req.body=data
        next()
    } catch (error) {
        console.log(error);
        const err=await error.issues[0].message
        res.status(401).json({msg:err})
    }
}
module.exports=validate