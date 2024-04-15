const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SchemaSet = new Schema({
    name: { type: String },
    email: { type: String ,unique:true},
    password: { type: String }
})
SchemaSet.pre('save', async function (next) {

    const user = this;
    if (!user.isModified('password')) {
        next()
    }
    try {
        const salt = await bcrypt.genSalt(10)
        const Hash_password = await bcrypt.hash(user.password, salt)
        user.password = Hash_password

    } catch (error) {
        next(error);
    }
})
SchemaSet.methods.gtJWTTOckn = async function () {
    try {
        return jwt.sign({
            email: this.email,
            password: this.password,
            // userid:this._id.toString()
        }, process.env.SecrateKy, { expiresIn: '1d' }
        )

    } catch (error) {
        console.log(error);
    }
}
module.exports = model('TestBacnd', SchemaSet)