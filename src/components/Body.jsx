import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import Login from "./Login";

const Body = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const { uid, email, displayName, photoURL } = user;
				// console.log(user);
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
				// User is signed out
				dispatch(removeUser());
				// navigate("/");
			}
		});
	}, []);

	return (
		<div>
			<Login />
		</div>
	);
};

export default Body;
