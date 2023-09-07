import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckIn from "./components/CheckIn";
import Home from "./components/Home";
import Results from "./components/Results";

function App() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}></Suspense>
			<Routes>
				<Route
					path="/"
					exact
					element={<Home />}
				/>
				<Route
					path="/checkin"
					exact
					element={<CheckIn />}
				/>
				<Route
					path="/results"
					exact
					element={<Results />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
