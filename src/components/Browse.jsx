import { useSelector } from "react-redux";
import useNowplayingMovies from "../customHooks/useNowplayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpComingMovies from "../customHooks/useUpComingMovies";
import GPTsearch from "./GPTsearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
	const toogleGPT = useSelector((store) => store.gpt.gptActive);

	useNowplayingMovies();
	usePopularMovies();
	useTopRatedMovies();
	useUpComingMovies();
	return (
		<div className="flex flex-col">
			<Header />
			{toogleGPT ? (
				<GPTsearch/>
			) : (
				<>
					<MainContainer />
					<SecondaryContainer />
				</>
			)}
		</div>
	);
};

export default Browse;
