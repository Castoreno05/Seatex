import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";

export const UpdateForm = ({ socket }) => {
	const [selectedSample, setSelectedSample] = useState("");
	const [selectedValue, setSelectedValue] = useState("");
	const { samples } = useSelector((state) => state.sampleData);

	const handleSelectSample = (e) => {
		setSelectedSample(e.target.value);
	};
	const handleSelectChange = (e) => {
		setSelectedValue(e.target.value);
	};
	const handleUpdateSample = (e) => {
		e.preventDefault();
		const comment = document.getElementById("comment").value;

		const commentInput = document.getElementById("comment");
		const sampleSelect = document.getElementById("sample");
		const valueSelect = document.getElementById("value");

		// Clear the input field
		commentInput.value = "";
		// Reset the dropdowns to their initial value
		sampleSelect.selectedIndex = 0; // Assuming the first option is empty
		valueSelect.selectedIndex = 0; // Assuming the first option is empty

		const currentDate = new Date();

		 const formattedDate =
			String(currentDate.getMonth() + 1).padStart(2, "0") +
			"/" +
			String(currentDate.getDate()).padStart(2, "0") +
			"/" +
			currentDate.getFullYear() +
			" " +
			String(currentDate.getHours()).padStart(2, "0") +
			":" +
			String(currentDate.getMinutes()).padStart(2, "0") +
			":" +
			String(currentDate.getSeconds()).padStart(2, "0");

		const updateSample = {
			Status: Number(selectedValue),
			Comments: comment,
			Time_Out: formattedDate,
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
			<div className="header">
				<h1>Update Sample</h1>
			</div>
			<form>
				<div className="row">
					<div className="infoDiv">
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
					<div className="infoDiv">
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
				</div>
				<div className="row">
					<div className="infoDiv">
						<label htmlFor="comment">Comment</label>
						<textarea id="comment" />
					</div>
					<div className="infoDiv"></div>
				</div>
				<div className="buttonDiv">
					<button onClick={(e) => handleUpdateSample(e)}>Update Sample</button>
				</div>
			</form>
		</Container>
	);
};
const Container = styled.div`
	width: 500px;
	margin: auto;
	border-radius: 5px;
	box-shadow: 0px 0px 9px 0px #000000;
	background-color: #463f3fbd;
	.header {
		background-color: #28282b;
		padding: 0.5rem;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		h1 {
			color: white;
			text-align: center;
			margin: 0;
			font-family: "Oswald", sans-serif;
		}
	}
	form {
		display: flex;
		padding: 0.5rem;
		margin-top: 0.5rem;
		flex-direction: column;
		gap: 1rem;
		.row {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 0.5rem;
			.infoDiv {
				display: flex;
				flex-direction: column;
				label {
					font-family: "Montserrat", sans-serif;
					color: white;
					font-size: 22px;
				}
				select,
				input,
				textarea {
					font-size: 20px;
				}
				textarea {
					width: 100%;
					height: 150px;
				}
			}
		}
	}
	.buttonDiv {
		display: flex;
		justify-content: center;
		button {
			padding: 0.5rem;
			font-size: 20px;
			font-family: "Montserrat", sans-serif;
			cursor: pointer;
			border-radius: 5px;
			border: none;
		}
	}
`;
