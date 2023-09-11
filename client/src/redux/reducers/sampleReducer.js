import { ActionTypes } from "../constants/actionTypes";

const initialState = null;

export const sampleReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_SAMPLES:
			return { ...state, samples: payload };
		case ActionTypes.ADD_SAMPLES:
			return { ...state, samples: [payload, ...state.samples] };
		case ActionTypes.UPDATE_SAMPLE:
			const sampleNo = Number(payload[0]);
			const updatedSample = state.samples.map((sample) => {
				if (sample.SampleNo === sampleNo) {
					return { ...sample, ...payload[1] };
				}
				return sample;
			});
			return { ...state, samples: updatedSample };
		default:
			return state;
	}
};
