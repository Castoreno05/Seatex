import { ActionTypes } from "../constants/actionTypes";

const initialState = null;

export const sampleReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_SAMPLES:
			return { ...state, samples: payload };
		case ActionTypes.ADD_SAMPLES:
			return { ...state, samples: [...state.samples, payload] };
		default:
			return state;
	}
};
