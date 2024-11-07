import { useState, useEffect } from "react";
import "./bookingForm.css";
export default function CopyBookingPage() {
	const [formData, setFormData] = useState({
		date: "",
		time: "",
		guests: 1,
		occasion: "",
		requests: "",
	});
	function handleChange(e) {
		const { name, value } = e.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: name === "guests" ? parseInt(value, 10) : value,
			};
		});
	}
	function handleSubmit(e) {
		e.preventDefault();
		console.log(formData);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="form-element form-date">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						name="date"
						onChange={handleChange}
						value={formData.date}
						required
					/>
				</div>
				<div className="form-element form-time">
					<label htmlFor="time">Choose Time</label>
					<select
						name="time"
						id="time"
						onChange={handleChange}
						value={formData.time}
						required>
						<option defaultValue="">Please pick a time</option>
						<option value="17:00">17:00</option>
						<option value="18:00">18:00</option>
						<option value="19:00">19:00</option>
						<option value="20:00">20:00</option>
						<option value="21:00">21:00</option>
						<option value="22:00">22:00</option>
					</select>
				</div>
				<div className="form-element form-guests">
					<label htmlFor="guests">Number of Guests</label>
					<input
						type="number"
						name="guests"
						onChange={handleChange}
						value={formData.guests || ""}
						max={12}
						min={1}
						placeholder="1"
						required
					/>
				</div>
				<div className="form-element form-occasion">
					<label htmlFor="occasion">Occasion</label>
					<select
						name="occasion"
						id="occasion"
						onChange={handleChange}
						value={formData.occasion}>
						<option defaultValue="">Occasion</option>
						<option value="birthday">Birthday</option>
						<option value="engagement">Engagement</option>
						<option value="anniversary">Anniversary</option>
					</select>
				</div>
				<div className="form-element form-requests">
					<label htmlFor="occasion">Occasion</label>
					<textarea
						value={formData.requests}
						placeholder="Special requests"
						onChange={handleChange}
						name="requests"
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}
