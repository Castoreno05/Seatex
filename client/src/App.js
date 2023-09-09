import { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckIn from "./components/CheckIn";
import Home from "./components/Home";
import Results from "./components/Results";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3002");

function App() {
	const [newSample, setNewSample] = useState([]);

	useEffect(() => {
		socket.on("display_message", (data) => {
			setNewSample((prevSamples) => [...prevSamples, data]);
			console.log("New Message");
		});
		return () => {
			// Clean up the socket event listener if needed
			socket.off("display_message");
		};
	}, [newSample]);

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
					element={<Results />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
