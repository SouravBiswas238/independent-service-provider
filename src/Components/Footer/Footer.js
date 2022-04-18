import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='bg-dark'>
            <footer className="d-flex justify-content-between mx-5 ">
                <div className="m-2">
                    <span className="text-muted">copy right © 2022 , sourav</span>
                </div>

                <div className="nav d-flex text-muted">


                    <img className=' w-10 m-2' src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="" />
                    <img className='w-10 m-2' src="https://mpng.subpng.com/20180629/vue/kisspng-www-mevrouwpak-nl-advertising-graphic-design-insta-instagramm-5b3692f028e740.4061558515303032161676.jpg" alt="" />
                    <img className='w-10 m-2' src="https://pnggrid.com/wp-content/uploads/2021/05/Facebook-logo-2021.png" alt="" />
                </div >


            </footer >
        </div>
    );
};

export default Footer;
