import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
	const user = useSelector((store) => store.user);
	console.log(user);

	const handleSignout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/");
			})
			.catch((error) => {
				// An error happened.
				console.log(error);
				navigate("/error");
			});
	};
	return (
		<div className="absolute flex justify-between z-30 w-[100%] px-[3rem] py-[1.5rem] m-auto bg-gradient-to-b from-black">
			<img
				className="w-[9.25rem] h-[2.5rem]"
				src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png"
				alt="netflix-logo-image"
			/>
			{user && (
				<div className="flex items-center">
					<div className="flex items-center px-1">
						<img
							className="h-8 rounded-md"
							src="https://occ-0-2086-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
							alt="usericon"
						/>
					</div>
					{user && (
						<p className="text-white font-semibold">{user.displayName}</p>
					)}
					<button
						onClick={handleSignout}
						className="py-2 px-3 mx-3 bg-red-600 rounded-md text-white text-sm font-semibold"
					>
						Sign out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
