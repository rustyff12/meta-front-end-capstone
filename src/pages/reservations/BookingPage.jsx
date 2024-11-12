import { useReducer, useState } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "../../utils/mockAPI";
import { useNavigate } from "react-router-dom";
import "./bookingPage.css";
export function updateTimes(state, action) {
	if (action.type === "update_times") {
		const availableTimes = fetchAPI(action.date);
		return availableTimes;
	}
	return state;
}

export function initializeTimes() {
	const initialTimes = fetchAPI(new Date());
	return initialTimes;
}

export default function BookingPage() {
	const initialFormData = {
		date: "",
		time: "",
		guests: 1,
		occasion: "",
		requests: "",
	};
	const [formData, setFormData] = useState(initialFormData);
	const navigate = useNavigate();

	const [availableTimes, dispatch] = useReducer(
		updateTimes,
		[],
		initializeTimes
	);

	function submitForm(formData) {
		localStorage.setItem("bookingData", JSON.stringify(formData));

		const storedData = localStorage.getItem("bookingData");
		const successful = storedData !== null;
		if (successful) {
			navigate("/reservations/confirmed");
		}
	}

	function updateFormData(newData) {
		setFormData((prevData) => ({ ...prevData, ...newData }));
	}

	function clearForm() {
		setFormData(initialFormData);
	}

	return (
		<div className="form-main">
			<div className="container">
				<BookingForm
					formData={formData}
					setFormData={updateFormData}
					availableTimes={availableTimes}
					dispatch={dispatch}
					clearForm={clearForm}
					submitForm={submitForm}
				/>
			</div>
		</div>
	);
}
