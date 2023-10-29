import { useSelector } from "react-redux";
import useTrailerVideo from "../customHooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
	const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
	useTrailerVideo(movieId);
	return (
		<div className="relative">
			<iframe
				className="w-full aspect-video"
				src={
					"https://www.youtube.com/embed/" +
					trailerVideo?.key +
					"?&autoplay=&mute="
				}
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
		</div>
	);
};

export default VideoBackground;
