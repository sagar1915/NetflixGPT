import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
	const dispatch = useDispatch();

	const getpopularMovies = async () => {
		const popular = await fetch(
			"https://api.themoviedb.org/3/movie/popular?page=1",
			options
		);
		const json = await popular.json();

		dispatch(addPopularMovies(json.results));
	};
	useEffect(() => {
		getpopularMovies();
	}, []);
};

export default usePopularMovies;
