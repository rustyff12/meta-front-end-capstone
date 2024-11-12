import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { meals } from "../../utils/specialsData";
import "./styles/specials.css";

export default function Specials() {
	return (
		<section className="container specials-grid">
			<div className="specials-header">
				<h2>This weeks specials!</h2>
				<Link to="/order-online" className="btn">
					Online Menu
				</Link>
			</div>
			{meals.map((item, index) => {
				return (
					<article className="item-card" key={index}>
						<div className="item-card-image">
							<img src={item.image} alt={item.name} />
						</div>
						<div className="item-card-header">
							<h3>{item.name}</h3>
							<span>{item.price}</span>
						</div>
						<div className="item-card-footer">
							<p>{item.description}</p>
							<Link to="/order-online">
								Order a delivery{" "}
								<span>
									<FontAwesomeIcon icon={faMotorcycle} />
								</span>
							</Link>
						</div>
					</article>
				);
			})}
		</section>
	);
}
