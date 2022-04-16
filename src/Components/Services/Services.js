import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data.splice(3)))
    }, []);
    return (
        <div className='bg-light'>
            <h1 className='text-center f-bold text-dark  m-0 pt-3 mb-0
            '>WHAT WE OFFER</h1>
            <p className='text-danger text-center'>Our Services</p>
            <CardGroup>

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </CardGroup>

        </div>
    );
};

export default Services;