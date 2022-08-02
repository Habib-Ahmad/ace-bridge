import { Button } from '@mui/material';
import logo from '../../assets/logo.svg';

const Navbar = () => {
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
