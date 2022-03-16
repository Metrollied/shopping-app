import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Basket from './components/Basket';
import ItemDetailsPage from './components/ItemDetailsPage';

function App() {
	document.title = "TheShop™"
	const [basket, setBasket] = useState({});
	const [total, setTotal] = useState(0);


	function addToBasket(id, price) {
		let quantity;
		if (basket[id]) {
			quantity = basket[id].quantity;
		}
		else {
			quantity = 0;
		}
		setBasket(items => {
			return {
				...items, [id]: {
					quantity: parseInt([quantity]) + 1,
					price: price
				}
			}
		})
	}

	function removeQuantity(id, price) {
		let quantity = basket[id].quantity;
		if (basket[id].quantity === 1) {
			setBasket(items => {
				return {
					...items, [id]: undefined
				}
			})
		}
		else {
			setBasket(items => {
				return {
					...items, [id]: {
						quantity: parseInt([quantity]) - 1,
						price: price
					}
				}
			})
		}
	}

	useEffect(() => {

		let runningTotal = 0;
		Object.keys(basket).forEach(function (key) {
			if (basket[key]) {
				runningTotal = runningTotal + (basket[key].quantity * basket[key].price)
			}
		})
		setTotal(runningTotal.toFixed(2));
	}, [basket])


	return (
		<Router>
			<div className="App">
				<Nav total={total} />
				<div className="routes">
					<Routes>
						<Route path="/shopping-app" element={<Home />} />
						<Route path="/shop" element={<Shop setBasket={setBasket} basket={basket} addToBasket={addToBasket} />} />
						<Route path="/shop/:id" element={<ItemDetailsPage addToBasket={addToBasket} />} />
						<Route path="/basket" element={<Basket basket={basket} setBasket={setBasket} addToBasket={addToBasket} removeQuantity={removeQuantity} total={total} />} />
					</Routes>
				</div>
				<div className="footer">© Oliver Crawford</div>
			</div>
		</Router>
	);
}

export default App;
