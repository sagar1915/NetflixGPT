import { useRef, useState } from "react";
import { updateProfile } from "firebase/auth";

import checkValidData from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [isloginform, setisloginfrom] = useState(true);
	const [errormsg, setErrorMsg] = useState(null);

	const fname = useRef(null);
	const email = useRef(null);
	const password = useRef(null);


	const handleButtonclick = () => {
		//validate the form data
		const msg = checkValidData(
			email.current.value,
			password.current.value,
			!isloginform && fname.current.value
		);

		setErrorMsg(msg);
		if (msg !== null) return;
		//signin or signup

		if (!isloginform) {
			//sign up logic
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					// console.log(user);

					updateProfile(user, {
						displayName: fname.current.value,
						photoURL: "https://example.com/jane-q-user/profile.jpg",
					})
						.then(() => {
							// Profile updated!
							// ...
							const { uid, email, displayName, photoURL } = auth.currentUser;
							// console.log(user);
							dispatch(
								addUser({
									uid: uid,
									email: email,
									displayName: displayName,
									photoURL: photoURL,
								})
							);
							navigate("/Browse")
						})
						.catch((error) => {
							// An error occurred
							setErrorMsg(error.msg);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMsg(errorCode + " - " + errorMessage);
				});
		} else {
			//sign in logic
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					// console.log(user);
					// ...
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMsg(errorCode + " - " + errorMessage);
				});
		}
	};
	const toggleloginform = () => {
		setisloginfrom(!isloginform);
		setErrorMsg();
	};

	return (
		<div className="absolute mx-auto right-0 left-0 mt-32 bg-black/[0.85] rounded-md px-20 pt-10 pb-36 w-[450px]">
			<h1 className="text-white font-semibold text-3xl py-5">
				{isloginform ? "Sign in" : "Sign up"}
			</h1>
			<form className="mt-3" onSubmit={(e)=>e.preventDefault()}>
				{!isloginform && (
					<input
						type="text"
						placeholder="Name"
						ref={fname}
						className="w-full my-2 px-6 py-3 rounded-md bg-[#333333] text-[#8c8c8c]"
					></input>
				)}
				<input
					type="text"
					placeholder="Email Address"
					ref={email}
					className="w-full my-2 px-6 py-3 rounded-md bg-[#333333] text-[#8c8c8c]"
				/>
				<input
					type="password"
					placeholder="Password"
					ref={password}
					className="w-full my-2 px-6 py-3 rounded-md bg-[#333333] text-[#8c8c8c]"
				/>
				<p className="text-red-600 text-xs">{errormsg}</p>
				<button
					onClick={handleButtonclick}
					className="bg-[#e50914] w-full text-bold text-white  mt-8 p-3 rounded-md"
				>
					{isloginform ? "Sign in" : "Sign up"}
				</button>

				{isloginform && (
					<>
						<input
							className="accent-[#8c8c8c] mt-3"
							type="checkbox"
							name=""
							id=""
						/>

						<label className="text-[#8C8C8C] text-sm pl-1" htmlFor="checkbox">
							Remember me
						</label>
						<span className="text-sm text-[#8c8c8c] float-right align-middle pt-3">
							Need help?
						</span>
					</>
				)}
				<h3 className="text-[#8c8c8c] pt-16">
					{isloginform ? "New to Netflix? " : "Already Registered. "}

					<button onClick={toggleloginform} className="text-white">
						{isloginform ? "Sign up now." : "Sign in now."}
					</button>
				</h3>

				<p className="text-[#8c8c8c] text-[0.8rem] pt-5">
					This page is protected by Google reCAPTCHA to ensure you{"'"}re not a
					bot. <button className="text-[#0a61eb]">Learn more.</button>
				</p>

				{/* <p className="text-[0.8rem] text-[#8c8c8c] pt-[2px]">
					The information collected by Google reCAPTCHA is subject to the Google
					Privacy Policy and Terms of Service, and is used for providing,
					maintaining, and improving the reCAPTCHA service and for general
					security purposes (it is not used for personalised advertising by
					Google).
				</p> */}
			</form>
		</div>
	);
};

export default LoginForm;
