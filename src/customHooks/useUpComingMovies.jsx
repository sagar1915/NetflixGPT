import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";

const useUpComingMovies = () => {
	const dispatch = useDispatch();

	const getUpComingMovies = async () => {
		const up_coming = await fetch(
			"https://api.themoviedb.org/3/movie/upcoming?page=1",
			options
		);
		const json = await up_coming.json();

		dispatch(addUpComingMovies(json.results));
	};
	useEffect(() => {
		getUpComingMovies();
	}, []);
};

export default useUpComingMovies;