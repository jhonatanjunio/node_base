import "./helpers/prepare";

import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createWriteStream } from "fs";
import { PrismaClient } from "@prisma/client";
import { setupRoutes } from "./routes";

async function main() {
  const app = express();
  const port = process.env.PORT;
  const mode = process.env.NODE_ENV;
  const logFile = createWriteStream("./app.log", { flags: "a" });
  const prisma = new PrismaClient();

  mode === "development" ? app.use(morgan("dev")) : app.use(morgan("common", { stream: logFile }));

  app.use(cors());
  app.use(express.json());
  setupRoutes(app);

  app.listen(port, async () => {
    console.log(`🚀 Service started and listening at: http://127.0.0.1:${port}`);
    try {
      await prisma.$connect();
      console.log(`😄 Connected successfuly to the database!`);
    } catch (error) {
      console.log(`😕 Failed connecting to the database! Please check the logs`);
    }
  });
}

main().catch((error) => {
  console.log("Error!");
  console.log(error);
});
