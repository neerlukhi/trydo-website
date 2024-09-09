// -------- Headers ------- //
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { NavLink } from 'react-router-dom';

 function Header() {
  return (
    <>
    <Navbar expand='lg' className="bg-body-tertiary mb-1 align-items-center">
        <Container>
          <Nav.Link href='h'><Nav.Link href="https://preview.themeforest.net/item/trydo-creative-agency-react-template/full_screen_preview/25457315?_ga=2.117099968.774134584.1712550069-1005765342.1712550069"><img className='logo' alt="h" src={require('./assets/logo.jpg')} /></Nav.Link></Nav.Link>
          <ul className='main-menu d-lg-flex list-unstyled mt-3 align-items-center ms-auto d-none fw-medium'>
            <li className='mx-3'><NavLink to="/">Home</NavLink></li>
            <li className='mx-3'><NavLink to="/service">Service</NavLink></li>
            <li className='mx-3'><NavLink to="/about">About</NavLink></li>
            <li className='mx-3'><NavLink to="/pages">Pages</NavLink></li>
            <li className='mx-3'><NavLink to="/blogs">Blogs</NavLink></li>
            <li className='mx-3'><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <Navbar.Toggle aria-controls={`offcanvasNavbar - expand - lg`} className='d-lg-none d-block' />

          <Navbar.Offcanvas
            id={`offcanvasNavbar - expand - lg`}
            aria-labelledby={`offcanvasNavbarLabel - expand - lg`}
            placement="end" className="d-lg-none"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel - expand -lg`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
          
      
   </>
  )
}

export default Header;