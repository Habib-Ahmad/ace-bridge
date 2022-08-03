import { useState } from 'react';
import { Button, IconButton, SwipeableDrawer } from '@mui/material';
import logo from '../../assets/logo.svg';
import menu from '../../assets/header/menu.svg';

const Navbar = () => {
	const [displayDrawer, setDisplayDrawer] = useState(false);

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
		<div className="navbar">
			<div className="logo-wrapper">
				<img src={logo} alt="Ace bridge" />
			</div>
			<nav>
				{links.map((link) => (
					<Button variant="text" key={link.name} href={link.to}>
						{link.name}
					</Button>
				))}
			</nav>

			<div className="drawer-wrapper">
				<IconButton onClick={toggleDrawer(true)}>
					<img src={menu} alt="menu" />
				</IconButton>
				<SwipeableDrawer
					anchor="right"
					open={displayDrawer}
					onClose={toggleDrawer(false)}
					onOpen={toggleDrawer(true)}
				>
					<nav className="mobile-nav">
						{links.map((link) => (
							<Button
								variant="text"
								key={link.name}
								href={link.to}
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
		to: '',
	},
	{
		name: 'Building materials',
		to: '',
	},
	{
		name: 'About us',
		to: '',
	},
	{
		name: 'Contact',
		to: '',
	},
	{
		name: 'Account',
		to: '',
	},
];
