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
	},
});
