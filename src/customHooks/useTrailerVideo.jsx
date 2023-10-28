import { useEffect } from "react";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTrailerVideo = (movieId) => {
	const dispatch = useDispatch();
	const getMovieVideos = async () => {
		const data = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
			options
		);
		const json = await data.json();

		const filterTrailers = json.results.filter(
			(video) => video.type === "Trailer"
		);
		// if (filterTrailers === null) return;
		const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0];
		dispatch(addTrailerVideo(trailer));
	};

	useEffect(() => {
		getMovieVideos();
	}, []);
};

export default useTrailerVideo;
