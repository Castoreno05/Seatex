import { useSelector } from "react-redux";
import styled from "styled-components";

export const Samples = () => {
	const { samples } = useSelector((state) => state?.sampleData);
	return (
		<Container>
			{samples?.map((sample, i) => {
				const date = sample.Date;
				const dateParts = date.split(" ");
				const formattedDate = dateParts[0];
				const formattedTimeIn = dateParts[1];

				const getStatusColor = (status) => {
					switch (status) {
						case 0:
							return "";
						case 1:
							return "green";
						case 2:
							return "yellow";
						case 3:
							return "red";
						default:
							return "";
					}
				};
				const statusColor = getStatusColor(sample.Status);

				return (
					<div
						key={i}
						sample-id={sample.SampleNo}
						className={`sample ${statusColor}`}
					>
						<div className="header">
							<h2>Sample #</h2>
							<h2>Product</h2>
							<h2>Date</h2>
							<h2>Time In</h2>
							<h2>Time Out</h2>
							<h2>Depositor</h2>
							<h2>Lot #</h2>
							<h2>Location</h2>
							<h2>Batch #</h2>
							<h2>Status</h2>
						</div>
						<div className="body">
							<p>{sample.SampleNo}</p>
							<p>{sample.Product}</p>
							<p>{formattedDate}</p>
							<p>{formattedTimeIn}</p>
							<p></p>
							<p>{sample.Sampler_Name}</p>
							<p>{sample.LotNo}</p>
							<p>{sample.Location}</p>
							<p>{sample.BatchNo}</p>
							<p></p>
						</div>
						<div className="footer">
							<h2>Comments:</h2>

							<p>{sample.Comments}</p>
						</div>
					</div>
				);
			})}
		</Container>
	);
};
const Container = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	grid-gap: 1rem;
	.sample {
		border-radius: 5px;
		box-shadow: 0px 0px 9px 0px #000000;
		background-color: #463f3fbd;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		.header {
			display: grid;
			grid-template-columns: repeat(10, 1fr);
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
			background-color: #28282b;
			h2 {
				padding: 0.5rem;
				margin: 0;
				border-right: 1px grey solid;
				text-align: center;
				font-size: 30px;
				color: whitesmoke;
				font-family: "Oswald", sans-serif;
			}
			h2:last-of-type {
				border: none;
			}
		}
		.body {
			display: grid;
			grid-template-columns: repeat(10, 1fr);
			p {
				display: flex;
				align-items: center;
				justify-content: center;
				text-align: center;
				font-size: 22px;
				border-right: 1px grey solid;
				font-family: "Montserrat", sans-serif;
				font-weight: bold;
				color: whitesmoke;
				margin: 0;
				padding: 1rem;
			}
			p:last-of-type {
				border: none;
			}
		}
		.footer {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			padding: 0.5rem;
			// background-color: #28282b;
			border-bottom-left-radius: 5px;
			border-bottom-right-radius: 5px;
			border-top: 1px grey solid;
			h2 {
				margin: 0;
				font-family: "Oswald", sans-serif;
				color: whitesmoke;
			}
			p {
				font-size: 22px;
				margin: 0;
				white-space: normal;
				overflow-wrap: break-word;
				border-bottom-left-radius: 5px;
				border-bottom-right-radius: 5px;
				font-family: "Montserrat", sans-serif;
				color: whitesmoke;
			}
		}
	}
	.red {
		.body {
			p:last-of-type {
				margin: 0.5rem;
				background-color: #e32636;
				border-radius: 5px;
			}
		}
	}
	.green {
		.body {
			p:last-of-type {
				margin: 0.5rem;
				background-color: #32de84;
				border-radius: 5px;
			}
		}
	}
	.yellow {
		.body {
			p:last-of-type {
				margin: 0.5rem;
				background-color: #ffd700;
				border-radius: 5px;
			}
		}
	}
`;
