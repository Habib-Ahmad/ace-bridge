import { useNavigate } from 'react-router';
import { Button, IconButton } from '@mui/material';
import logo from '../assets/logo-white.svg';
import facebook from '../assets/footer/facebook.svg';
import twitter from '../assets/footer/twitter.svg';
import instagram from '../assets/footer/instagram.svg';

const Footer = () => {
	const navigate = useNavigate();

	return (
		<footer className="footer">
			<div className="footer-content">
				<img
					src={logo}
					alt="Ace bridge"
					onClick={() => navigate('/')}
					data-aos="fade-up"
				/>

				<div data-aos="fade-up">
					<h4>Overview</h4>
					<div className="links-wrapper">
						{links.map((link) => (
							<Button
								key={link.name}
								variant="text"
								href={link.to.includes('#') ? link.to : null}
								onClick={() => !link.to.includes('#') && navigate(link.to)}
							>
								{link.name}
							</Button>
						))}
					</div>
				</div>

				<div data-aos="fade-up">
					<h4>Social Media</h4>
					<div className="social-links-wrapper">
						{socialMediaLinks.map((link) => (
							<IconButton key={link.name} href={link.to} target="_blank">
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
		to: '#about',
	},
	{
		name: 'Contact',
		to: '/contact-us',
	},
];

const socialMediaLinks = [
	{
		name: 'facebook',
		icon: facebook,
		to: 'https://www.facebook.com/profile.php?id=100086924907409',
	},
	{
		name: 'twitter',
		icon: twitter,
		to: 'https://twitter.com/acebridge_ltd',
	},
	{
		name: 'instagram',
		icon: instagram,
		to: 'https://instagram.com/acebridgeltd',
	},
];
