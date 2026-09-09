import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Works from './components/Works';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import styled from '@emotion/styled';
import { ThemeProvider } from './styles/ThemeProvider';

const AppContainer = styled.div`
  font-family: ${props => props.theme.fonts.body};
  background-color: ${props => props.theme.colors.background.darker};
  color: ${props => props.theme.colors.text.primary};
`;

function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        <a className="skip-link" href="#main">
          Aller au contenu
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <Works />
          <ContactForm />
        </main>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
