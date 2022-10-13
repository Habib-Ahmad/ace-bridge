import { CircularProgress } from '@mui/material';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

const Projects = ({ projects }) => {
	return (
		<div id="projects" className="projects-component">
			<SectionHeading tag="Projects" heading="Our Latest Projects" />

			{!projects || !projects.length ? (
				<div className="loader">
					<CircularProgress />
				</div>
			) : (
				<div className="project-wrapper">
					{projects.map((project) => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>
			)}
		</div>
	);
};

export default Projects;
