import Header from "./Header";
import LoginForm from "./LoginForm";
import { netflix_bg } from "../utils/constants";

const Login = () => {
	return (
		<>
			<div className="">
				<Header />
				<img
					className="absolute h-full w-full bg-cover overflow-x-scroll"
					src={netflix_bg}
					alt="netflix-logo"
				/>
				<LoginForm />
			</div>
		</>
	);
};

export default Login;
