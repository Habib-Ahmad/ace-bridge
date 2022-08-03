import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { appRoutes } from './routes/routes';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					{appRoutes.map((route, index) => (
						<Route key={index} path={route.to} element={route.element} />
					))}
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
