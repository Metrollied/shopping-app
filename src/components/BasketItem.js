import { useEffect, useState } from "react";


function BasketItem(props) {
	const [price, setPrice] = useState();
	useEffect(() => {
		fetchItems();
	}, []);

	const [item, setItem] = useState([])

	const fetchItems = async () => {
		const data = await fetch(`https://fakestoreapi.com/products/${props.id}`)
		const item = await data.json();
		setItem(item);
		setPrice((item.price).toFixed(2));
	}

	const addQuantity = () => {
		props.addToBasket(item.id, price)
	}

	const removeQuantity = () => {
		props.removeQuantity(item.id, price)
	}


	return (
		<div className="basketItem">
			<div className="basketItemImageContainer">
				<img className="basketImage" src={item.image} alt={item.name} />
			</div>
			<p className="basketItemTitle">{item.title} </p>
			
			<div className="quantityArea">
				<p className="basketPrice">£{price}</p>
				<button onClick={removeQuantity}>-</button>
				<p>{props.quantity}</p>
				<button onClick={addQuantity}>+</button>
			</div>
		</div>
	)
}

export default BasketItem;