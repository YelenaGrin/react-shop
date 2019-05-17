import React from 'react';
import withStyles from 'react-jss';

export default withStyles({
	root: {
		outline: 0,
		padding: 6,
		border: 'none',
		cursor: 'pointer',
		backgroundColor: 'transparent'
	} 
})(({
	children,
	className = '',
	classes
}) => (
	<button className={classes.root +' '+ className}>
		{children}
	</button>
));