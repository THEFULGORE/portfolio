import React from 'react';
import Card from './Card';
import './Projects.scss';
import { projects } from '../utils/projects';

const Projects = () => {
	return (
		<section className="projects" style={{ position: 'relative' }}>
			<div className="projects__title">
				<h1>Projects</h1>
			</div>
			<div id="projects" className="projects__container" style={{ overflow: 'hidden' }}>
				{projects.map((el) => (
					<Card {...el} />
				))}
			</div>
		</section>
	);
};

export default Projects;
