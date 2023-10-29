import { IMGCDN } from "../utils/constants";

const MovieCard = ({ path }) => {
	return (
		<div className="w-[180px] p-1.5">
			<img className="rounded-md" src={IMGCDN + path} alt="" />
		</div>
	);
};

export default MovieCard;
