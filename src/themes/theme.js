import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	components: {
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
