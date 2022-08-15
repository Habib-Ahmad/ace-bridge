import { Button } from '@mui/material';
import Navbar from './Navbar';
import underline from '../assets/header/underline.svg';

const Header = () => {
	return (
		<div className="header">
			<Navbar darkMode />

			<div className="heading-wrapper">
				<h1>
					Creating urban lifestyle <br /> build to last...
				</h1>
				<img src={underline} alt="" />
				<p>The best place to purchase properties and buidling materials</p>
				<Button variant="outlined" href="#projects">
					Get Started
				</Button>
			</div>
		</div>
	);
};

export default Header;
