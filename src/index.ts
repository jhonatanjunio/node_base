import express from "express";
import { config } from "dotenv";
config();
import routes from "./routes";
import morgan from "morgan";
import { createWriteStream } from "fs";
import { PrismaClient } from '@prisma/client'

const app = express();
const port = process.env.PORT;
const mode = process.env.NODE_ENV;
const logFile = createWriteStream("./app.log", { flags: "a" });
const cors = require('cors');
const prisma = new PrismaClient();

mode === "development"
    ? app.use(morgan("dev"))
    : app.use(morgan("common", { stream: logFile }));

    
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, async () => {
    console.log(`🚀 Service started and listening at: http://127.0.0.1:${port}`);
    try {        
        await prisma.$connect();
        console.log(`😄 Connected successfuly to the database!`);
    } catch (error) {
        console.log(`😕 Failed connecting to the database! Please check the logs`);
    }
});
