require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = ()=>{
    // Database connection 🥳
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;
    connection.once('open', () => {
        console.log('Database connected 🥳🥳🥳🥳');
    }).catch(err => {
        console.log('Connection failed ☹️☹️☹️☹️');
        console.log('Error : ',err)
    });
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;