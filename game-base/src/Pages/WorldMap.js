import React from 'react';
import {useSelector} from 'react-redux';

import TestComponent from '../Components/TestComponent'
import Spacer from './../Components/Spacer'
import Player from './../Components/Player/Player'

import styles from './WorldMap.module.scss'

const WorldMap = props => {

	const Inventory = useSelector(state => state.InventoryReducer.inventory)

	return (
		<div className={styles.PageContainer}>
			<header>
				World Map
				<Spacer />
				<TestComponent />
				<Spacer/>
			</header>

			<div className={styles.WorldContainer}>
				<Player />
			</div>
			<div className={styles.InventoryWrapper}>
				<section className={styles.Inventory}>
					{
						Inventory.map((item, index) => {
							return (
								<div key={'inventory-' +index } className={styles.InventoryItem}>
									<p>{item.name}</p>
									<p>{item.quantity}</p>
								</div>
							)
						})
					}
				</section>
			</div>
		</div>
	);
};

export default WorldMap;