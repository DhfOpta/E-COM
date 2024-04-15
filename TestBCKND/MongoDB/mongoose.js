const MOngoos = require('mongoose')

const URI = process.env.MONGODB_CONNTCT
console.log(URI);
const connect = async () => {
    try {
        await MOngoos.connect('mongodb://127.0.0.1:27017/testbcand');
        console.log("connect DB");
    } catch (error) {
        console.log(error);
        process.exit(0)

    }
}
module.exports = connect