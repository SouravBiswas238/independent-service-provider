import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handelSignout = () => {
        signOut(auth);
    }
    return (

        <>
            <Navbar bg="dark" expand="lg" variant="dark" className='sticky-top'>
                <Container>
                    <Navbar.Brand className='logo-box' as={Link} to="/"><img className='logo-width' src="https://static.wixstatic.com/media/0ff3a1_6f888dba03a64a839ced071c960cc39d~mv2.png/v1/fill/w_228,h_172,al_c,usm_0.66_1.00_0.01,enc_auto/logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto text-uppercase">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="home#services">Services</Nav.Link>
                            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav className="align-items-end">
                            <Nav.Item>
                                {
                                    user ? <Nav.Link onClick={handelSignout} eventKey="link-1">Sign Out</Nav.Link> : <Nav.Link eventKey=" link-1" href="/login">Log In</Nav.Link>
                                }

                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2" href="/signup" >Create An account</Nav.Link>
                            </Nav.Item>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;