import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import './Login.css';
import googleIcon from '../../image/Google-Icon-PNG-768x768.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
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
    return (
        <div className='m-auto text-center p-4'>

            <Form className='w-50 m-auto'>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">

                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                {errorElement}

                <Form.Group className="mb-3">

                    <Button type="submit">Log in</Button>

                </Form.Group>
            </Form>

            <div className='continue-google-button '>
                <button className=''
                    onClick={() => signInWithGoogle()}>

                    <img src={googleIcon} alt="google-img" />
                    <span className='ms-1'>Continue with Google</span>
                </button>
            </div>
        </div >
    );
};

export default Login;