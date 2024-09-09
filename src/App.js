// import './App.css';
import Header from './Header'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/service" element={ <Service/> } />
        <Route path="/about" element={ <About/> } />
        {/* <Route path="pages" element={ <Pages/> } /> */}
        <Route path="/blogs" element={ <Blogs/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
