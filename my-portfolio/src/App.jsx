import './App.css';
import Sidebar from './Component/SideBar/sidebar';
import Home from './Component/Home/home';
import About from './Component/About/about';
import Services from './Component/Services/services';
import Resume from './Component/Resume/resume';
import Portfolio from './Component/Portfolio/portfolio';
import Testimonials from './Component/Testimonials/testimonials';
import Contact from './Component/Contact/contact';
import Blog from './Component/Blog/blog';
import Pricing from './Component/Pricing/pricing';
import BackToTop from './Component/Backtotop/backtotop';

const App = () => {
  return (
    <>
      <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
        <Pricing/>
        <Testimonials/>
        <Blog/>
        <Contact/>
        <BackToTop/>
      </main>
    </>
  );
}

export default App;
