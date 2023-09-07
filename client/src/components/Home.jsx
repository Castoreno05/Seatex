import { useNavigate } from "react-router-dom";
import { GetAllSamples } from "./Results/resultsActions";
import styled from "styled-components";

function Home() {
	const navigate = useNavigate();
	GetAllSamples();
	return (
		<Container>
			<h1>Home</h1>
			<button onClick={() => navigate("/checkin")}>Check In</button>
			<button onClick={() => navigate("/results")}>Results Page</button>
		</Container>
	);
}
const Container = styled.div``;

export default Home;
