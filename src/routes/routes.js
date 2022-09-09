import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Project from '../pages/Projects/Project';
import ContactUs from '../pages/ContactUs';
import SignIn from '../pages/SignIn';

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
	{
		to: '/admin',
		element: <SignIn />,
	},
];
