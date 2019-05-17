import React from 'react';
import withStyles from 'react-jss';
import Header from 'components/Header';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Typography from 'components/Typography';
import Select from 'components/Select';

class IndexPage extends React.PureComponent {
	render = () => {
		//console.log('!!!!');
		const { classes } = this.props;
		return <>
				<Select
					control={
						<Button className={classes.btn}>
							<Icon iconName="bars" />
						</Button>
				    }>
					<Button className={classes.control}>
						Популярные товары
					</Button>
					<Button className={classes.control}>
						Каталог товаров
					</Button>
				</Select>
			<Header>
				<Typography className={classes.title}>
					beetroot-shop
				</Typography>

				<Button className={classes.btn}>
					<Icon iconName="shopping-cart" />
					<Typography className={classes.badge}>
						145
					</Typography>
				</Button>
			</Header>
		</>
	}
};

export default withStyles({
	btn: {
		width: 38,
		height: 38,
		color: '#fff',
		borderRadius: 1000,
		position: 'relative',
		'&:hover': {
			backgroundColor: 'rgba(255,255,255,.14)'
		}
	},
	title: {
		color: '#fff',
		marginLeft: 50
	},
	badge: {
		position: 'absolute',
		top: '20px',
		left: '10px',
		backgroundColor: '#ffa726',
		color: '#1b5e20',
		fontSize: '12px',
		width: '24px',
		height: '24px',
		textAlign: 'center',
		borderRadius: '1000px',
		fontWeight: 'bold',
		lineHeight: '24px'
	},
    control: {
        width: '100%',
		paddingLeft: '18px',
		paddingTop: '18px',
		paddingBottom: '18px',
		backgroundColor: '#43a047',
		fontSize: '18px',
		textAlign: 'left',
		color: '#FFF',
		borderBottom: '1px solid #1b5e20',
		'&:hover': {
			backgroundColor: '#2e7d32'
		}
    }
})(IndexPage);