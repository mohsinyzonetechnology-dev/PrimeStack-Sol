// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Box } from '@mui/material';
// import Navbar from '../components/Navbar';
// import Home from '../pages/Home';
// import AboutUs from '../pages/AboutUs';
// import Works from '../pages/Works';
// import Services from '../pages/Services'
// import ConnectSection from '../pages/Connect';
// import Templates from '../pages/Templates';
// import Footer from '../components/Footer';
// const AppRouter = () => {
//   return (
//     <BrowserRouter>
//       {/* Navbar ko Router ke andar hona chahiye taaki Link components kaam karein */}
//       <Navbar />
      
//       <Box component="main">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/works" element={<Works />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/connectSection" element={<ConnectSection />} />
          
//           <Route path="/templates" element={<Templates />} />

//         </Routes>
//       </Box>
//       <Footer/>
//     </BrowserRouter>
//   );
// };

// export default AppRouter;

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from '../theme/theme'; // Make sure you create the theme.ts file below
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Works from '../pages/Works';
import Services from '../pages/Services';
import ConnectSection from '../pages/Connect';
import Templates from '../pages/Templates';
import Footer from '../components/Footer';

// Helper to scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRouter = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline makes the background dark and resets browser styles */}
      <CssBaseline /> 
      
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        
        <Box 
          component="main" 
          sx={{ 
            minHeight: '80vh', // Ensures footer stays at bottom on short pages
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/works" element={<Works />} />
            <Route path="/services" element={<Services />} />
            <Route path="/connect" element={<ConnectSection />} />
            <Route path="/templates" element={<Templates />} />
             
          </Routes>
        </Box>
        
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default AppRouter;