import Home from '../pages/Home';
import Properties from '../pages/Properties';
import BuildingMaterials from '../pages/BuildingMaterials';
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
		to: '/building-materials',
		element: <BuildingMaterials />,
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
