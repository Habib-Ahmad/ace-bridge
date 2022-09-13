import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import arrow from '../assets/header/btn-arrow.svg';
import previous from '../assets/header/prev-arrow.svg';
import next from '../assets/header/next-arrow.svg';
import hero1 from '../assets/hero.png';
import hero2 from '../assets/hero2.png';

const Header = () => {
	const [index, setIndex] = useState(0);
	const navigate = useNavigate();
	const project = projects[index];

	const handlePrev = () =>
		setIndex((prev) => {
			const number = prev - 1;
			if (number < 0) return MAX_INDEX;
			return number;
		});

	const handleNext = () =>
		setIndex((prev) => {
			const number = prev + 1;
			if (number > MAX_INDEX) return 0;
			return number;
		});

	return (
		<header
			style={{
				backgroundImage: `url(${project.img})`,
			}}
		>
			<div className="heading-wrapper">
				<div>
					<h1>AceBridge Redsidence - {project.title}</h1>
					<p className="location">{project.location}</p>
					<Button
						variant="contained"
						onClick={() => navigate(`/${project.to}`)}
					>
						<p>View project</p> <img src={arrow} alt="" />
					</Button>
				</div>

				<div data-aos="fade-up" className="arrow-wrapper">
					<div onClick={handlePrev}>
						<img src={previous} alt="previous" />
					</div>

					<div onClick={handleNext}>
						<img src={next} alt="next" />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

const projects = [
	{
		id: 1,
		img: hero1,
		title: 'Khairiyya',
		location: 'Jahi',
		to: '',
	},
	{
		id: 2,
		img: hero2,
		title: 'Bolori',
		location: 'Asokoro',
		to: '',
	},
];

const MAX_INDEX = projects.length - 1;
