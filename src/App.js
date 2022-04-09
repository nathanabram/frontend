import logo from "./logo.svg";
import "./App.css";
import { GoogleLogin } from "react-google-login";
//Note that client ID inside the GoogleLogin component should come from a .env
function App() {
	const responseGoogle = (response) => {
		console.log(response);
	};

	const responseError = (error) => {
		console.log(error);
	};

	return (
		<div>
			<div className="App">
				<h1>Google Calendar API</h1>
			</div>
			<div>
				<GoogleLogin
					clientId="474512056759-bp88bv4to70gj06ulh5p599emq7g0l9n.apps.googleusercontent.com"
					buttonText="Sign in & Authorize Calendar Access"
					onSuccess={responseGoogle}
					onFailure={responseError}
					cookiePolicy={"single_host_origin"}
					// This is important, otherwise the backend won't get response token
					responseType="code"
					accessType="offline" // these lines say to get back a code that can create a refresh token even when user is offline
					scope="openid email profile https://www.googleapis.com/auth/calendar"
				/>
			</div>
		</div>
	);
}

export default App;
