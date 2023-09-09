import axios from "axios";
import styled from "styled-components";

function CheckIn({ socket }) {
	const handlePostData = () => {
		const currentDate = new Date();
		const formattedDate =
			currentDate.getFullYear() +
			"-" +
			String(currentDate.getMonth() + 1).padStart(2, "0") +
			"-" +
			String(currentDate.getDate()).padStart(2, "0") +
			" " +
			String(currentDate.getHours()).padStart(2, "0") +
			":" +
			String(currentDate.getMinutes()).padStart(2, "0") +
			":" +
			String(currentDate.getSeconds()).padStart(2, "0");

		const post__Request = {
			// SampleNo: 1,
			Date: formattedDate,
			Time_In: formattedDate,
			// Time_Out: formattedDate,
			Status: 0,
			Product: "1387ES",
			Sampler_Name: "Carolyn Daniels",
			LotNo: "5tersfd",
			BatchNo: "23ewds",
			Comments: "This is a comment",
			Location: "Wearhouse",
		};

		axios
			.post("http://localhost:3001/insertData", post__Request, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});
		socket.emit("send_message", post__Request);
	};

	return (
		<Container>
			<button onClick={handlePostData}>Post Data</button>
		</Container>
	);
}
const Container = styled.div``;

export default CheckIn;
