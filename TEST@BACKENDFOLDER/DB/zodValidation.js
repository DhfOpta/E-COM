
const validat=(schema)=>async(req,res,next)=>{
    try {
        const data=await schema.parseAsync(req.body)
        req.body=data
        next()
    } catch (error) {
        const dataErr=error.issues[0].message
        res.status(500).json({msg:dataErr})

    }
}
module.exports=validat