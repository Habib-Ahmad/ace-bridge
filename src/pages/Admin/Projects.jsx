import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, CircularProgress } from '@mui/material';
import { db } from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import ProjectCard from '../../components/ProjectCard';
import back from '../../assets/back-btn.svg';

const Projects = () => {
	const [projectList, setprojectList] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('ace-bridge-accessToken');
		if (!token) {
			navigate('/admin');
		}
	}, [navigate]);

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
		<div className="projects admin">
			<div className="heading">
				<div className="btn-wrapper">
					<div onClick={() => navigate(-1)}>
						<img src={back} alt="" />
					</div>
					<h1>Projects</h1>
				</div>
				<Button
					onClick={() => navigate('/admin/add-project')}
					variant="contained"
					size="small"
				>
					Add Project
				</Button>
			</div>

			<div className="list">
				{projectList.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
