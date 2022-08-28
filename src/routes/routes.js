import Home from '../website/pages/Home';
import Projects from '../website/pages/Projects';
import Project from '../website/pages/Projects/Project';
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
		to: '/contact-us',
		element: <ContactUs />,
	},
];
