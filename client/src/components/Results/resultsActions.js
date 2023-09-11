import { useDispatch } from "react-redux";
import { setSamples } from "../../redux/actions/sampleActions";
import axios from "axios";

export const GetAllSamples = () => {
	const dispatch = useDispatch();
	axios
		.get("http://localhost:3001/api/sample/getAllData", {
			headers: {
				"Content-Type": "application/json",
			},
		})
		.then((response) => {
			dispatch(setSamples(response.data.reverse()));
		})
		.catch((error) => {
			console.error(error);
		});
};
