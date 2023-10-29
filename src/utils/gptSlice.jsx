import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
	name: "gpt",
	initialState: {
		gptActive: false,
	},
	reducers: {
		toogleGPTsearchView: (state, action) => {
			state.gptActive = !state.gptActive;
		},
	},
});

export const { toogleGPTsearchView } = gptSlice.actions;
export default gptSlice.reducer;
