import { SUPPORTED_LANGUAGES, netflix_logo } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BiSearchAlt } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { toogleGPTsearchView } from "../utils/gptSlice";
import { setLang } from "../utils/configSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
	const showGptSearch = useSelector((store) => store.gpt.gptActive);

	const handleLangChange = (e) => {
		dispatch(setLang(e.target.value));
		// console.log(e.target.value);
	};

	const handleGPTsearchClick = () => {
		dispatch(toogleGPTsearchView());
	};

	const handleSignout = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				// An error happened.
				console.log(error);
				navigate("/error");
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName, photoURL } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
						photoURL: photoURL,
					})
				);
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});
		//unsubscribe when component unmounts.
		return () => unsubscribe();
	}, []);

	return (
		<div className="h-[90px] absolute flex justify-between z-30 w-[100%] px-[3rem] py-[1.5rem] m-auto bg-gradient-to-b from-black">
			<img
				className="w-[9.25rem] h-[2.5rem]"
				src={netflix_logo}
				alt="netflix-logo-image"
			/>
			{user && (
				<div className="flex items-center">
					{showGptSearch && (
						<div>
							<select
								onChange={handleLangChange}
								name=""
								id=""
								className="px-2 py-1.5 mx-2 bg-gray-600 text-white rounded-md"
							>
								{SUPPORTED_LANGUAGES.map((l) => (
									<option key={l.identifier} value={l.identifier}>
										{l.name}
									</option>
								))}
							</select>
						</div>
					)}
					<div className="text-white flex border rounded-md border-green-500 bg-green-600 mx-2">
						{showGptSearch ? (
							<button
								onClick={handleGPTsearchClick}
								className="flex items-center px-2 py-1.5"
							>
								<IoHome className="text-xl" />
								<span className="px-1 text-sm font-semibold">Home</span>
							</button>
						) : (
							<button
								onClick={handleGPTsearchClick}
								className="flex items-center px-2 py-1.5"
							>
								<BiSearchAlt className="text-xl" />

								<span className="px-1 text-sm font-semibold">GPT Search</span>
							</button>
						)}
					</div>
					<div className="flex items-center px-1">
						<img
							className="h-8 rounded-md"
							src={user.photoURL}
							alt="usericon"
						/>
					</div>

					{user && (
						<p className="text-white font-semibold">{user.displayName}</p>
					)}
					<button
						onClick={handleSignout}
						className="py-1.5 px-3 pb-2 mx-3 bg-red-600 rounded-md text-white text-sm font-semibold"
					>
						Sign out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
