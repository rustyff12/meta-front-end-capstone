import { Link } from "react-router-dom";
import heroImg from "/images/hero-image.jpg";
import "./styles/hero.css";

export default function Hero() {
	return (
		<section className="hero">
			<div className="container hero-container">
				<div className="hero-text">
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>
						We are a family owned Mediterranean restaurant, focused
						on traditional recipes served with a modern twist.
					</p>
					<Link className="btn" to="/reservations">
						Reserve a table
					</Link>
				</div>
				<img
					src={heroImg}
					alt="A picture of a selection of our beautiful food on offer"
					className="hero-image"
				/>
			</div>
		</section>
	);
}
