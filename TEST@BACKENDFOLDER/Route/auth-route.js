
const express=require('express')
const { home,podt ,login,user} = require('./auth-controler')
const validat = require('../DB/zodValidation')
const {SignUpSchema,LogINSchema} = require('../DB/zodSchema')
const validttJwt = require('../DB/JWTValdtr')

const routr=express.Router()

routr.route('/').get(home)
routr.route('/register').post(validat(SignUpSchema) ,podt)
routr.route('/login').post(validat(LogINSchema) ,login)
routr.route('/user').get(validttJwt,user)

module.exports=routr