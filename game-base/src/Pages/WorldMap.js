import React from 'react';

import TestComponent from '../Components/TestComponent'
import Spacer from './../Components/Spacer'
import styles from './WorldMap.module.scss'

const WorldMap = props => {
	return (
		<div className={styles.PageContainer}>
			<header>
				World Map
				<Spacer />
				<TestComponent />
				<Spacer/>
			</header>
			
			<div className={styles.WorldContainer}>

			</div>
			<div className={styles.InventoryWrapper}>
				<section className={styles.Inventory}>

				</section>
			</div>
		</div>
	);
};

export default WorldMap;