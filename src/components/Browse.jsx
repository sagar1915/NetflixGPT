import useNowplayingMovies from "../customHooks/useNowplayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpComingMovies from "../customHooks/useUpComingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
	useNowplayingMovies();
	usePopularMovies();
	useTopRatedMovies();
	useUpComingMovies();
	return (
		<div className="flex flex-col">
			<Header />
			<MainContainer />
			<SecondaryContainer />
		</div>
	);
};

export default Browse;
