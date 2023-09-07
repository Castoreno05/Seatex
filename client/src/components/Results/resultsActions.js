import { useDispatch } from "react-redux";
import { setSamples } from "../../redux/actions/sampleActions";
import axios from "axios";
export const GetAllSamples = () => {
	const dispatch = useDispatch();
	axios
		.get("http://localhost:3001/getAllData", {
			headers: {
				"Content-Type": "application/json",
			},
		})
		.then((response) => {
			dispatch(setSamples(response.data));
		})
		.catch((error) => {
			console.error(error);
		});
};
