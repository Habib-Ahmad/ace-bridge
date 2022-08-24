import { useEffect, useState } from 'react';
import { Button, IconButton, SwipeableDrawer } from '@mui/material';
import { useNavigate } from 'react-router';
import logoWhite from '../assets/logo-white.svg';
import logo from '../assets/logo.svg';
import menuWhite from '../assets/header/menu-white.svg';
import menu from '../assets/header/menu.svg';

const Navbar = ({ transparent }) => {
	const [displayDrawer, setDisplayDrawer] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const navigate = useNavigate();

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

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

	if (scrollPosition > window.innerHeight - 200) transparent = false;

	return (
		<div className={`navbar ${transparent ? 'transparent' : ''}`}>
			<div
				className={`logo-wrapper ${transparent ? '' : 'adjusted-width'}`}
				onClick={() => navigate('/')}
			>
				<img src={transparent ? logoWhite : logo} alt="Ace bridge" />
			</div>
			<nav className={`${transparent ? '' : 'dark-links'}`}>
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
					<img src={transparent ? menuWhite : menu} alt="menu" />
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
		name: 'Projects',
		to: '/projects',
	},
	{
		name: 'Contact',
		to: '/contact-us',
	},
];
