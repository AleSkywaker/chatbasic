const express = require("express");
const app = express();
const socketio = require("socket.io");

app.use(express.static(__dirname + "/public"));

const expressServer = app.listen(7000, () => {
  console.log("listening on http://localhost:7000");
});

const io = socketio(expressServer);

io.on("connection", socket => {
  socket.emit("messageFromServer", {
    data: "Bienvenido al servidor de socketIO"
  });
  socket.on("dataToServer", data => {
    console.log(data);
  });
  socket.on("send-message", data => {
    io.emit("kaka", { data: data.mensajeCliente });
  });
});
