import "./styles/testimonials.css";
import { testimonialData } from "../../utils/testimonialsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const halfOrFull = { 1: faStar, 0.5: faStarHalfStroke };

export default function Testimonials() {
	function starRatings(num) {
		let res = [];
		for (let i = 0; i < Math.floor(num); i++) {
			res.push(1);
		}
		if (num % 1 !== 0) {
			res.push(0.5);
		}
		return res;
	}

	return (
		<section className="testimonials">
			<div className="container">
				<h2>What people are saying about us</h2>
				<div className="testimonials-container">
					{testimonialData.map((item, index) => {
						return (
							<article className="testimonial-card" key={index}>
								<img
									src={item.image}
									alt={`A Picture of ${item.name}`}
								/>
								<h4>{item.name}</h4>
								<span className="stars">
									{starRatings(item.rating).map(
										(rating, i) => (
											<FontAwesomeIcon
												icon={halfOrFull[rating]}
												key={i}
												size="xs"
											/>
										)
									)}
									<span className="total">{` (${item.rating}) stars`}</span>
								</span>
								<p>{item.description}</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
