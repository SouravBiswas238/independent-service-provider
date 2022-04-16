import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (

        <>
            <Navbar className='sticky-lg-top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className='logo-box' href="#home"><img className='logo-width' src="https://static.wixstatic.com/media/0ff3a1_6f888dba03a64a839ced071c960cc39d~mv2.png/v1/fill/w_228,h_172,al_c,usm_0.66_1.00_0.01,enc_auto/logo.png" alt="" /></Navbar.Brand>
                    <Nav className="me-auto text-uppercase">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/services">Services</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">

                        <Nav.Item>
                            <Nav.Link eventKey="link-1" href="/login">Log In</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2" >Create An account</Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Container>

            </Navbar>

        </>

    );
};

export default Header;