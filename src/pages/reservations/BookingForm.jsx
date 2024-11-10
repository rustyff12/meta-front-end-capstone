import "./bookingForm.css";
import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function BookingForm({
	formData,
	setFormData,
	availableTimes,
	dispatch,
	clearForm,
}) {
	const [hasVisited, setHasVisited] = useState({ date: false, time: false });
	const [isFormValid, setIsFormValid] = useState(false);

	useEffect(() => {
		const isDateValid = !!formData.date;
		const isTimeValid = !!formData.time;
		setIsFormValid(isDateValid && isTimeValid);
	}, [formData.date, formData.time]);

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData({
			[name]: name === "guests" ? parseInt(value, 10) : value,
		});

		if (name === "date") {
			dispatch({ type: "update_times", date: value });
		}
	}

	function handleBlur(e) {
		const { name } = e.target;
		setHasVisited((prev) => ({
			...prev,
			[name]: true,
		}));
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formData);
	}

	return (
		<>
			<form className="form-container" onSubmit={handleSubmit}>
				<h3 className="form-section-header">Book A Table</h3>
				<div className="form-element form-date">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						name="date"
						id="date"
						onChange={handleChange}
						onBlur={handleBlur}
						value={formData.date}
						required
						aria-invalid={
							hasVisited && !formData.date ? "true" : "false"
						}
						aria-describedby="date-description"
					/>
					{hasVisited.date && !formData.date && (
						<p id="date-description">
							* Please select a date for your booking.
						</p>
					)}
				</div>
				<div className="form-element form-time">
					<label htmlFor="time">Choose Time</label>
					<select
						name="time"
						id="time"
						onChange={handleChange}
						onBlur={handleBlur}
						value={formData.time}
						required
						aria-invalid={
							hasVisited.time && !formData.time ? "true" : "false"
						}
						aria-describedby="time-description">
						<option value="">Please pick a time</option>
						{availableTimes.map((time, index) => {
							return (
								<option value={time} key={index}>
									{time}
								</option>
							);
						})}
					</select>
					{hasVisited.time && !formData.time && (
						<p id="time-description" className="description">
							* Select a time from the available options.
						</p>
					)}
				</div>
				<div className="form-element form-guests">
					<label htmlFor="guests">Number of Guests</label>
					<input
						type="number"
						name="guests"
						id="guests"
						onChange={handleChange}
						value={formData.guests || ""}
						max={12}
						min={1}
						placeholder="1"
						required
						aria-required="true"
						aria-describedby="guests-description"
					/>
					<p id="guests-description" className="visually-hidden">
						* Please enter the number of guests, from 1 to 12.
					</p>
				</div>
				<div className="form-element form-occasion">
					<label htmlFor="occasion">
						Occasion
						<FontAwesomeIcon icon={faChampagneGlasses} size="lg" />
					</label>
					<select
						name="occasion"
						id="occasion"
						onChange={handleChange}
						value={formData.occasion}
						aria-describedby="occasion-description">
						<option defaultValue="">Occasion</option>
						<option value="birthday">Birthday</option>
						<option value="engagement">Engagement</option>
						<option value="anniversary">Anniversary</option>
					</select>
					<p id="occasion-description" className="visually-hidden">
						Select the occasion type, if any.
					</p>
				</div>
				<div className="form-element form-requests">
					<label htmlFor="occasion">Special Requests</label>
					<textarea
						value={formData.requests}
						placeholder="Special requests"
						onChange={handleChange}
						name="requests"
						id="requests"
						aria-describedby="requests-description"
					/>
					<p id="requests-description" className="visually-hidden">
						Enter any additional requests for your booking.
					</p>
				</div>
			</form>
			<div className="button-container">
				<button
					className="btn"
					onClick={clearForm}
					aria-label="Clear form fields">
					Clear
				</button>
				<button
					className="btn"
					type="submit"
					onClick={handleSubmit}
					disabled={!isFormValid}
					aria-label="Submit booking form">
					Submit
				</button>
			</div>
		</>
	);
}
