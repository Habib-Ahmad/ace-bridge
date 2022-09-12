import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Project from '../pages/Projects/Project';
import ContactUs from '../pages/ContactUs';
import Admin from '../pages/Admin';
import AdminProjects from '../pages/Admin/Projects';
import AddProject from '../pages/Admin/AddProject';

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
		element: <Admin />,
	},
	{
		to: '/admin/projects',
		element: <AdminProjects />,
	},
	{
		to: '/admin/projects/:id',
		element: <div>Hello world</div>,
	},
	{
		to: '/admin/add-project',
		element: <AddProject />,
	},
];
