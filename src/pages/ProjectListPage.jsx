import React, { Component } from 'react';

import ProjectList from '../containers/projectList';

class ProjectListPage extends Component {
	render() {
		return(
			<ul id="hexGrid">
				<ProjectList />
			</ul>
		);
	}
}

export default ProjectListPage;