const mongoose = require('mongoose');

async function connect()
{
    try {
        await mongoose.connect('mongodb://localhost:27017/newsmatter_dev_data', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Connect success!");
        
    } catch (error) {
        console.log("connect failed");
    }
}

module.exports = { connect };