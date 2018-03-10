import React, { Component } from 'react';
import { connect } from 'react-redux';

import Hexagon from '../components/Hexagon';
import Modal from '../components/Modal';

class ProjectList extends Component {

	renderList() {
		return this.props.projects.map((project) => {
			return (
				<li key={project.title} className='hex'>
					<Hexagon data={project}/>
				</li>
			);
		});
	}
	renderModals() {
		return this.props.projects.map((project) => {
			return (
				< Modal key={project.title} data={project}/>
			);
		});
	}

	render() {
		return (
			<div>
				<ul id='hexGrid'>
					{this.renderList()}
				</ul>
				{this.renderModals()}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	projects: state.projects
});

export default connect(mapStateToProps)(ProjectList);