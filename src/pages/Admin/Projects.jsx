import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import ProjectCard from '../../components/ProjectCard';

const Projects = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('ace-bridge-accessToken');
		if (!token) {
			navigate('/admin');
		}
	}, [navigate]);

	return (
		<div className="projects admin">
			<h1>Projects</h1>

			<div className="list">
				<ProjectCard id={1} />
				<ProjectCard id={1} />
				<ProjectCard id={1} />
				<ProjectCard id={1} />
				<ProjectCard id={1} />
				<ProjectCard id={1} />
				<ProjectCard id={1} />
				<ProjectCard id={1} />
				<ProjectCard id={1} />
				<ProjectCard id={1} />
			</div>
		</div>
	);
};

export default Projects;
