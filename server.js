import express from "express";
import { db } from "./config/db.js";
import dotenv from 'dotenv';
dotenv.config();

import userRouter from "./routes/userRouter.js"

const app = express();
app.use(express.json());

const port = process.env.PORT;

//connecting database
db();
// app.get("/", (req, res) => {
//     res.send("helo");
// })

app.use('/api/user', userRouter)

//running backend
app.listen(port, () => {
    console.log(`The Server is running in the port ${port}`)
})