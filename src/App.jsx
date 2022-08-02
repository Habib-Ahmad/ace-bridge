import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import { theme } from './themes/theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Header />
		</ThemeProvider>
	);
};

export default App;
