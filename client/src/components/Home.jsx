import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home() {
	const navigate = useNavigate();
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
