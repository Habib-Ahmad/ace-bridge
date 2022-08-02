import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	components: {
		MuiButtonBase: {},
		MuiButton: {
			defaultProps: {
				disableRipple: true,
			},
			styleOverrides: {
				root: {
					fontFamily: 'inherit',
				},

				text: {
					textTransform: 'inherit',
					color: 'white',

					'&:hover': {
						backgroundColor: 'transparent',
					},
				},
			},
		},
	},
});
