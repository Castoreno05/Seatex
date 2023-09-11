import { ActionTypes } from "../constants/actionTypes";

export const setSamples = (sample) => {
	return {
		type: ActionTypes.SET_SAMPLES,
		payload: sample,
	};
};
export const addSamples = (sample) => {
	return {
		type: ActionTypes.ADD_SAMPLES,
		payload: sample,
	};
};
export const updateSample = (sample) => {
	return {
		type: ActionTypes.UPDATE_SAMPLE,
		payload: sample,
	};
};
