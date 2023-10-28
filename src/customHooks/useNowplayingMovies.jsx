import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowplayingMovies } from "../utils/movieSlice";

const useNowplayingMovies = () => {
	const dispatch = useDispatch();

	const getNowplayingMovies = async () => {
		const now_playing = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?page=1",
			options
		);
		const json = await now_playing.json();
		
		dispatch(addNowplayingMovies(json.results));
	};
	useEffect(() => {
		getNowplayingMovies();
     }, []);
     
};

export default useNowplayingMovies;
