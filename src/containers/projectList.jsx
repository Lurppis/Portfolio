import React, { Component } from 'react';
import { connect } from 'react-redux';

import Hexagon from '../components/Hexagon';

class ProjectList extends Component {

	renderList() {
		return this.props.projects.map((project) => {
			return (
				<li key={project.title} className="hex">
					<Hexagon data={project}/>
				</li>
			);
		});
	}

	render() {
		return (
			this.renderList()
		);
	}
}
const mapStateToProps = (state) => ({
	projects: state.projects
});

export default connect(mapStateToProps)(ProjectList);