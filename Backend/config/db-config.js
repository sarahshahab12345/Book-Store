import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectToDb = async () => {
  try {
    const con = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(con.connection.host);
    console.log(con.connection.name);
  } catch (err) {
    console.error(`Error connection to DB ${err.message}`);
    process.exit(1);
  }
}

export default connectToDb;
