import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors, { CorsOptions } from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:3000/" }));
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: "http://localhost:3000/" as CorsOptions,
});

io.on("connection", (socket) => {
  console.log("server connedted");
});

httpServer.listen(8001);
