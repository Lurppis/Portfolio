import React, { Component } from 'react';

class Hexagon2 extends Component {
	render() {
		return (
			<div>
				<div className="hexIn" data-toggle="modal" data-target={'#' + this.props.data.title}>
					<a className="hexLink" href="#">
						<img src={'./static/images/hexagons/' + this.props.data.image} alt='' />
						<h1>{this.props.data.title}</h1>
						<p>{this.props.data.technologies}</p>
					</a>
				</div>
			</div>
		);
	}
}

export default Hexagon2;