const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        
        const con = await mongoose.connect(process.env.MONGODB, {
        });
        console.log(`mongo connected`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb;