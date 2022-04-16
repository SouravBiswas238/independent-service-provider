import React from 'react';
import { Card } from 'react-bootstrap';

const Service = (props) => {
    const { name, about, picture } = props.service;
    return (
        <Card className='m-3'>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {about}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='text-center border-0'>
                <button className='border-0 text-primary rounded bg-transparent'>Read more about</button>
            </Card.Footer>
        </Card>

    );
};

export default Service;