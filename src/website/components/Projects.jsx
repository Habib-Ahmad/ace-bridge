import ProjectCard from './ProjectCard';

const Projects = () => {
	return (
		<div id="projects" className="projects-component">
			<div className="title">
				<h6>Projects</h6>
				<h2>Our Latest Projects</h2>
			</div>

			<div className="project-wrapper">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
};

export default Projects;
