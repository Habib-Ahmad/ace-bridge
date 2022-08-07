import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';

export const appRoutes = [
	{
		to: '/',
		element: <Home />,
	},
	{
		to: '/about',
		element: <AboutUs />,
	},
];
