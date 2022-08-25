import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import image from '../assets/hero2.png';
import arrow from '../assets/header/btn-arrow.svg';

const ProjectCard = () => {
	const navigate = useNavigate();

	return (
		<div className="project-card">
			<img src={image} alt="" className="image" />

			<div className="content">
				<p className="type">Premium duplexes</p>
				<p className="location">BraveRock Residence - The Valley 2 Jahi</p>
				<p className="description">
					Spacious 4 unit luxury finished seven-bedroom terrace duplexes
				</p>
				<p className="year">2021</p>
				<Button variant="contained" onClick={() => navigate(``)}>
					<p>View Project</p> <img src={arrow} alt="" />
				</Button>
			</div>
		</div>
	);
};

export default ProjectCard;
