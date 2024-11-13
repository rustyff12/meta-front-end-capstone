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
							<Link to="/" aria-label="Home">
								Home
							</Link>
						</li>
						<li>
							<Link to="/about" aria-label="About">
								About
							</Link>
						</li>
						<li>
							<Link to="/menu" aria-label="Menu">
								Menu
							</Link>
						</li>
						<li>
							<Link to="/reservations" aria-label="Reservations">
								Reservations
							</Link>
						</li>
						<li>
							<Link to="/order-online" aria-label="Order online">
								Order Online
							</Link>
						</li>
						<li>
							<Link to="/login" aria-label="login">
								Login
							</Link>
						</li>
					</ul>
				</nav>
				<div className="footer-contact">
					<h4>Contact Us</h4>
					<ul>
						<li className="footer-address">
							<FontAwesomeIcon
								icon={faLocationDot}
								size="lg"
								aria-hidden="true"
							/>

							<div className="address-link">
								555 Main Street, <br />
								Chicago, IL <br />
								55555
							</div>
						</li>
						<li>
							<FontAwesomeIcon
								icon={faPhone}
								size="lg"
								aria-hidden="true"
							/>
							<span>(555) 555-5555</span>
						</li>
						<li>
							<FontAwesomeIcon
								icon={faEnvelope}
								size="lg"
								aria-hidden="true"
							/>
							<span>service@l_lemon.com</span>
						</li>
					</ul>
				</div>
				<div className="footer-social">
					<h4>Social Media</h4>
					<ul>
						<li>
							<Link
								to="https://www.facebook.com"
								target="_blank"
								aria-label="Visit our Facebook page">
								<FontAwesomeIcon
									icon={faFacebook}
									size="lg"
									aria-hidden="true"
								/>
								<span>Facebook</span>
							</Link>
						</li>
						<li>
							<Link
								to="https://www.twitter.com"
								target="_blank"
								aria-label="Visit our Twitter page">
								<FontAwesomeIcon
									icon={faTwitter}
									size="lg"
									aria-hidden="true"
								/>
								<span>Twitter</span>
							</Link>
						</li>
						<li>
							<Link
								to="https://www.instagram.com"
								target="_blank"
								aria-label="Visit our Instagram page">
								<FontAwesomeIcon
									icon={faInstagram}
									size="lg"
									aria-hidden="true"
								/>
								<span>Instagram</span>
							</Link>
						</li>
						<li>
							<Link
								to="https://www.youtube.com"
								target="_blank"
								aria-label="Visit our Youtube page">
								<FontAwesomeIcon
									icon={faYoutube}
									size="lg"
									aria-hidden="true"
								/>
								<span>YouTube</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
