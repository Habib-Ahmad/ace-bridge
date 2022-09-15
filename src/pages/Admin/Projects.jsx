import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, CircularProgress } from '@mui/material';
import { db } from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import ProjectCard from '../../components/ProjectCard';

const Projects = () => {
	const [projectList, setprojectList] = useState([]);

	const navigate = useNavigate();

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

	return (
		<div className="projects admin">
			<div className="heading">
				<h1>Projects</h1>
				<Button
					onClick={() => navigate('/admin/add-project')}
					variant="contained"
					size="small"
				>
					Add Project
				</Button>
			</div>

			{!projectList.length ? (
				<div className="projects loader">
					<CircularProgress size={60} />
				</div>
			) : (
				<div className="list">
					{projectList.map((project) => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>
			)}
		</div>
	);
};

export default Projects;
