import { useReducer, useState } from "react";
import BookingForm from "./BookingForm";
export default function BookingPage() {
	const initialFormData = {
		date: "",
		time: "",
		guests: 1,
		occasion: "",
		requests: "",
	};
	const [formData, setFormData] = useState(initialFormData);

	function updateTimes(state, action) {
		return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
	}

	function initializeTimes() {
		return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
	}

	const [availableTimes, dispatch] = useReducer(
		updateTimes,
		[],
		initializeTimes
	);

	function updateFormData(newData) {
		setFormData((prevData) => ({ ...prevData, ...newData }));
	}

	function clearForm() {
		setFormData(initialFormData);
	}

	return (
		<div className="form-main">
			<BookingForm
				formData={formData}
				setFormData={updateFormData}
				availableTimes={availableTimes}
				dispatch={dispatch}
				clearForm={clearForm}
			/>
		</div>
	);
}
