import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import { HashRouter } from 'react-router-dom';
import './styles/main.scss';
import ScrollToTop from './components/ScrollToTop';
import App from './App';
import ContextProvider from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider theme={theme}>
		<HashRouter>
			<ContextProvider>
				<ScrollToTop>
					<App />
				</ScrollToTop>
			</ContextProvider>
		</HashRouter>
	</ThemeProvider>
);
