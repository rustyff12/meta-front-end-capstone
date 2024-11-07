import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookingPageOne from "./BookingPageOne";
import BookingPageTwo from "./BookingPageTwo";
import "./bookingPage.css";
export default function BookingPage() {
	const [currentStep, setCurrentStep] = useState(1);
	// console.log(currentStep);
	return (
		<div className="container form-container">
			<AnimatePresence mode="wait">
				{currentStep === 1 && (
					<motion.div
						key="step1"
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: 100, opacity: 0 }}
						transition={{ duration: 0.5 }}>
						<BookingPageOne />
					</motion.div>
				)}

				{currentStep === 2 && (
					<motion.div
						key="step2"
						initial={{ x: 100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -100, opacity: 0 }}
						transition={{ duration: 0.5 }}>
						<BookingPageTwo />
					</motion.div>
				)}
			</AnimatePresence>
			<button onClick={() => setCurrentStep(1)}>One</button>
			<button onClick={() => setCurrentStep(2)}>Two</button>
		</div>
	);
}
