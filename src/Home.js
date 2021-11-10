import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import FoodHotel from "./Pages/FoodHotel";
import BusSearch from "./Pages/BusSearch";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/Food-Hotel" element={<FoodHotel />} />
				<Route path="/bus" element={<BusSearch />} />
			</Routes>
		</BrowserRouter>
	);
}
