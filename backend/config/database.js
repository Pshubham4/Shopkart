//Author - Shubham Padalkar
//Description - This is file connects database to mongodb

const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI,
        {
            // useNewUrlParser:true, depreciated
            // useUnifiedTopology: true
        }).then(con =>
        {
            console.log(`Mongodb database connected to host: ${con.connection.host}`)
        })
}


module.exports = connectDatabase

