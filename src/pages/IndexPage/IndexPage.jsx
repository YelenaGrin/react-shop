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
					<Button className={classes.btn}>
						Популярные товары
					</Button>
					<Button>
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
	}
})(IndexPage);