import { render, screen } from "@testing-library/react";
import BookingPage from "../pages/reservations/BookingPage";
import "@testing-library/jest-dom";

test("Renders the BookingPage heding", () => {
	render(<BookingPage />);
	const headingElement = screen.getByText("Book A Table");
	expect(headingElement).toBeInTheDocument();
});
