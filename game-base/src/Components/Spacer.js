import React from 'react';
import PropTypes from 'prop-types';

const Spacer = props => {
	const { size = "20px" } = props;
	return (
		<div style={{ width: "100%", height: size }}>

		</div>
	);
};

Spacer.propTypes = {
	size: PropTypes.string
};

export default Spacer;