import React from 'react';
import { connect } from 'react-redux'
import { addHealthToUser } from '../Actions/UserActions'

import styles from './TestComponent.module.scss'

const TestComponent = (props) => {

	const addHealth = () => {
		props.dispatch(addHealthToUser(10))
	}

	return (
		<div className={styles.Wrapper}>
			<p>Health: {props.user.health}</p>
			<button onClick={addHealth}>Add 10 HP</button>
		</div>
	);
};


const mapStateToProps = state => ({
	user: {
		health: state.UserReducer.health
	}
})

export default connect(mapStateToProps)(TestComponent);