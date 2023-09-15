import { useNavigate } from "react-router-dom";
import { GetAllSamples } from "./Results/resultsActions";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineBeaker } from "react-icons/hi2";
import { GrUpdate } from "react-icons/gr";
import styled from "styled-components";

function Home() {
	const navigate = useNavigate();
	GetAllSamples();
	return (
		<Container>
			<div className="buttonDiv">
				<button onClick={() => navigate("/checkin")}>
					<p>Check-in</p>
					<AiFillCheckCircle />
				</button>
				<button onClick={() => navigate("/results")}>
					<p>Results</p>
					<HiOutlineBeaker />
				</button>
				<button onClick={() => navigate("/update_samples")}>
					<p>Update Samples</p>
					<GrUpdate />
				</button>
			</div>
		</Container>
	);
}
const Container = styled.div`
	display: flex;
	height: 98vh;
	.buttonDiv {
		display: flex;
		gap: 1rem;
		margin: auto;
		button {
			border-radius: 5px;
			cursor: pointer;
			font-size: 24px;
			height: 200px;
			width: 200px;
			svg {
				display: none;
			}
		}
		button:hover {
			display: flex;
			align-items: center;
			justify-content: center;
			p {
				display: none;
			}
			svg {
				display: flex;
				font-size: 30px;
			}
		}
	}
`;

export default Home;
