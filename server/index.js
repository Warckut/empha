import express from "express";
import cors from "cors";
import router from "./src/app.js";

const port = 5000;

const app = express().use(cors()).use(express.json()).use("/api", router);

app.listen(port, async () => {
  console.log(`App listening on port ${port}`);
});
