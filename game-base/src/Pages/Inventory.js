import React from 'react';
import {connect} from 'react-redux';
import {addToInventory} from '../Actions/InventoryActions'

const Inventory = props => {
	const addItemToInventory = () => {
		let newItem = {name: 'gold', quantity: 100}
		props.dispatch(addToInventory(newItem))
	}

	return (
		<div>
			Inventory
			<button onClick={addItemToInventory}>
				Add To Inventory
			</button>
		</div>
	);
};
export default connect()(Inventory);