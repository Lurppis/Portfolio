import React, { Component } from 'react';

class ProjectElement extends Component {
	render() {
		return (
			<div className="projectSection">
				<div className='row d-flex align-items-center'>
					<div className="col col-md-3">
						<img className='img-rounded' src={require('../images/hexagons/' + this.props.data.image)} alt="" />
					</div>
					<div className="col col-md-8 col-12">
						<h3>{this.props.data.title}</h3>
						<p>Description:</p>
						<p>{this.props.data.description}</p>
						<p>Used technologies: {this.props.data.technologies}</p>
						<a href={this.props.data.url} className="btn btn-primary">GitHub</a>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectElement;