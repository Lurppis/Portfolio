import React, { Component } from 'react';

import { connect } from 'react-redux';

class ProjectList extends Component {
	constructor(props) {
		super(props);
	}

	renderList() {
		return this.props.projects.map((project) => {
			return(project.title);
		});
	}

	render() {
		return(
			<div>
				{this.renderList()}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	projects: state.projects
});

export default connect(mapStateToProps)(ProjectList);