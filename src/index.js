 // we can take this from constant.js file
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT||3000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT||3000}`);
    });
})
.catch(()=>{
    console.log("MongoDB connection failed",error);
})








//  ; semicolon is use for clean a code wen someone not use ; in last code then it  automattically not get any error ;(async () =>{})()
/*
 this is first approach**
import express from "express";
const app = express()
    // connection database


(async () =>{
    try{
    await mongoose.connect(`${process.env.MONOGODB_URL}/${
        DB_NAME }`)
        app.on("Error",(error)=>{
            console.log("Error: ",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error:", error)
        throw error
    }
})()

// second  approach
/* function connectDB(){}
*/  