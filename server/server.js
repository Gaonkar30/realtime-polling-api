const express = require("express");
const http = require("http");
const sockio = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = sockio(server);
io.on("connection", (socket) => {
  console.log("new client connected");
  socket.on("predefinedreq", (data) => {
    console.log("recieved predefined req", data);
    socket.emit("automaticres", {
      message: "this is an automatic response from server",
    });
  });
  socket.on("disconnect", () => {
    console.log("client disconnected");
  });
});
server.listen(3000, () => {
  console.log("server is running on port 3000");
});
