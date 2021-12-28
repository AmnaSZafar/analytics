import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';


function Header(){
    return(
        <div>
            <section id="topbar" className="d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                    <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
                    </div>
                </div>
            </section>
            <Navbar className='Navbar' expand="lg">
                <Container>
                    <Navbar.Brand href="/"><h1 style={{ color:'rgb(116,96,133)', fontWeight:900 }} className='mr-5'>Analytics</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-5">
                        <Nav.Link href="/services"><h6 className='ml-5' style={{ color:'rgb(116,96,133)', fontWeight:'900' }}>Services</h6></Nav.Link>
                        <Nav.Link href="/plans"><h6 className='ml-5' style={{ color:'rgb(116,96,133)', fontWeight:'900' }}>Plans</h6></Nav.Link>
                        <Nav.Link href="/support"><h6 className='ml-5' style={{ color:'rgb(116,96,133)', fontWeight:'900' }}>Learn & Support</h6></Nav.Link>
                        <Nav.Link href="/login"><h6 className='ml-5' style={{ color:'rgb(116,96,133)', fontWeight:'900' }}>Sign In</h6></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;