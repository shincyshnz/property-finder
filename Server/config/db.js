const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
   try {
    const {connection} = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected : ", connection.host);
   } catch (error) {
    console.log("Error connecting to Database : ", error);
   }
};

module.exports = connectDb;
