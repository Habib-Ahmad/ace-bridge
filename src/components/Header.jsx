import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import BackgroundSlider from 'react-background-slider';
import underline from '../assets/header/underline.svg';

const Slider = BackgroundSlider['react-background-slider'].default;

const Header = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setIndex((prev) => {
				const number = prev + 1;
				if (number > 3) return 0;
				return number;
			});
		}, 5000);
	}, [index]);

	return (
		<header>
			<Slider images={images} duration={5} transition={0.5} />
			<div className="heading-wrapper">
				<h1>Creating urban lifestyle build to last</h1>
				<img src={underline} alt="" />
				<p>The best place to purchase properties and buidling materials</p>
				<Button variant="contained" href="#projects">
					Get Started
				</Button>
			</div>
		</header>
	);
};

export default Header;

const images = [
	'https://res.cloudinary.com/drmksud79/image/upload/v1664532842/acebridge/3_chtw1s.jpg',
	'https://res.cloudinary.com/drmksud79/image/upload/v1664532841/acebridge/6_ublkic.jpg',
	'https://res.cloudinary.com/drmksud79/image/upload/v1664532841/acebridge/4_zofmhs.jpg',
];
