import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
	return (
		<>
			<div className="">
				<Header />
				<img
					className="absolute h-full w-full bg-cover overflow-x-scroll"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="netflix-logo"
				/>
				<LoginForm />
			</div>
		</>
	);
};

export default Login;
