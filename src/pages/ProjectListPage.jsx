import React, { Component } from 'react';

import ProjectList from '../containers/projectList';

class ProjectListPage extends Component {
	render() {
		return(
			<div>
				<div className='page-header'>
					<h1>Project list</h1>
				</div>
				<ProjectList />
			</div>

		);
	}
}

export default ProjectListPage;