import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function ItemDetailsPage(props) {
	const details = useParams();
	const [price, setPrice] = useState();
	useEffect(() => {
		fetchItems();
	}, []);

	const [item, setItem] = useState([])

	const fetchItems = async () => {
		const data = await fetch(`https://fakestoreapi.com/products/${details.id}`)
		const item = await data.json();
		setItem(item);
		setPrice((item.price).toFixed(2));
	}

	const onClick = () => {
		props.addToBasket(item.id, price)
	}

	return (
		<div className="itemDetailsPage">
			<div className="itemDetailsImageContainer">
				<img className="itemDetailsImage" src={item.image} alt={item.title} />
			</div>
			<div className="itemDetailsTextContainer">
				<h1>{item.title}</h1>
				<p>{item.description}</p>
				<p>£{price}</p>
				<button className="addToBasketButton" onClick={onClick}>Add to Basket</button>
			</div>
		</div>
	)
}

export default ItemDetailsPage;