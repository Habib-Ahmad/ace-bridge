import Home from '../website/pages/Home';
import Projects from '../website/pages/Projects';
import Project from '../website/pages/Projects/Project';
import AboutUs from '../website/pages/AboutUs';
import ContactUs from '../website/pages/ContactUs';

export const appRoutes = [
	{
		to: '/',
		element: <Home />,
	},
	{
		to: '/projects',
		element: <Projects />,
	},
	{
		to: '/projects/:id',
		element: <Project />,
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
