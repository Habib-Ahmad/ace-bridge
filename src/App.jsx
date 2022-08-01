import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<div className="app">Hello world</div>
		</ThemeProvider>
	);
};

export default App;
