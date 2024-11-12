import img1 from "/images/1-Mario-and-Adrian.jpg";
import img2 from "/images/2-Mario-and-Adrian.jpg";
import "./styles/about-us.css";
export default function AboutUs() {
	return (
		<section className="about-us">
			<div className="container">
				<h2>Little Lemon</h2>
				<h3>Chicago</h3>
				<div className="about-us-content">
					<p className="about-text-first">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Atque reprehenderit architecto tempora ab culpa fugiat
						accusantium perspiciatis adipisci natus enim! Ex unde
						totam molestiae nihil nisi vel aliquid assumenda, non id
						doloremque, nobis magni dolores ut similique fuga modi
						error illo reprehenderit obcaecati pariatur harum
						eveniet possimus! Qui, iusto numquam!
					</p>
					<img
						src={img1}
						alt="Photo of Mario and Adrian"
						className="about-image-first"
					/>

					<p className="about-text-second">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Atque reprehenderit architecto tempora ab culpa fugiat
						accusantium perspiciatis adipisci natus enim! Ex unde
						totam molestiae nihil nisi vel aliquid assumenda, non id
						doloremque, nobis magni dolores ut similique fuga modi
						error illo reprehenderit obcaecati pariatur harum
						eveniet possimus! Qui, iusto numquam!
					</p>
					<img
						src={img2}
						alt="Photo of Mario and Adrian"
						className="about-image-second"
					/>
				</div>
			</div>
		</section>
	);
}
