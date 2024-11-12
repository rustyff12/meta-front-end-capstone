import { useState, useEffect } from "react";
import "./confirmedBooking.css";

export default function ConfirmedBooking() {
	const [data, setData] = useState(null);

	function getDaySuffix(day) {
		if (day > 3 && day < 21) {
			return "th";
		}
		switch (day % 10) {
			case 1:
				return "st";
			case 2:
				return "nd";
			case 3:
				return "rd";
			default:
				return "th";
		}
	}

	function formatDate(dateStr) {
		const dateObj = new Date(dateStr);
		const dayOfWeek = dateObj.toLocaleString("en-US", { weekday: "long" });
		const day = dateObj.getDate();
		const month = dateObj.toLocaleString("en-US", { month: "long" });
		const year = dateObj.getFullYear();

		const dateSuffix = getDaySuffix(day);
		return `${dayOfWeek}, ${day}${dateSuffix} ${month}, ${year}`;
	}
	useEffect(() => {
		const storedData = localStorage.getItem("bookingData");

		if (storedData) {
			setData(JSON.parse(storedData));
			formatDate(data);
		}
	}, []);

	if (!data) {
		return <div className="confirmed-booking">Loading...</div>;
	}

	return (
		<section className="confirmed-booking">
			<div className="container">
				<h1 className="confirmed-header">Booking Confirmed!</h1>
				<div className="confirm-card">
					<h2>Little Lemon</h2>
					<p>
						<span>Date:</span> {formatDate(data.date)}
					</p>
					<p>
						<span>Time:</span> {data.time}
					</p>
					<p>
						<span>Guests:</span> {data.guests}
					</p>
					<p>
						<span>Occasion:</span> {data.occasion || "N/A"}
					</p>
					<p>
						<span>Special Requests:</span> {data.requests || "None"}
					</p>
				</div>
			</div>
		</section>
	);
}
