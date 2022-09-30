import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, IconButton, SwipeableDrawer } from '@mui/material';
import logoWhite from '../assets/logo-white.svg';
import logo from '../assets/logo.svg';
import menuWhite from '../assets/header/menu-white.svg';
import menu from '../assets/header/menu.svg';

const Navbar = ({ transparent }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [displayDrawer, setDisplayDrawer] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem('ace-bridge-accessToken');
		navigate('/');
	};

	useEffect(() => {
		const token = localStorage.getItem('ace-bridge-accessToken');
		if (token) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	}, [navigate]);

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
						size="large"
						key={link.name}
						onClick={() => navigate(link.to)}
					>
						{link.name}
					</Button>
				))}
				{loggedIn && (
					<Button variant="text" size="large" onClick={() => logout()}>
						Logout
					</Button>
				)}
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
						{loggedIn && (
							<Button variant="text" onClick={() => logout()}>
								Logout
							</Button>
						)}
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
	{
		name: 'Admin',
		to: '/admin',
	},
];
