import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { name, about, picture, prize, _id } = props.service;
    const navigate = useNavigate();
    const handelchakeOutId = (name) => {
        navigate(`/checkout/${name}`);
    }
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
                <span className='text-success bg-transparent border-2 border-dark fw-bold'>{prize}</span>

                <button onClick={() => handelchakeOutId(name)} className='border-2 border-light text-primary rounded bg-transparent'>Preceed Checkout</button>

            </Card.Footer>
        </Card>



    );
};

export default Service;