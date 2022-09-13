import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router';
import { appRoutes } from './routes/routes';
import Layout from './components/Layout';
import './aos';

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
	const path = useLocation().pathname;

	if (path === '/' || path.split('/').pop() === 'admin') {
		return renderRoutes();
	}

	return <Layout>{renderRoutes()}</Layout>;
};

export default App;
