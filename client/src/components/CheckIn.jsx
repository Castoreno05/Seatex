import { useDispatch } from "react-redux";
import { addSamples } from "../redux/actions/sampleActions";
import axios from "axios";
import styled from "styled-components";

function CheckIn() {
	const dispatch = useDispatch();
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
			Product: "Ammonia",
			Sampler_Name: "Lisa Dennis",
			LotNo: "8wruefh",
			BatchNo: "23uq8edias",
			Comments: "Sample from finish production",
			Location: "BL-5",
		};

		axios
			.post("http://localhost:3001/insertData", post__Request, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				console.log(response);
				dispatch(addSamples(post__Request));
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
