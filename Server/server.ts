import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import cors from "cors"
import cookieParser from "cookie-parser"


dotenv.config();
import userRoute from "./Routes/userRoute"
import adminRoute from "./Routes/adminRoute"
import connectDB from './db';

const app: Express = express();
const port = process.env.PORT;

app.use(express.json({limit:'100mb'}));
app.use(express.urlencoded({limit:'100mb', extended:false }));
app.use(cookieParser())
  
app.use(cors({
  origin:process.env.CORS_ORIGIN,
  methods:process.env.CORS_METHODS,
  credentials:true
}))

connectDB()

app.use("/",userRoute)

app.use("/admin",adminRoute)


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
