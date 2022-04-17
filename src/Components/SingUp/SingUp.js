import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleIcon from '../../image/Google-Icon-PNG-768x768.png';

const SingUp = () => {

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
        navigate('/home');
    }
    const navigateLogin = event => {
        navigate('/login');

    }
    return (
        <div className='m-auto text-center p-4'>

            <Form className='w-50 w-sm-100  m-auto'>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">

                    <Col>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">

                    <Col>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">


                    <Col >
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Col>
                </Form.Group>
                {errorElement}

                <Form.Group className="mb-3">

                    <Button type="submit" className='w-50  w-sm-100' >Sign Up</Button>

                    <div className='row-or-box mt-3  w-sm-100'>
                        <div className='row-border-box'></div>
                        <span>or</span>
                        <div className='row-border-box'></div>
                    </div>
                </Form.Group>
            </Form>

            <p>Already Have an account <span role="button" className='text-danger pointer button' onClick={navigateLogin}>Login</span></p>

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


export default SingUp;