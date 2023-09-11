import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { formattedDate } from "./checkinActions";

export const SampleForm = ({ socket }) => {
	const [formData, setFormData] = useState({
		selectedProduct: "",
		selectedLocation: "",
		batchNumber: "",
		lotNumber: "",
		depositor: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	const handlePostData = (e) => {
		e.preventDefault();
		const post__Request = {
			Date: formattedDate,
			Time_In: formattedDate,
			Status: 0,
			Product: formData.selectedProduct,
			Sampler_Name: formData.depositor,
			LotNo: formData.lotNumber,
			BatchNo: formData.batchNumber,
			Location: formData.selectedLocation,
		};

		axios
			.post("http://localhost:3001/api/sample/insertData", post__Request, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				// console.log(response);
				socket.emit("send_message", response.data);
			})
			.catch((error) => {
				console.error(error);
			});
		setFormData({
			selectedProduct: "",
			selectedLocation: "",
			batchNumber: "",
			lotNumber: "",
			depositor: "",
		});
	};

	const products = [
		"KOH",
		"GD6734",
		"Glycol",
		"Ammonia",
		"Zinc",
		"Calcium",
		"Boron",
		"9915FC",
		"1349",
	];
	const locations = ["Warehouse", "Production", "BL-10", "ST-95", "Tank Truck", "239", "445"];

	const product = products.map((p, i) => (
		<option
			key={i}
			value={p}
		>
			{p}
		</option>
	));
	const location = locations.map((l, i) => (
		<option
			key={i}
			value={l}
		>
			{l}
		</option>
	));
	return (
		<Container>
			<div className="header">
				<h1>Check In Sample</h1>
			</div>
			<form>
				<div className="row">
					<div className="infoDiv">
						<label>Product</label>
						<select
							name="selectedProduct"
							value={formData.selectedProduct}
							onChange={handleInputChange}
						>
							<option></option>
							{product}
						</select>
					</div>
					<div className="infoDiv">
						<label>Location</label>
						<select
							name="selectedLocation"
							value={formData.selectedLocation}
							onChange={handleInputChange}
						>
							<option></option>
							{location}
						</select>
					</div>
				</div>
				<div className="row">
					<div className="infoDiv">
						<label>Batch Number</label>
						<input
							type="text"
							name="batchNumber"
							value={formData.batchNumber}
							onChange={handleInputChange}
						/>
					</div>
					<div className="infoDiv">
						<label>Lot Number</label>
						<input
							type="text"
							name="lotNumber"
							value={formData.lotNumber}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="row">
					<div className="infoDiv">
						<label>Depositor</label>
						<input
							type="text"
							name="depositor"
							value={formData.depositor}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="buttonDiv">
					<button onClick={(e) => handlePostData(e)}>Post Data</button>
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
				input {
					font-size: 20px;
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
