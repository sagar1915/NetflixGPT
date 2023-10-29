import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
	name: "config",
	initialState: {
		Lang: "en",
	},
	reducers: {
		setLang: (state, action) => {
			state.Lang = action.payload;
		},
	},
});

export const { setLang } = configSlice.actions;
export default configSlice.reducer;
