import Home from '../pages/Home';
import Properties from '../pages/Properties';
import Property from '../pages/Properties/Property';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';

export const appRoutes = [
	{
		to: '/',
		element: <Home />,
	},
	{
		to: '/properties',
		element: <Properties />,
	},
	{
		to: '/properties/:id',
		element: <Property />,
	},
	{
		to: '/about',
		element: <AboutUs />,
	},
	{
		to: '/contact-us',
		element: <ContactUs />,
	},
];