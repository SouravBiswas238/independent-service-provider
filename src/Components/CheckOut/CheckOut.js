import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const CheckOut = () => {
    const [services, setServices] = useServices();
    console.log(services);
    const { checkoutId } = useParams();

    return (
        <div>
            <h2 className='text-center mt-2'>Your Service Name: {checkoutId}</h2>

            <CardGroup>
                <Card.Body className='bg-light'>
                    <Card.Title>{checkoutId}</Card.Title>
                    <Card.Text>
                        I will lead dynamic workouts individually targeted to your fitness needs, allowing you to minimize time & maximize results. No matter the budget or goals we have a coach for you
                    </Card.Text>
                </Card.Body>
            </CardGroup>

        </div>
    );
}

export default CheckOut;