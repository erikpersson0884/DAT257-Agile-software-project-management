import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';


import authRouter from './authRouter.js';
import peopleRouter from './peopleRouter.js';
import donationsRouter from './donationRouter.js';

const app = express()
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 3001;



app.use("/api/auth", authRouter);
app.use("/api/people", peopleRouter);
app.use('/api/donations', donationsRouter);

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



app.get("/", (req,res) => {
    res.send("Hello, what are you doing here?<br> This is the api port... <br><br>I think...?")
})

app.listen(PORT, () => { console.log(`Server started on ${PORT}`) })

export default app;