const {z}=require('zod')

const signSchmaa=z.object({
    name:z.string({required_error:"Name is required by Zod"}).trim().min(3,{message:"Name should be 3 latter"}),
    email:z.string({required_error:"Email is requ."}).email({message:"Email is not valid email"}).trim(),
    password:z.string({required_error:"Password is required"}).min(3,{message:"password should be 3 latter"})
})
module.exports=signSchmaa;