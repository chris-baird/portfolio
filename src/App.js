import React, { useState } from 'react';
import Home from './pages/home';
import Experience from './pages/experience';
import About from './pages/about';
import Contact from './pages/contact';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function App() {

  // State for mobile nav menu
  const [isOpen, setIsOpen] = useState(false);

  // State for current page being displayed
  const [currentPage, setCurrentPage] = useState('home')

  // Function to change nav state
  const toggle = () => setIsOpen(!isOpen);

  // Takes in the currentPage from state and returns its Component.
  const displayPage = (currentPage) => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'experience':
        return <Experience />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <h1>Something Broke :-(</h1>
    }
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="#" onClick={() => setCurrentPage('home')}>Chris Baird</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#" onClick={() => setCurrentPage('home')}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={() => setCurrentPage('experience')}>Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={() => setCurrentPage('about')}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={() => setCurrentPage('contact')}>Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {
        displayPage(currentPage)
      }
      <div class="fixed-bottom">Footer</div>
    </div >
  );
}


