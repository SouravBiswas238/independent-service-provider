import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import profile from '../../image/Sourav.png'

const About = () => {
    return (
        <div className='bg-light text-center bg-black'>
            <Container className=''>
                <h2 className='text-warning fw-bold p-3'>About Me</h2>
                <Row >
                    <Col xl={6} sm={12}>
                        <>
                            <Card className='border-0'>
                                <Card.Img variant="top" src={profile} />

                            </Card>

                        </>
                    </Col>


                    <Col xl={6} sm={12}><>

                        <Card className='border-0 rounded align-items-center' >
                            <Card.Body className='bg-secondary text-white'>
                                <h3 className=''>My Goal</h3>
                                <Card.Text>
                                    <p className=''>
                                        Hey there, I am Sourav Kumar Biswas. I studied BSC in Computer Science and Engineering At Faridpur Engineering College. Now I am learning front-end with React, And want to be a full-stack web developer, and build my career as a Web developer.
                                    </p>

                                    <div className='d-sm-none d-xl-block'>
                                        <p>----------</p>
                                        <p>------------------</p>
                                        <p>---------------------------</p>
                                        <p>---------------------------------</p>
                                        <p>------------------------------------------</p>
                                        <p>------------------------------------------------</p>
                                        <p>-----------------------------------------------------</p>
                                        <p>--------------------------------------------------------</p>
                                        <p>---------------------------------------------------------------</p>
                                        <p>-----------------------------------------------------------------------</p>
                                    </div>


                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </></Col>
                </Row>

            </Container>
        </div >
    );
};

export default About;