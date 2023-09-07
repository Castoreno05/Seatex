import { GetAllSamples } from "./resultsActions";
import { Samples } from "./Samples";
import styled from "styled-components";

function Results() {
	GetAllSamples();
	return (
		<Container>
			<Samples />
		</Container>
	);
}
const Container = styled.div``;

export default Results;
