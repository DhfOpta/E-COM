const {z}=require('zod')

const SignUpSchema=z.object({
    name:z.string({required_error:'Name is Required'}).min(2,{message:'Name must be 2 Latter'}).trim(),
    email:z.string({required_error:'Email is Required'}).email({message:"Email is not a Valid"}).trim(),
    password:z.string({required_error:'Password is Required'}).min(2,{message:'Password must be 2 Latter'}).trim()



})

const LogINSchema=z.object({
    // name:z.string({required_error:'Name is Required'}).min(2,{message:'Name must be 2 Latter'}).trim(),
    email:z.string({required_error:'Email is Required'}).email({message:"Email is not a Valid"}).trim(),
    password:z.string({required_error:'Password is Required'}).min(2,{message:'Password must be 2 Latter'}).trim()



})
module.exports={SignUpSchema,LogINSchema}