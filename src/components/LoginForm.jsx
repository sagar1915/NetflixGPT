import { useState } from "react";

const LoginForm = () => {
	const [isloginform, setisloginfrom] = useState(true);

	const handleForm = (e) => {
		e.preventDefault();
	};
	const toggleloginform = () => {
		setisloginfrom(!isloginform);
	};

	return (
		<div className="absolute mx-auto right-0 left-0 mt-32 bg-black/[0.85] rounded-md px-20 pt-10 pb-36 w-[450px]">
			<h1 className="text-white font-semibold text-3xl py-5">
				{isloginform ? "Sign in" : "Sign up"}
			</h1>
			<form action="" className="mt-3" onSubmit={handleForm}>
				{!isloginform && (
					<input
						type="text"
						placeholder="Name"
						className="w-full my-2 px-6 py-3 rounded-md bg-[#333333] text-[#8c8c8c]"
					></input>
				)}
				<input
					type="email"
					placeholder="Email Address"
					className="w-full my-2 px-6 py-3 rounded-md bg-[#333333] text-[#8c8c8c]"
				/>
				<input
					type="password"
					placeholder="Password"
					className="w-full my-2 px-6 py-3 rounded-md bg-[#333333] text-[#8c8c8c]"
				/>
				<button className="bg-[#e50914] w-full text-bold text-white  mt-8 p-3 rounded-md">
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
					This page is protected by Google reCAPTCHA to ensure you{"'"}re not a bot.{" "}
					<button className="text-[#0a61eb]">Learn more.</button>
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
