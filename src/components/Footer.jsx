import {
	faFacebook,
	faTwitter,
	faInstagram,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope,
	faLocationDot,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import footerLogo from "/images/icons/logo-white.png";
import "./styles/Footer.css";
export default function Footer() {
	return (
		<footer className="footer">
			<div className="container footer-grid">
				<img
					src={footerLogo}
					alt="Little Lemon Logo"
					className="footer-logo"
				/>
				<nav className="footer-nav">
					<h4>Links</h4>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/menu">Menu</Link>
						</li>
						<li>
							<Link to="/reservations">Reservations</Link>
						</li>
						<li>
							<Link to="/order-online">Order Online</Link>
						</li>
						<li>
							<Link to="/login">Login</Link>
						</li>
					</ul>
				</nav>
				<div className="footer-contact">
					<h4>Contact Us</h4>
					<ul>
						<li>
							<FontAwesomeIcon icon={faEnvelope} size="lg" />
							<span>
								555 Main Street,
								<br /> Chicago,
								<br /> IL 55555
							</span>
						</li>
						<li>
							<FontAwesomeIcon icon={faLocationDot} size="lg" />
							<span>(555) 555-5555</span>
						</li>
						<li>
							<FontAwesomeIcon icon={faPhone} size="lg" />
							<span>service@littlelemon.com</span>
						</li>
					</ul>
				</div>
				<div className="footer-social">
					<h4>Social Media</h4>
					<ul>
						<li>
							<Link to="https://www.facebook.com">
								<FontAwesomeIcon icon={faFacebook} size="lg" />
								<span>Facebook</span>
							</Link>
						</li>
						<li>
							<Link to="https://www.twitter.com">
								<FontAwesomeIcon icon={faTwitter} size="lg" />
								<span>Twitter</span>
							</Link>
						</li>
						<li>
							<Link to="https://www.instagram.com">
								<FontAwesomeIcon icon={faInstagram} size="lg" />
								<span>Instagram</span>
							</Link>
						</li>
						<li>
							<Link to="https://www.youtube.com">
								<FontAwesomeIcon icon={faYoutube} size="lg" />
								<span>YouTube</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
