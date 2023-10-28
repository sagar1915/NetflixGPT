
import useNowplayingMovies from "../customHooks/useNowplayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
	useNowplayingMovies();
	return (
		<div className="w-max">
			<Header />
			{/* /
			main video container video back ground
			movies list and movie card.
			 */}
			<MainContainer />
			<SecondaryContainer/>
		</div>
	);
};

export default Browse;
