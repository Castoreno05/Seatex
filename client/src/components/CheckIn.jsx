import axios from "axios";
import styled from "styled-components";

function CheckIn({ socket }) {
	const handlePostData = () => {
		const currentDate = new Date();
		const comment = document.getElementById("comment").value;
		// console.log(comment);
		const formattedDate =
			String(currentDate.getMonth() + 1).padStart(2, "0") +
			"/" +
			String(currentDate.getDate()).padStart(2, "0") +
			"/" +
			currentDate.getFullYear() +
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
			Comments: comment,
			Location: "Wearhouse",
		};

		axios
			.post("http://localhost:3001/api/sample/insertData", post__Request, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				// console.log(response);
				socket.emit("send_message", response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<Container>
			<textarea
				type="text"
				id="comment"
			/>
			<button onClick={handlePostData}>Post Data</button>
		</Container>
	);
}
const Container = styled.div``;

export default CheckIn;
