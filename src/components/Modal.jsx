import React, { Component } from 'react';

class Modal extends Component {
	render() {
		return(
			<div className='modal fade' style={{top: '30vh'}} id={this.props.data.title} tabIndex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
				<div className='modal-dialog modal-lg' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								{this.props.data.title}
							</h5>
							<button type='button' className='close' data-dismiss='modal' aria-label="Close">
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>
							<div>
								<img src={require('../images/hexagons/' + this.props.data.image)} alt='' style={{float: 'left', marginRight: 25, marginBottom: 25, maxWidth: 280}} />
								<h4>Description:</h4>
								<p>{this.props.data.description}</p>
							</div>
							<p>Used technologies: {this.props.data.technologies}</p>
							<a href={this.props.data.url}>Go to github</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Modal;