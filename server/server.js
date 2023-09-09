const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const io = require("socket.io")(3002, {
	cors: {
		origin: ["http://localhost:3000"],
	},
});

require("dotenv").config();

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
});

app.get("/getAllData", (req, res) => {
	const query = "SELECT * FROM sampledata";

	db.query(query, (err, results) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error fetching data from the database.");
		} else {
			console.log("Data fetched from the database.");
			res.status(200).json(results); // Send the retrieved data as JSON response
		}
	});
});
// Define a route to insert data into the database
app.post("/insertData", (req, res) => {
	const {
		SampleNo,
		Date,
		Time_In,
		Time_Out,
		Product,
		Sampler_Name,
		LotNo,
		Comments,
		Status,
		Location,
		BatchNo,
	} = req.body;

	const query = `INSERT INTO sampledata (SampleNo, Date, Time_In, Time_Out, Product, Sampler_Name, LotNo, Comments, Status, Location, BatchNo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

	db.query(
		query,
		[
			SampleNo,
			Date,
			Time_In,
			Time_Out,
			Product,
			Sampler_Name,
			LotNo,
			Comments,
			Status,
			Location,
			BatchNo,
		],
		(err, result) => {
			if (err) {
				console.error(err);
				res.status(500).send("Error inserting data into the database.");
			} else {
				console.log("Data inserted into the database.");
				res.status(200).send("Data inserted successfully.");
			}
		}
	);
});

io.on("connection", (socket) => {
	console.log(`User: ${socket.id} has connected`);
	socket.on("send_message", (data) => {
		console.log(data);
		io.emit("display_message", data);
	});
	socket.on("disconnect", () => {
		console.log(`User: ${socket.id} has disconnected`);
	});
});

app.listen(3001, () => {
	console.log("Server has started");
});
