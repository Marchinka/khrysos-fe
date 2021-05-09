import { createMuiTheme } from '@material-ui/core';
import { green, purple } from '@material-ui/core/colors';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Palette } from '@material-ui/core/styles/createPalette';


export const theme = createMuiTheme({
	palette: {
		// custom: {
		// 	dropdown: '#efeded',
		// 	icons: '#898989',
		// 	oddRow: '#f9fafc'
		// },
		primary: {
			main: purple[500],
		},
		secondary: {
			main: green[500],
		},
		// background: {
		// 	default: '#fff',
		// 	paper: '#d0d0d0'
		// },
		// text: {
		// 	primary: '#101010',
		// 	secondary: '#909090',
		// 	disabled: '#5e5c5b'
		// },
		// buttons
		// action: {
		// 	active: '#2e528f',
		// 	// hover: "#",
		// 	// selected: "#",
		// 	// disabled: "#888888",
		// 	disabledBackground: '#aaa'
		// },
		// status: {
		// 	go: '#41b378',
		// 	warning: '#f2d031',
		// 	stop: '#d64b4b'
		// }
	}
	// overrides: {

	// }
} as any);
