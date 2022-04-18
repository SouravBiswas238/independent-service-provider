import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container>


                <Row>
                    <Col xl={4} sm={12} >
                        <h4 className='text-center bg-warning p-2'>Authentication vs. Authorization</h4>
                        <div>
                            <p>
                                Authentication is the process of verifying who someone is, Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.
                            </p>
                            <p>
                                authorization is the process of verifying specific applications.
                                when user access is authorized, he has access to different levels of data based on the permissions set by the organization. </p>
                        </div>
                    </Col>
                    <Col xl={4} sm={12} >
                        <h4
                            className='text-center bg-warning p-2'>We use firebase for:</h4>
                        <div>Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. we can use firebase to store users' data like chat messages, and users' details, used to send notifications. Firebase Authentication can help us to secure data</div>
                        <p>
                            <h5 className='bg-light p-2'>Other othentication Platforms</h5>
                            1.User Authentication Platforms  <br />
                            2.STYTCH <br />
                            3.Ory <br />
                            4.Supabase <br />
                            5.Okta <br />
                            6.PingIdentity <br />
                            7.Keycloak <br />
                            8.Frontegg <br />

                        </p>
                    </Col>
                    <Col xl={4} sm={12}><h4 className='text-center bg-warning p-2'>What other services does firebase provide other than authentication?</h4>
                        <div>
                            <ListGroup>
                                <ListGroup.Item>Cloud Firestore.</ListGroup.Item>
                                <ListGroup.Item>Cloud Functions.</ListGroup.Item>
                                <ListGroup.Item>   Hosting.</ListGroup.Item>
                                <ListGroup.Item> Authentication.</ListGroup.Item>
                                <ListGroup.Item>  Google Analytics.</ListGroup.Item>
                                <ListGroup.Item>  Dynamic Links
                                </ListGroup.Item>
                                <ListGroup.Item> Remote Config</ListGroup.Item>
                                <ListGroup.Item>  Cloud Messaging</ListGroup.Item>
                            </ListGroup>


                        </div></Col>
                </Row>
            </Container>

        </div>
    );
};

export default Blog;