import { useNavigate } from 'react-router';
import back from '../assets/back-btn-white.svg';

const ProjectHeader = ({ project }) => {
	const navigate = useNavigate();

	return (
		<header style={{ backgroundImage: `url(${project.coverImage})` }}>
			<div className="back" onClick={() => navigate(-1)}>
				<img src={back} alt="back" />
			</div>
			<div className="heading">
				<p className="type">{project.category}</p>
				<h1>{project.title}</h1>
				<p className="description">{project.description}</p>
			</div>
		</header>
	);
};

export default ProjectHeader;
