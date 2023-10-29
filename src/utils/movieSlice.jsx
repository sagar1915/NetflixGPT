import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
	name: "movies",
	initialState: {
		nowPlayingMovies: null,
		trailerVideo: null,
		popularMovies: null,
		topRated: null,
		upComing: null,
	},
	reducers: {
		addNowplayingMovies: (state, action) => {
			state.nowPlayingMovies = action.payload;
		},
		addTrailerVideo: (state, action) => {
			state.trailerVideo = action.payload;
		},
		addPopularMovies: (state, action) => {
			state.popularMovies = action.payload;
		},
		addTopRatedMovies: (state, action) => {
			state.topRated = action.payload;
		},
		addUpComingMovies: (state, action) => {
			state.upComing = action.payload;
		},
	},
});

export const {
	addNowplayingMovies,
	addTrailerVideo,
	addPopularMovies,
	addTopRatedMovies,
	addUpComingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
