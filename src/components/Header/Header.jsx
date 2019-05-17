import React from 'react';
import withStyles from 'react-jss';
import Block from 'components/Block';
//передаем в Block параметр className, чтобы применить стили  и дочерним компонентам
export default withStyles({
	root: {
		top: 0,
		left: 0,
		width: 'calc(100% - 12px)',
		height: 62,
		position: 'fixed',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#2e7d32'
	}  
})(({ 
	children,
	classes
}) => (  
	<Block className={classes.root}> 
		{children}
	</Block>
));