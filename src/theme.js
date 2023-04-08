import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';




const theme = createTheme({
  palette: {
    background: {
      default: "#D8DEE7",
    },
    primary: {
      main: '#3C37FF',
      default : '#fff',
    },
    secondary: {
      main: '#2520E3',
    },
  },
});

export default theme;
