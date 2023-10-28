import { netflix_logo } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);

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
						className="py-1.5 px-3 mx-3 bg-red-600 rounded-md text-white text-sm font-semibold"
					>
						Sign out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
