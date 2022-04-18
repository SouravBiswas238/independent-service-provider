import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { name, about, picture, prize } = props.service;
    return (
        <Card className='m-3'>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {about}
                </Card.Text>
            </Card.Body>
            <Card.Footer className='text-center border-0 d-flex justify-content-evenly'>
                <span className='text-warning fw-bold'>{prize}</span>
                <Link to="/checkout">
                    <button className='border-1 border-light text-primary rounded bg-transparent'>Preceed Checkout</button>
                </Link>
            </Card.Footer>
        </Card>

    );
};

export default Service;