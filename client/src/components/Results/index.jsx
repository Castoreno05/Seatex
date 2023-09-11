import { useDispatch } from "react-redux";
import { addSamples, updateSample } from "../../redux/actions/sampleActions";
import { Samples } from "./Samples";
import styled from "styled-components";

function Results({ socket }) {
	const dispatch = useDispatch();
	socket.on("display_message", (data) => {
		dispatch(addSamples(data));
	});
	socket.on("update_message", (data) => {
		dispatch(updateSample(data));
	});
	return (
		<Container>
			<Samples />
		</Container>
	);
}
const Container = styled.div`
	padding: 2rem;
	display: flex;
	flex-direction: column;
`;

export default Results;
