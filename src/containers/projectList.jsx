import React, { Component } from 'react';
import { connect } from 'react-redux';

import Hexagon from '../components/Hexagon';
import Modal from '../components/Modal';
import ProjectElement from '../components/ProjectElement';

class ProjectList extends Component {

	renderMiniProject() {
		return this.props.projects.map((project) => {
			if(project.miniProject === true){
				return (
					<ProjectElement key={project.title} data={project} />
				);
			}
		});
	}
	renderBigProject() {
		return this.props.projects.map((project) => {
			if(project.bigProject === true){
				return (
					<ProjectElement key={project.title} data={project} />
				);
			}
		});
	}
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
				<section>
					<div className='page-header'>
						<h1>Mini project</h1>
					</div>
					{this.renderMiniProject()}
				</section>
				<hr />
				<section>
					<div className='page-header'>
						<h1>Long term project</h1>
					</div>
					{this.renderBigProject()}
				</section>
				<hr />
				<section>
					<div className='page-header'>
						<h1>All projects</h1>
					</div>
					<ul id='hexGrid'>
						{this.renderList()}
					</ul>
					{this.renderModals()}
				</section>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	projects: state.projects
});

export default connect(mapStateToProps)(ProjectList);