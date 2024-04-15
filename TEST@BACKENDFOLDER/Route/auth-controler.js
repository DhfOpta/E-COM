const DataTest=require('../DB/modlSchma')
const home=async(req,res)=>{
    const dataGt=await DataTest.find({})
    res.status(200).json({msg:"ok You Reach out "  +dataGt })

}
const podt=async(req,res)=>{

    try {
        const {name,email,password}=req.body

        const userExist=await DataTest.findOne({email})

        if (userExist) {
            res.status(400).json({msg:'Email Allready exist'})
        }

        const datta=await DataTest.create({name,email,password});
        res.status(200).json({msg:datta,tokn:await datta.genRatTokn(),userId:datta._id.toString()})

    } catch (error) {
        res.status(500).json({msg:"error trctch postDt"+error})
    }
}


const login=async(req,res)=>{
try {
    const {email,password}=req.body
    const userExist=await DataTest.findOne({email})
    if (!userExist) {
        res.status(500).json({msg:'First Do Registration'})

    }

    const data_compare=await userExist.DcodPasword(password)
    if (data_compare) {
        res.status(200).json({msg:'Login succesful',tokn:await DataTest.genRatTokn(),userID:userExist._id.toString()})
    }
    else{
        res.status(500).json({msg:"EnValid Email n Pasword"})
    }
} catch (error) {
    res.status(500).json({msg:error})
}
}
const user=async(req,res)=>{
    try {
        const data=req.user
        console.log(data);

        res.status(200).json({msg:"Tokn Valid",UserData:data})
    } catch (error) {
        console.log(error);
    }
}

module.exports={home,podt,login,user}