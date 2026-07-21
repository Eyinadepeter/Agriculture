import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import CreateNewPassword from "./pages/CreateNewPassword";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ForFarmers from "./pages/ForFarmers";
import ForBuyers from "./pages/ForBuyers";
import HowItWorks from "./pages/how-it-works";
import Dashboard from "./pages/Dashboard";
import Harvests from "./pages/Harvests";
import Storage from "./pages/Storage";
import Market from "./pages/Market";
import Sales from "./pages/Sales";
import Logistics from "./pages/Logistics";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Account from "./pages/Account";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/signup" element={<Signup />} />
			<Route path="/signin" element={<SignIn />} />
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/create-new-password" element={<CreateNewPassword />} />
			<Route path="/about" element={<AboutUs />} />
			<Route path="/for-farmers" element={<ForFarmers />} />
			<Route path="/for-buyers" element={<ForBuyers />} />
			<Route path="/how-it-works" element={<HowItWorks />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/harvests" element={<Harvests />} />
			<Route path="/storage" element={<Storage />} />
			<Route path="/market" element={<Market />} />
			<Route path="/sales" element={<Sales />} />
			<Route path="/logistics" element={<Logistics />} />
			<Route path="/analytics" element={<Analytics />} />
			<Route path="/messages" element={<Messages />} />
			<Route path="/account" element={<Account />} />
		</Routes>
	);
}

export default App;
