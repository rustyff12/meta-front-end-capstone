import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import "./under-construction.css";
export default function UnderConstruction() {
	return (
		<section className="construction">
			<h3 className="construction-title">Under Construction</h3>
			<p className="construction-text">
				Sorry, the page is currently under construction
			</p>
			<FontAwesomeIcon icon={faPersonDigging} size="5x" />
		</section>
	);
}
