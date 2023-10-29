import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
	const movieList = useSelector((store) => store.movies);
	console.log(movieList);
	return (
		<div className="bg-[#141414]">
			<div className="-mt-60 relative z-50">
				<MovieList title={"Now Playing"} movies={movieList?.nowPlayingMovies} />
				<MovieList title={"Popular"} movies={movieList?.popularMovies} />
				<MovieList title={"Top Rated"} movies={movieList?.topRated} />
				<MovieList title={"Up Coming"} movies={movieList?.upComing} />
			</div>
		</div>
	);
};

export default SecondaryContainer;
