import React, { Component } from 'react';

const style = {
	'backgroundImage': 'url(http://csshexagon.com/img/meow.jpg)'
};

class Hexagon2 extends Component {
	constructor() {
		super();
		this.state = {
			gap: ''
		};
	}
	render() {
		return (
			<div className={'hex'} style={style}>
				<a href="">lol</a>
				<div className="corner-1"></div>
				<div className="corner-2"></div>
			</div>
		);
	}
}

export default Hexagon2;