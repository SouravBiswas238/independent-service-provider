import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useServices();


    return (
        <div id="services" className='bg-light'>
            <h1 className='text-center f-bold text-dark  m-0 pt-3 mb-0
            '>WHAT WE OFFER</h1>
            <p className='text-danger text-center'>Our Services</p>
            <CardGroup>

                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </CardGroup>

        </div>
    );
};

export default Services;