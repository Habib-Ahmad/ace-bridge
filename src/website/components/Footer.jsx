import { useNavigate } from 'react-router';
import { Button, IconButton } from '@mui/material';
import logo from '../assets/logo-white.svg';
import linkedin from '../assets/footer/linkedin.svg';
import messenger from '../assets/footer/messenger.svg';
import twitter from '../assets/footer/twitter.svg';
import twoo from '../assets/footer/twoo.svg';

const Footer = () => {
	const navigate = useNavigate();

	return (
		<footer className="footer">
			<div className="footer-content">
				<img src={logo} alt="Ace bridge" onClick={() => navigate('/')} />

				<div>
					<h4>Overview</h4>
					<div className="links-wrapper">
						{links.map((link) => (
							<Button
								key={link.name}
								variant="text"
								onClick={() => navigate(link.to)}
							>
								{link.name}
							</Button>
						))}
					</div>
				</div>

				<div>
					<h4>Social Media</h4>
					<div className="social-links-wrapper">
						{socialMediaLinks.map((link) => (
							<IconButton key={link.name} onClick={() => navigate(link.to)}>
								<img src={link.icon} alt={link.name} />
							</IconButton>
						))}
					</div>
				</div>
			</div>

			<div className="copyright">
				Copyright @ AceBridge 2022. All Rights Reserved.
			</div>
		</footer>
	);
};

export default Footer;

const links = [
	{
		name: 'Projects',
		to: '/projects',
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

const socialMediaLinks = [
	{
		name: 'linkedin',
		icon: linkedin,
		to: '',
	},
	{
		name: 'messenger',
		icon: messenger,
		to: '',
	},
	{
		name: 'twitter',
		icon: twitter,
		to: '',
	},
	{
		name: 'twoo',
		icon: twoo,
		to: '',
	},
];
