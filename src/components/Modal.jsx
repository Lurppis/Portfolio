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
									Test body
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Modal;