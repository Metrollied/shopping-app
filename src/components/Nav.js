import { Link } from "react-router-dom";

function Nav(props) {
	let total = props.total;
	if (isNaN(props.total) || props.total === 0) {
		total = null;
	}
	return (
		<nav>
			<h3>TheShop™</h3>
			<ul className="nav-links">
				<Link to="/shopping-app" className="links"><li>Home</li></Link>
				<Link to="/shop" className="links"><li>Shop</li></Link>
				<Link to="/basket" className="links"><li>Basket £{total}</li></Link>
			</ul>
		</nav>
	)
}

export default Nav;