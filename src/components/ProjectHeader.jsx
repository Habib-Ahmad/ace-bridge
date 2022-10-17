import { useNavigate } from 'react-router';
import BackgroundSlider from 'react-background-slider';
import back from '../assets/back-btn-white.svg';

const Slider = BackgroundSlider['react-background-slider'].default;

const ProjectHeader = ({ project }) => {
	const navigate = useNavigate();

	return (
		<header>
			{project.sliderImages ? (
				<Slider images={project.sliderImages} duration={5} transition={0.5} />
			) : (
				<></>
			)}
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
