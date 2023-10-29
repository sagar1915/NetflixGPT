import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
	const dispatch = useDispatch();

	const getTopRatedMovies = async () => {
		const Top_rated = await fetch(
			"https://api.themoviedb.org/3/movie/top_rated?page=1",
			options
		);
		const json = await Top_rated.json();

		dispatch(addTopRatedMovies(json.results));
	};
	useEffect(() => {
		getTopRatedMovies();
	});
};
export default useTopRatedMovies;
