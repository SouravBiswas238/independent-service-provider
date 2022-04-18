import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark'>
            <footer className="sticky-bottom d-flex justify-content-between mx-5 ">
                <div className="">
                    <span className="text-muted">copy right © 2022 , sourav</span>
                </div>

                <div className="nav d-flex text-muted">
                    <span className="mx-1">Facebook</span>
                    <span className="mx-1">Facebook</span>
                    <span className="mx-1">Facebook</span>



                </div >


            </footer >
        </div>
    );
};

export default Footer;