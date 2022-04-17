import React, { useRef } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import './Login.css';
import googleIcon from '../../image/Google-Icon-PNG-768x768.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handelSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className='text-danger' >Error: {error.message}</p>
            </div>

    }
    if (user) {
        navigate('/home')
    }
    const navigateRegister = (event) => {
        navigate('/signup');
    }
    return (
        <div className='m-auto text-center p-4'>

            <Form onSubmit={handelSubmit} className='w-50 w-sm-100  m-auto'>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">

                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Col>
                </Form.Group>
                {errorElement}

                <Form.Group className="mb-3">

                    <Button type="submit" className='w-50  w-sm-100' >Log in</Button>

                    <div className='row-or-box mt-3  w-sm-100'>
                        <div className='row-border-box'></div>
                        <span>or</span>
                        <div className='row-border-box'></div>
                    </div>
                </Form.Group>
            </Form>
            <p>New to Sourav Fitness <span role="button" className='text-danger pointer button' onClick={navigateRegister}>Please register</span></p>


            <div className='continue-google-button '>

                <button className='w-25  w-sm-100'
                    onClick={() => signInWithGoogle()}>

                    <img src={googleIcon} alt="google-img" />
                    <span className='ms-1'>Continue with Google</span>
                </button>
            </div>
        </div >
    );
};

export default Login;