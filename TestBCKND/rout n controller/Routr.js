const express = require('express')
const { gtAllData, postData } = require('./controller')
const  validate  = require('../zodschema/zod_validation')
const signSchmaa = require('../zodschema/zodSchma')
const routr = express.Router()

routr.route('/').get(gtAllData);
// routr.route('/registration').post(validate(signSchmaa),postData)
routr.route('/registration').post(validate(signSchmaa), postData);



module.exports = routr