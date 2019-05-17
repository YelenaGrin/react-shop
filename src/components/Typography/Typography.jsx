import React from 'react';
import withStyles from 'react-jss';



export default withStyles({
	root: {
		fontFamily: 'arial',
		fontSize: '16px',
		lineHeight: '16px'
	}
})(({
	className = '',
	children,
	classes
}) => (
	<span className={classes.root + ' ' + className}>
		{children}
	</span>
));