 
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark', // Since your logo looks best on dark
    primary: {
      main: '#3BC1A8', // That bright Teal from your logo
      contrastText: '#fff',
    },
    secondary: {
      main: '#00B8D4', // A slightly deeper Cyan
    },
    background: {
      default: '#0A0A0A', // Deep Charcoal/Black background
      paper: '#141414',   // Slightly lighter for cards/sections
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none', // More modern look
          fontWeight: 600,
        },
      },
    },
  },
});