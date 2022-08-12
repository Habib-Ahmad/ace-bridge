import { useState } from 'react';
import { Button, IconButton, SwipeableDrawer } from '@mui/material';
import { useNavigate } from 'react-router';
import logoWhite from '../assets/logo-white.svg';
import logo from '../assets/logo.svg';
import menuWhite from '../assets/header/menu-white.svg';
import menu from '../assets/header/menu.svg';

const Navbar = ({ darkMode }) => {
	const [displayDrawer, setDisplayDrawer] = useState(false);
	const navigate = useNavigate();

	const toggleDrawer = (open) => (event) => {
		if (
			event &&
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setDisplayDrawer(open);
	};
	return (
		<div className={`navbar ${darkMode ? '' : 'shadow'}`}>
			<div
				className={`logo-wrapper ${darkMode ? '' : 'adjusted-width'}`}
				onClick={() => navigate('/')}
			>
				<img src={darkMode ? logoWhite : logo} alt="Ace bridge" />
			</div>
			<nav className={`${darkMode ? '' : 'dark-links'}`}>
				{links.map((link) => (
					<Button
						variant="text"
						key={link.name}
						onClick={() => navigate(link.to)}
					>
						{link.name}
					</Button>
				))}
			</nav>

			<div className="drawer-wrapper">
				<IconButton onClick={toggleDrawer(true)}>
					<img src={darkMode ? menuWhite : menu} alt="menu" />
				</IconButton>
				<SwipeableDrawer
					anchor="right"
					open={displayDrawer}
					onClose={toggleDrawer(false)}
					onOpen={toggleDrawer(true)}
				>
					<nav
						className="mobile-nav"
						onClick={toggleDrawer(false)}
						onKeyDown={toggleDrawer(false)}
					>
						{links.map((link) => (
							<Button
								variant="text"
								key={link.name}
								onClick={() => navigate(link.to)}
								disableRipple={false}
							>
								{link.name}
							</Button>
						))}
					</nav>
				</SwipeableDrawer>
			</div>
		</div>
	);
};

export default Navbar;

const links = [
	{
		name: 'Home',
		to: '/',
	},
	{
		name: 'Properties',
		to: '/properties',
	},
	{
		name: 'About us',
		to: '/about',
	},
	{
		name: 'Contact',
		to: '/contact-us',
	},
];