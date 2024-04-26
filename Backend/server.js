import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';

import authRouter from './authRouter.js';

const app = express()
app.use(express.json());


dotenv.config();
const PORT = process.env.PORT || 8080;

app.use("/api/auth", authRouter);

export const dataPath = "./data";

export async function initialize_files(directories, files) {
    directories.forEach((path) => {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    });

    files.forEach((path) => {
        if (!fs.existsSync(path)) {
            fs.writeFileSync(path, JSON.stringify([], null, 2));
        }
    });
}

initialize_files([dataPath], []);



app.get("/api/v1", (req,res) => {
    res.send("Hello")
})

app.listen(PORT, () => { console.log(`Server started on ${PORT}`) })