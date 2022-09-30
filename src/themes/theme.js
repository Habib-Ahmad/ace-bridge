import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	typography: {
		fontFamily: 'inherit',
	},

	palette: {
		primary: {
			main: '#0650A0',
		},
	},

	components: {
		MuiButton: {
			defaultProps: {
				disableRipple: true,
			},
			styleOverrides: {
				root: {
					textTransform: 'inherit',
					fontWeight: 700,
				},

				text: {
					fontWeight: 500,
					color: 'white',

					'&:hover': {
						backgroundColor: 'transparent',
					},
				},

				textSizeLarge: {
					fontSize: '1.1rem',
					fontWeight: '600',
					width: '120px',
				},

				contained: {
					fontWeight: 500,
					letterSpacing: '0.8px',
				},
			},
		},

		MuiOutlinedInput: {
			defaultProps: {},

			styleOverrides: {
				root: {},
			},
		},

		MuiInputLabel: {
			styleOverrides: {
				root: {
					fontWeight: 500,
				},
			},
		},
	},
});
