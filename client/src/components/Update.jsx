import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";

function Update({ socket }) {
	const { samples } = useSelector((state) => state.sampleData);
	const [selectedSample, setSelectedSample] = useState("");
	const [selectedValue, setSelectedValue] = useState("");

	const handleSelectChange = (e) => {
		setSelectedValue(e.target.value);
	};
	const handleSelectSample = (e) => {
		setSelectedSample(e.target.value);
	};
	const handleEditSample = () => {
		const comment = document.getElementById("comment").value;
		const updateSample = {
			Status: Number(selectedValue),
			Comments: comment,
		};

		axios
			.put(
				`http://localhost:3001/api/sample/updateData/${selectedSample}`,
				updateSample,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((response) => {
				console.log(response);
				socket.emit("updated_message", [selectedSample, updateSample]);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const unresolvedOptions = samples
		.filter(
			(sample) =>
				sample.Status === 0 ||
				sample.Status === 1 ||
				sample.Status === 2 ||
				sample.Status === 3
		)
		.map((sample, index) => (
			<option
				key={index}
				value={sample.SampleNo}
			>
				{sample.SampleNo}
			</option>
		));

	return (
		<Container>
			<h1>Update</h1>
			<div className="statusDiv">
				<label htmlFor="sample">Active Samples</label>
				<select
					id="sample"
					name="sample"
					onChange={handleSelectSample}
				>
					<option></option>
					{unresolvedOptions}
				</select>
			</div>
			<div className="statusDiv">
				<label htmlFor="value">Status</label>
				<select
					id="value"
					name="status"
					onChange={handleSelectChange}
				>
					<option></option>
					<option value={1}>Approved</option>
					<option value={2}>Adjust</option>
					<option value={3}>Failed</option>
				</select>
			</div>
			<div className="statusDiv">
				<label htmlFor="comment">Comment</label>
				<textarea id="comment" />
			</div>
			<button onClick={handleEditSample}>Edit Samples</button>
		</Container>
	);
}
const Container = styled.div`
	display: flex;
	flex-direction: column;
	.statusDiv {
		display: flex;
		flex-direction: column;
	}
`;

export default Update;
