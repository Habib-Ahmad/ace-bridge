import { useState } from 'react';
import { Button } from '@mui/material';
import arrow from '../assets/header/btn-arrow.svg';
import previous from '../assets/header/prev-arrow.svg';
import next from '../assets/header/next-arrow.svg';
import { useNavigate } from 'react-router';

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

				<div className="arrow-wrapper">
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
		img: '/static/media/hero.d2312031dceb34cf73b8.png',
		title: 'Khairiyya',
		location: 'Jahi',
		to: '',
	},
	{
		id: 2,
		img: 'static/media/hero2.92bf86731dd82e576f74.png',
		title: 'Bolori',
		location: 'Asokoro',
		to: '',
	},
];

const MAX_INDEX = projects.length - 1;
