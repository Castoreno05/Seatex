const express = require("express");
const app = express();
const io = require("./socket/socket");
const routes = require("./controllers/index");
const cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(routes);

io.on("connection", (socket) => {
	console.log(`User: ${socket.id} has connected`);
	socket.on("send_message", (data) => {
		// console.log(data);
		io.emit("display_message", data);
	});
	socket.on("updated_message", (data) => {
		// console.log(data);
		io.emit("update_message", data);
	});
	socket.on("disconnect", () => {
		console.log(`User: ${socket.id} has disconnected`);
	});
});

const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => {
	console.log("Server has started");
});
