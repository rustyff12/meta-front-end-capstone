import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import BookingPage from "./pages/reservations/BookingPage";
import Layout from "./components/Layout";
import UnderConstruction from "./pages/under-construction/UnderConstruction";
import ConfirmedBooking from "./pages/reservations/ConfirmedBooking";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<UnderConstruction />} />
					<Route path="menu" element={<UnderConstruction />} />
					<Route path="reservations" element={<BookingPage />} />
					<Route
						path="reservations/confirmed"
						element={<ConfirmedBooking />}
					/>
					<Route
						path="order-online"
						element={<UnderConstruction />}
					/>
					<Route path="login" element={<UnderConstruction />} />
				</Route>
			</Routes>
		</Router>
	);
}
