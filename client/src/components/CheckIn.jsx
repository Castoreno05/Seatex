import axios from "axios";
import styled from "styled-components";

function CheckIn() {
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
			Date: formattedDate,
			Time_In: formattedDate,
			Time_Out: formattedDate,
			Status: 1,
			Product: "Ammonia",
			Sampler_Name: "Stephan McCormick",
			LotNo: "23rwef",
			BatchNo: "23ewdasd",
			Comments: "Sample of old product. Testing the quality",
			Location: "MISC",
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
	};

	return (
		<Container>
			<button onClick={handlePostData}>Post Data</button>
		</Container>
	);
}
const Container = styled.div``;

export default CheckIn;
