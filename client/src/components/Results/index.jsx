import { GetAllSamples } from "./resultsActions";
import { Samples } from "./Samples";
import styled from "styled-components";

function Results() {
	GetAllSamples();
	return (
		<Container>
			<h2>Sample Results</h2>
			<Samples />
		</Container>
	);
}
const Container = styled.div``;

export default Results;
