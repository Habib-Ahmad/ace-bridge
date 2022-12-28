import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Project from '../pages/Projects/Project';
import ContactUs from '../pages/ContactUs';
import Admin from '../pages/Admin';
import AdminProjects from '../pages/Admin/Projects';
import AddProject from '../pages/Admin/AddProject';
import NotFound from '../pages/NotFound';
import Services from '../pages/Services';

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
		to: '/services',
		element: <Services />,
	},
	{
		to: '/contact-us',
		element: <ContactUs />,
	},
	{
		to: '/admin',
		element: <Admin />,
	},
	{
		to: '/admin/projects',
		element: <AdminProjects />,
	},
	{
		to: '/admin/add-project',
		element: <AddProject />,
	},
	{
		to: '*',
		element: <NotFound />,
	},
];
