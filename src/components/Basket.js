import BasketItem from "./BasketItem";

function Basket(props) {
	let basket = props.basket;
	let array = Array.from(basket);
	console.log(basket);
	console.log(array);
	const setBasket = props.setBasket;
	const total = props.total


	return (
		<div className="pages basket">
			<h1 className="basketHeader">Your basket:</h1>
			<div className="basketItemsArea">
				{
					Object.keys(basket).map
						(function (key) {
							if (!basket[key]) {
								return (
									<div />
								)
							}
							else {
								return (
									<BasketItem
										key={key}
										id={key}
										quantity={basket[key].quantity}
										setBasket={setBasket}
										addToBasket={props.addToBasket}
										removeQuantity={props.removeQuantity}
									/>
								)
							};
						}
						)
				}
			</div>
			<p className="total">Total: £{total}</p>
		</div>
	)
}

export default Basket;