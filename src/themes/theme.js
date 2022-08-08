import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	typography: {
		fontFamily: 'inherit',
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
