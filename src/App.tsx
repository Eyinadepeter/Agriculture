import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import CreateNewPassword from "./pages/CreateNewPassword";
import Home from "./pages/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/create-new-password" element={<CreateNewPassword />} />
			
		</Routes>
	);
}

export default App;
