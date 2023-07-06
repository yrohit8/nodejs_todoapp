import express from "express";
import router from "./routes/users.js"
import taskRouter from "./routes/task.js"
import {config} from "dotenv"
import cookieParser from "cookie-parser";
import { erorrMiddleware } from "./middlewares/error.js";
import cors from "cors"
export const app = express();

config({
    path:"./data/config.env"
})
// Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(
    cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
// Using Route
app.use("/api/v1/users",router)
app.use("/api/v1/task",taskRouter)

app.get("/",(req,res)=>{
    res.send("Nice Working")
})
// Using Error middleware
app.use(erorrMiddleware)

 