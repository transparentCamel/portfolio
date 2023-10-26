import HeroSection from './core/features/heroSection/HeroSection';
import NavHeader from './core/features/navHeader/NavHeader';
import { GlobalStyles } from './globalStyles/GlobalStylees';

function App() {
  return (
    <>
      <GlobalStyles />
      <NavHeader />
      <HeroSection />
    </>
  );
}

export default App;
