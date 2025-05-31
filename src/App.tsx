import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
//import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Loading from './components/Loading';
import styled from '@emotion/styled';
import { ThemeProvider } from './styles/ThemeProvider';

const AppContainer = styled.div`
  font-family: 'Inter', sans-serif;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un temps de chargement
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AppContainer>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <About />
            <Works />
            <Blog />
            <ContactForm />
            <Footer />
          </>
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
