import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
	// console.log(movies);
	return (
		<div className="px-12">
			<p className="px-1.5 py-1 text-white font-semibold text-2xl">{title}</p>
			<div className="flex overflow-x-scroll scroll">
				<div className="flex justify-center ">
					{movies?.map((m) => (
						<MovieCard key={m.id} path={m?.poster_path} />
					))}
				</div>
			</div>
		</div>
	);
};

export default MovieList;
