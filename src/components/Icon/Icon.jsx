import React from 'react';
import withStyles from 'react-jss';

export default withStyles({
	root: {
		fontSize: 24,
		fontWeight: 500
	}
})(({
	iconName,
	className = '',
	classes
}) => (
	<i className={classes.root + ' fas fa-' +''+ iconName +' '+ className}>
	</i>
));