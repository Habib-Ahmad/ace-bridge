import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router';
import { appRoutes } from './routes/routes';
import Layout from './website/components/Layout';

const renderRoutes = () => {
	return (
		<Routes>
			{appRoutes.map((route, index) => (
				<Route key={index} path={route.to} element={route.element} />
			))}
		</Routes>
	);
};

const App = () => {
	const location = useLocation();

	if (location.pathname === '/' || location.pathname.split('/').length > 2) {
		return renderRoutes();
	}

	return <Layout>{renderRoutes()}</Layout>;
};

export default App;
