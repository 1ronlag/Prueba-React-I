import React from 'react';
import { Navbar, Container, Image, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//images//
import logo from '../Assets/logo.png';

const Header = () => {
  return (
    <header className='header'>
      <Navbar expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand><Image className='nav-log0' src={logo} /></Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-dark bg-dark'/>
          <Navbar.Collapse id='basic-navbar-nav '>
            <Nav className='ml-auto nav-links'>
                  <Nav.Link className='mx-3' href="https://www.netflix.com/title/70143836" target="_blank"> <p className='title'>Watch Episodes</p> </Nav.Link>
                  <Nav.Link className='mx-3' href="https://lahora.cl/espectaculos/2022/07/26/breaking-bad-deja-el-catalogo-de-netflix-cuales-son-las-series-que-seran-dadas-de-baja/" target="_blank"> <p className='title'>News</p> </Nav.Link>
                  <Nav.Link className='mx-3' href="https://www.netflix.com/title/81078819" target="_blank" >  <p className='title'>Watch Movie</p> </Nav.Link>
                  <Nav.Link className='mx-3' href="https://breakingbad.fandom.com/es/wiki/Breaking_Bad_Wiki" target="_blank">  <p className='title'>Fandom Wiki</p></Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header