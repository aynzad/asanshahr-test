import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
// Create a theme instance.
const theme = createMuiTheme({
  direction: 'rtl',
  palette: {
    primary: {
      light: "#ff5a66",
      main: '#d62431',
      dark: "#bf0f1c",
      contrastText: "white" //button text white instead of black
    },
    secondary: {
      light: "#d6bb87",
      main: '#CCAA6A',
      dark: "#8e764a",
      contrastText: "white" //button text white instead of black
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ECEDE9',
    },
  },
  typography: {
    fontFamily: [
      'xDana',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  },
  overrides: {
    MuiButton: {
      root: {
        color: 'white',
        borderRadius: '100px',
        contrastText: "white" //button text white instead of black
      }
    }
  }
}); 

export default theme;
