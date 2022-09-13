import { useLocation, useNavigate } from 'react-router';
import { Button } from '@mui/material';
import arrow from '../assets/header/btn-arrow.svg';

const ProjectCard = (props) => {
	const { id, title, category, completionYear, description, thumbnail } = props;

	const navigate = useNavigate();
	const path = useLocation().pathname;

	const handleClick = () => {
		if (path.split('/').includes('admin')) {
			navigate(`/admin/add-project`, { state: props });
		} else {
			navigate(`/projects/${id}`, { state: props });
		}
	};

	return (
		<div className="project-card">
			<img src={thumbnail} alt="" className="image" />

			<div className="content">
				<p className="type">{category}</p>
				<p className="location">{title}</p>
				<p className="description">{description}</p>
				<p className="year">{completionYear}</p>
				<Button variant="contained" onClick={handleClick}>
					<p>View Project</p> <img src={arrow} alt="" />
				</Button>
			</div>
		</div>
	);
};

export default ProjectCard;
