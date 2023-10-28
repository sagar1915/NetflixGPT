import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
const VideoTitle = ({ title, overview }) => {
	return (
		<div className="h-screen px-[5%] pt-[25%] absolute text-white bg-gradient-to-r from-black">
			<h3 className="p-4 font-medium text-[50px]">{title}</h3>
			<p className="p-4 w-1/2 text-[15px]">{overview}</p>
			<div className="flex">
				<button className=" flex items-center px-5 py-1 pb-1.5 rounded-md mx-4 bg-white text-black hover:bg-opacity-50">
					<FaPlay />
					<span className="px-1">Play</span>
				</button>
				<button className="flex items-center px-5 py-1 pb-1.5 rounded-md bg-white bg-opacity-50 hover:bg-opacity-20">
					<AiOutlineInfoCircle />
					<span className="px-1 text-sm">More Info</span>
				</button>
			</div>
		</div>
	);
};

export default VideoTitle;
