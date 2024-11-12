import { render, fireEvent, screen } from "@testing-library/react";
import BookingPage, {
	initializeTimes,
	updateTimes,
} from "../pages/reservations/BookingPage";
import "@testing-library/jest-dom";
import { fetchAPI } from "../utils/mockAPI";
import { expect, vi, test, describe, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";
import BookingForm from "../pages/reservations/BookingForm";

vi.mock("../utils/mockAPI", () => ({
	fetchAPI: vi
		.fn()
		.mockReturnValue([
			"17:00",
			"18:00",
			"19:00",
			"20:00",
			"21:00",
			"22:00",
		]),
}));

const mockFormData = { date: "", time: "" };
const mockSetFormData = vi.fn();

describe("Renders alements on the page", () => {
	beforeEach(() => {
		mockSetFormData.mockClear();
	});

	test("Renders the BookingPage heading", () => {
		render(
			<MemoryRouter>
				<BookingPage />
			</MemoryRouter>
		);
		const headingElement = screen.getByText("Book A Table");
		expect(headingElement).toBeInTheDocument();
	});

	test("Has a date element label", () => {
		render(
			<MemoryRouter>
				<BookingForm
					formData={mockFormData}
					setFormData={mockSetFormData}
				/>
			</MemoryRouter>
		);

		const dateLabel = screen.getByLabelText("Date");
		expect(dateLabel).toBeInTheDocument();
	});

	test("Has a label for time", () => {
		render(
			<MemoryRouter>
				<BookingForm
					formData={mockFormData}
					setFormData={mockSetFormData}
				/>
			</MemoryRouter>
		);

		const timeLabel = screen.getByLabelText("Pick A Time");
		expect(timeLabel).toBeInTheDocument();
	});

	test("Has a label for guests", () => {
		render(
			<MemoryRouter>
				<BookingForm
					formData={mockFormData}
					setFormData={mockSetFormData}
				/>
			</MemoryRouter>
		);
		const guestsLabel = screen.getByLabelText("Number Of Guests");
		expect(guestsLabel).toBeInTheDocument();
	});

	test("Has a label for occasion", () => {
		render(
			<MemoryRouter>
				<BookingForm
					formData={mockFormData}
					setFormData={mockSetFormData}
				/>
			</MemoryRouter>
		);

		const occasionLabel = screen.getByLabelText("Occasion");
		expect(occasionLabel).toBeInTheDocument();
	});

	test("Has a label for special requests", () => {
		render(
			<MemoryRouter>
				<BookingForm
					formData={mockFormData}
					setFormData={mockSetFormData}
				/>
			</MemoryRouter>
		);

		const specialRequestLabel = screen.getByLabelText("Special Requests");
		expect(specialRequestLabel).toBeInTheDocument();
	});
});

describe("Required and button disabled checks", () => {
	beforeEach(() => {
		mockSetFormData.mockClear();
	});

	test("Date input has required attribute", () => {
		render(
			<MemoryRouter>
				<BookingForm
					formData={mockFormData}
					setFormData={mockSetFormData}
				/>
			</MemoryRouter>
		);

		const dateInput = screen.getByLabelText("Date");
		expect(dateInput).toHaveAttribute("required");
	});

	test("Time input has required attribute", () => {
		render(
			<MemoryRouter>
				<BookingForm
					formData={mockFormData}
					setFormData={mockSetFormData}
				/>
			</MemoryRouter>
		);

		const timeInput = screen.getByLabelText("Pick A Time");
		expect(timeInput).toHaveAttribute("required");
	});

	test("Guests input has required attribute", () => {
		render(
			<MemoryRouter>
				<BookingForm
					formData={mockFormData}
					setFormData={mockSetFormData}
				/>
			</MemoryRouter>
		);

		const guestsInput = screen.getByLabelText("Number Of Guests");
		expect(guestsInput).toHaveAttribute("required");
	});

	test("Submit button is disabled until form is valid", () => {
		render(
			<MemoryRouter>
				<BookingForm
					formData={mockFormData}
					setFormData={mockSetFormData}
				/>
			</MemoryRouter>
		);

		const submitButton = screen.getByText("Submit");
		expect(submitButton).toHaveAttribute("disabled");
	});
});

describe("Date input validation", () => {
	beforeEach(() => {
		mockSetFormData.mockClear();
	});

	test("Shows error message when date is empty", () => {
		render(
			<MemoryRouter>
				<BookingForm
					formData={mockFormData}
					setFormData={mockSetFormData}
				/>
			</MemoryRouter>
		);

		const dateInput = screen.getByLabelText("Date");
		expect(dateInput).toHaveValue("");

		expect(dateInput.ariaInvalid).toBe("true");
	});

	test("Does not show error message when date is selected", () => {
		render(
			<MemoryRouter>
				<BookingForm
					formData={{ date: "2024-11-15", time: "" }}
					setFormData={mockSetFormData}
				/>
			</MemoryRouter>
		);

		const dateInput = screen.getByLabelText("Date");

		expect(dateInput).toHaveValue("2024-11-15");

		expect(dateInput.ariaInvalid).toBe("false");
	});
});

describe("Time input validation", () => {
	beforeEach(() => {
		mockSetFormData.mockClear();
	});

	test("Shows error message when time input is empty", () => {
		render(
			<MemoryRouter>
				<BookingForm
					formData={mockFormData}
					setFormData={mockSetFormData}
				/>
			</MemoryRouter>
		);

		const timeInput = screen.getByLabelText("Pick A Time");
		expect(timeInput).toHaveValue("");

		expect(timeInput.ariaInvalid).toBe("true");
	});
});

describe("Guest input validation", () => {
	beforeEach(() => {
		mockSetFormData.mockClear();
	});

	test("Guest input should have a default of 1 guest", () => {
		render(
			<MemoryRouter>
				<BookingForm
					formData={mockFormData}
					setFormData={mockSetFormData}
				/>
			</MemoryRouter>
		);

		const guestInput = screen.getByLabelText("Number Of Guests");

		expect(guestInput).toHaveAttribute("placeholder");
	});
});

describe("initialTimes and updateTimes", () => {
	test("initializeTimes returns the correct initial times", () => {
		fetchAPI.mockReturnValue([
			"17:00",
			"18:00",
			"19:00",
			"20:00",
			"21:00",
			"22:00",
		]);

		const expectedTimes = [
			"17:00",
			"18:00",
			"19:00",
			"20:00",
			"21:00",
			"22:00",
		];
		expect(initializeTimes()).toEqual(expectedTimes);
	});

	test("updateTimes returns the correct times", () => {
		fetchAPI.mockReturnValue([
			"17:00",
			"18:00",
			"19:00",
			"20:00",
			"21:00",
			"22:00",
		]);

		const state = [];
		const action = { type: "update_times", date: new Date("2024-11-11") };
		const expectedTimes = [
			"17:00",
			"18:00",
			"19:00",
			"20:00",
			"21:00",
			"22:00",
		];
		expect(updateTimes(state, action)).toEqual(expectedTimes);
	});
});
