const router = require("express").Router();
const { db } = require("../../config/connection");

router.get("/getAllData", (req, res) => {
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
router.post("/insertData", (req, res) => {
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
				const insertedData = {
					SampleNo: result.insertId, // Assuming your table has an auto-increment ID field
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
				};
				res.status(200).send(insertedData);
			}
		}
	);
});
// Define a route to update data in the database
router.put("/updateData/:sampleNo", (req, res) => {
	const { Status, Comments } = req.body;
	const { sampleNo } = req.params;

	const query = `
	  UPDATE sampledata
	  SET Status = ?, Comments = ?
	  WHERE SampleNo = ?
	`;

	db.query(query, [Status, Comments, sampleNo], (err, result) => {
		if (err) {
			console.error(err);
			res.status(500).send("Error updating data in the database.");
		} else {
			if (result.affectedRows === 0) {
				// Handle the case where no rows were affected (no matching SampleNo)
				res
					.status(404)
					.send("No matching record found for the provided SampleNo.");
			} else {
				res.status(200).send("Data updated successfully.");
			}
		}
	});
});

module.exports = router;
