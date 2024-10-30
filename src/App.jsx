import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Menu from "./pages/menu/Menu";
import Reservations from "./pages/reservations/Reservations";
import OrderOnline from "./pages/order-online/OrderOnline";
import Login from "./pages/login/Login";
import Layout from "./components/Layout";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="menu" element={<Menu />} />
			<Route path="reservations" element={<Reservations />} />
			<Route path="order-online" element={<OrderOnline />} />
			<Route path="login" element={<Login />} />
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router} />;
}
