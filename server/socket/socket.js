const io = require("socket.io")(3002, {
	cors: {
		origin: ["http://localhost:3000"],
	},
});

module.exports = io;
