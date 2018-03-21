import React, { Component } from 'react';

class Hexagon extends Component {
	render() {
		return (
			<div>
				<div className="hexIn" data-toggle="modal" data-target={'#' + this.props.data.title}>
					<a className="hexLink">
						<img src={require('../images/hexagons/' + this.props.data.image)} alt='' />
						<h1>{this.props.data.title}</h1>
						<p>{this.props.data.technologies}</p>
					</a>
				</div>
			</div>
		);
	}
}

export default Hexagon;