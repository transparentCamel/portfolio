import HeroSection from './core/features/heroSection/HeroSection';
import NavHeader from './core/features/navHeader/NavHeader';
import AboutSection from './core/features/about/AboutSection';
import { GlobalStyles } from './globalStyles/GlobalStylees';
import ProjectsSection from './core/features/projects/ProjectsSection';
import Contact from './core/features/contact/Contact';

function App() {
  return (
    <>
      <GlobalStyles />
      <NavHeader />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Contact />
    </>
  );
}

export default App;
