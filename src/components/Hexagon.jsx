import React, { Component } from 'react';

const style = {
	'backgroundImage': 'url(http://csshexagon.com/img/meow.jpg)'
};

class Hexagon2 extends Component {
	constructor() {
		super();
		this.state = {
			url: 'http://csshexagon.com/img/meow.jpg',
			gap: ''
		};
	}
	render() {
		return (
			<div className="hexIn">
				<a className="hexLink" href="#">
					<img src={this.state.url} alt="" />
					<h1>{this.props.data.title}</h1>
					<p>Some sample text about the article this hexagon leads to</p>
				</a>
			</div>
		);
	}
}

export default Hexagon2;