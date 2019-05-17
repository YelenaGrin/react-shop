import React from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'react-jss';
import Block from 'components/Block';

class Select extends React.PureComponent {
	rootSelectRef = null;
	displaySelectFlag = false;

	findDOMIcon = (node) => {
		if (node.nodeName === 'I') {
			return node;
		}
		else {
			return node.querySelector('.fas');
		}
	}

	render = () => {
		const { classes, control, children, className = '' } = this.props;

		return <Block
			ref={(node) => this.rootSelectRef = ReactDOM.findDOMNode(node)}
			className={classes.root +' '+ className}>
		<Block 
			className={classes.control}
			onClick={(e) => {
				const iconNode = this.findDOMIcon(e.target);
				if (!this.displaySelectFlag) {
					const contentHeight = this.rootSelectRef.childNodes[1].clientHeight;

					const rootHeight = this.rootSelectRef.clientHeight;

					iconNode.classList.add('fa-times');
					iconNode.classList.remove('fa-bars');

					this.rootSelectRef.style.height = (contentHeight + rootHeight - 12) +'px';
				}
				else {
					this.rootSelectRef.style.height = '62px';

					iconNode.classList.add('fa-bars');
					iconNode.classList.remove('fa-times');
				}
				this.displaySelectFlag = !this.displaySelectFlag;
			}}>
			{control}
		</Block>
			<div className={classes.content}>
				{children.length > 0 ?
					children.map((item, i) => (
                        <div key={i}>
						    {item}
			            </div>
					)) :
					<div>
						{children}
					</div>}
			</div>
		</Block>;
	}
};

export default withStyles({
	root: {
		width: 'calc(100% - 12px)',
		height: '62px',
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 2,
        transition: 'all 0.2s ease-out'
	},
	control: {
		height: '68px',
		display: 'flex',
		alignItems: 'center',
		padding: 0
	},
	content: {
		position: 'relative',
		marginLeft: '-6px',
		marginRight: '-6px',
		overflow: 'hidden'
	}
})(Select);