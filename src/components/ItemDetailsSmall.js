import { useEffect } from "react";
import { Link } from "react-router-dom";


function ItemDetailsSmall(props) {
	const details = props.details;
	const id = details.id;
	const price = details.price;
	const onClick = () => {
		props.addToBasket(id, price)
	}

	return (
		<div className="smallItems">
			<div className="smallImageDiv">
				<img className="smallItemImage" src={details.image} alt={details.title} />
			</div>
			<div className="smallTextArea">
				<Link to={`/shop/${details.id}`} >
					<p className="smallLink">{details.title}</p>
				</Link>
				<p>£{(details.price).toFixed(2)}</p>
				<button className="addToBasketButton" onClick={onClick}>Add to Basket</button>
			</div>
		</div>
	)
}

export default ItemDetailsSmall;