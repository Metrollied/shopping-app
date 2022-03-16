import { Link } from "react-router-dom";
import homepageImage from "../images/homepage.jpg";

function Home() {
	return (
		<div className="pages home">
			<img className="homepageImage" src={homepageImage} alt="fashion" />
			<div className="homepageText">
				<h1 className="homeHeader">Welcome to TheShop™</h1>
				<h2>Sick of the highstreet? Get what you want, when you want it.</h2>
				<h2>No queues, no hassle. Open 24/7.</h2>
				<Link to="/shop" ><button className="homepageButton">See the range here</button></Link>
			</div>
			
		</div>
	)
}

export default Home;