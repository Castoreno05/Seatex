import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckIn from "./components/CheckIn";
import Home from "./components/Home";
import Results from "./components/Results";
import Update from "./components/Update";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3002");

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
					element={<CheckIn socket={socket} />}
				/>
				<Route
					path="/results"
					exact
					element={<Results socket={socket} />}
				/>
				<Route
					path="/editsamples"
					exact
					element={<Update socket={socket} />}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
