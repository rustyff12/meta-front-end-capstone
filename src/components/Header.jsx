import { NavLink, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logoImg from "/images/icons/logo.png";
import "./styles/Header.css";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { pathname } = useLocation();
	return (
		<header>
			<nav className="container nav-bar">
				<Link className="nav-bar-logo" to="/" aria-label="home">
					<img
						src={logoImg}
						alt="Little Lemon Restaurant Logo + home link"
					/>
				</Link>
				<button
					className="nav-menu-hamburger"
					type="button"
					aria-label="menu button"
					aria-expanded={!isMenuOpen ? `false` : `true`}
					aria-haspopup="true"
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? (
						<FontAwesomeIcon icon={faXmark} size="2x" />
					) : (
						<FontAwesomeIcon icon={faBars} size="2x" />
					)}
				</button>
				<ul
					className={
						isMenuOpen
							? "nav-menu-links expanded"
							: "nav-menu-links"
					}
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					<li>
						<NavLink
							className={
								pathname === "/" ? "current-location" : ""
							}
							to="/"
							aria-label="Home"
							aria-current={
								pathname === "/" ? "page" : undefined
							}>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className={
								pathname === "/about" ? "current-location" : ""
							}
							to="/about"
							aria-label="About"
							aria-current={
								pathname === "/about" ? "page" : undefined
							}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							className={
								pathname === "/menu" ? "current-location" : ""
							}
							to="/menu"
							aria-label="Menu"
							aria-current={
								pathname === "/menu" ? "page" : undefined
							}>
							Menu
						</NavLink>
					</li>
					<li>
						<NavLink
							className={
								pathname === "/reservations"
									? "current-location"
									: ""
							}
							to="/reservations"
							aria-label="Reservations"
							aria-current={
								pathname === "/reservations"
									? "page"
									: undefined
							}>
							Reservations
						</NavLink>
					</li>
					<li>
						<NavLink
							className={
								pathname === "/order-online"
									? "current-location"
									: ""
							}
							to="/order-online"
							aria-label="Order online"
							aria-current={
								pathname === "/order-online"
									? "page"
									: undefined
							}>
							Order Online
						</NavLink>
					</li>
					<li>
						<NavLink
							className={
								pathname === "/login" ? "current-location" : ""
							}
							to="/login"
							aria-label="login"
							aria-current={
								pathname === "/login" ? "page" : undefined
							}>
							Login
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
