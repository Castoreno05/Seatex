import { combineReducers } from "redux";
import { sampleReducer } from "./sampleReducer";

const reducers = combineReducers({
	sampleData: sampleReducer,
});

export default reducers;
