import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

const Projects = () => {
	return (
		<div id="projects" className="projects-component">
			<SectionHeading tag="Projects" heading="Our Latest Projects" />

			<div className="project-wrapper">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</div>
	);
};

export default Projects;
