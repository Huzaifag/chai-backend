//require('dotenv').config({path : './env'});
import app from './app.js';
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
dotenv.config({path : './env'});

connectDB()
.then(()=>{

  app.on("error", (error) => {
    console.log(`error : ${error}`);
  });

  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`application is running at : ${process.env.PORT}`);
  });
  
})
.catch((error)=>{
  console.log(`failed to connect with mongo db: ${error}`);
});










/*
## 1st approach

import express from 'express';
const app = express();

(async () => {

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log(`error : ${error}`);
    });

    app.listen(process.env.PORT, ()=>{
      console.log(`app is listening on port : ${process.env.PORT}`);
    });

  } 
  catch (error) {
    console.error(`error : ${error}`);
    throw error;
  }
})();
*/
