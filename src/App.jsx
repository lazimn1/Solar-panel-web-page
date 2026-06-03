import Navbar from './components/Navbar';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import Stats from './components/Stats';
import Services from './components/Services';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Stats />
      <Services />
      <Products />
      <WhyUs />
      <Testimonials />
      {/*<CTA/>*/}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
