import { UpdateForm } from "./UpdateForm";
import styled from "styled-components";

function Update({ socket }) {
	return (
		<Container>
			<UpdateForm socket={socket} />
		</Container>
	);
}
const Container = styled.div`
	display: flex;
	height: 98vh;
`;

export default Update;
