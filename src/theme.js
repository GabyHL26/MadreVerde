// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9B111E', // Rojo sangre de toro
    },
    secondary: {
      main: '#D4AF37', // Dorado
    },
    background: {
      default: '#000000', // Fondo negro
      paper: '#808080', // Fondo de las tarjetas (gris)
    },
    text: {
      primary: '#FFFFFF', // Texto blanco
      secondary: '#B0B0B0', // Texto gris
    },
    success: {
      main: '#4CAF50', // Verde tipo marihuana
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,
    },
  },
  components: {
    // Estilo para el header
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#262422', // Color del fondo del header
        },
      },
    },
    // Estilo para el footer
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#71733C', // Color del fondo del footer
          color: '#FFFFFF', // Asegura que el texto sea blanco en el footer
        },
      },
    },
  },
});

export default theme;

