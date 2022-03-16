import { useState, useEffect } from "react";
import ItemDetailsSmall from "./ItemDetailsSmall";

function Shop(props) {

	useEffect(() => {
		fetchItems();
	}, []);

	const [items, setItems] = useState([])

	const fetchItems = async () => {
		const data = await fetch("https://fakestoreapi.com/products")
		const items = await data.json();
		setItems(items);
	}
	return (
		<div className="pages shop">
			{items.map(item => {
				return (
					
						<ItemDetailsSmall 
						key={item.id}
						details={item} 
						addToBasket={props.addToBasket} 
						setBasket={props.setBasket} 
						basket={props.basket}
						className="smallItems"/>
					
				)
			})}
		</div>
	)
}

export default Shop;