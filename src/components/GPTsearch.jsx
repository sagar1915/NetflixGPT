import GPTmovieSuggestions from "./GPTmovieSuggestions";
import GPTsearchBar from "./GPTsearchBar";

const GPTsearch = () => {
	return (
		<div className="bg-black">
			<GPTsearchBar />
			<GPTmovieSuggestions />
		</div>
	);
};

export default GPTsearch;
