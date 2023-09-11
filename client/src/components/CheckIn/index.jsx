import { SampleForm } from "./SampleForm";
import styled from "styled-components";

function CheckIn({ socket }) {
	return (
		<Container>
			<SampleForm socket={socket} />
		</Container>
	);
}
const Container = styled.div`
	display: flex;
	height: 98vh;
`;

export default CheckIn;
