import Home from '../website/pages/Home';
import Properties from '../website/pages/Properties';
import Property from '../website/pages/Properties/Property';
import AboutUs from '../website/pages/AboutUs';
import ContactUs from '../website/pages/ContactUs';

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
