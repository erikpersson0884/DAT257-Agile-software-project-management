import express from 'express';
import dotenv from 'dotenv';

import loginRouter from './authRouter.js';
import authRouter from './authRouter.js';

const app = express()


dotenv.config();
const PORT = process.env.PORT || 8080;

app.use("/api/auth", authRouter);


// app.get("/api/v1", (req, res) => {
//     res.send("Hello")
// })
app.get("/api/v1", (req,res) => {
    res.send("Hello")
})

app.listen(PORT, () => { console.log(`Server started on ${PORT}`) })