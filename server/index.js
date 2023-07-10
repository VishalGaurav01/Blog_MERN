import express from 'express';


// import component
import Connection from "./database/db.js";


import cors from 'cors';
import Router from './routes/route.js';
import bodyParser from 'body-parser';
 
const app=express();

// CORS- cross origin request is used to share data in different port

app.use(cors())
app.use(bodyParser.json({extended:true}))  //this 
app.use(bodyParser.urlencoded ({extended:true}))   //this   
app.use('/',Router);
const PORT =8000;


app.listen(PORT,()=>console.log(`server is succesfully ON on port ${PORT}`))


Connection();
