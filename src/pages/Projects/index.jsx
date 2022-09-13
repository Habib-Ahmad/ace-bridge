import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import ProjectCard from '../../components/ProjectCard';
import { CircularProgress } from '@mui/material';

const Projects = () => {
	const [projectList, setprojectList] = useState([]);

	const getProjects = () => {
		const ref = collection(db, 'projects');
		onSnapshot(ref, (snap) => {
			const data = snap.docs.map((snapDoc) => ({
				...snapDoc.data(),
				id: snapDoc.id,
			}));
			setprojectList(data);
		});
	};

	useEffect(() => {
		getProjects();
	}, []);

	if (!projectList.length) {
		return (
			<div className="projects loader">
				<CircularProgress size={60} />
			</div>
		);
	}

	return (
		<div className="projects">
			<h1>Projects</h1>

			<div className="list">
				{projectList.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
