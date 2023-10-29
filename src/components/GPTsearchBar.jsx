import { BiSearchAlt2 } from "react-icons/bi";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const GPTsearchBar = () => {
	const language = useSelector((store) => store.config.Lang);

	return (
		<div className="mt-28 flex justify-center">
			<form
				action=""
				onSubmit={(e) => e.preventDefault()}
				className="w-1/2 grid grid-cols-12"
			>
				<input
					className="px-5 py-2 rounded-md mx-3 col-span-10"
					type="text"
					name=""
					id=""
					placeholder={lang[language].gptSearchPlaceholder}
				/>

				<button className="bg-red-600 rounded-md col-span-2 flex justify-center items-center px-2">
					<BiSearchAlt2 className="text-2xl text-white pt-1" />
					<span className="text-white">Search </span>
				</button>
			</form>
		</div>
	);
};

export default GPTsearchBar;
