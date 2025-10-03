import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; // we can take this from constant.js file

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DP_NAME}`)
        console.log(`\n MongoDB connect !! DB HOST:${connectionInstance.connection.host}`);
    }catch(error){
        console.log("MONGODB connection FAILED",error);
        process.exit(1)
    }
}
export default connectDB