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
      paper: '#262422', // Fondo de papel oscuro
    },
    text: {
      primary: '#FFFFFF', // Texto blanco
      secondary: '#F2EFDC', // Beige claro
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      color: '#D4AF37', // Dorado para títulos principales
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      color: '#D4AF37', // Dorado para subtítulos
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
      color: '#9B111E', // Rojo sangre de toro para subtítulos importantes
    },
    body1: {
      fontSize: '1rem',
      color: '#F2EFDC', // Beige claro para el cuerpo del texto
    },
    body2: {
      fontSize: '0.875rem',
      color: '#B0B0B0', // Gris para texto secundario
    },
    button: {
      textTransform: 'none',
      fontSize: '1rem',
      color: '#FFFFFF', // Texto blanco en los botones
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#9B111E', // Rojo sangre de toro para botones
          '&:hover': {
            backgroundColor: '#D4AF37', // Dorado al pasar el ratón
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#808080', // Gris para las tarjetas
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.4)', // Efecto hover en las tarjetas
          },
        },
      },
    },
  },
});

export default theme;
