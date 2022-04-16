import React from 'react';
import { Card } from 'react-bootstrap';
import HomeBanner from '../../image/home-banner.jpg'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Card className="bg-dark text-white">
                <Card.Img className='w-100 img-fluid' src={HomeBanner} alt="Card image" />
                <Card.ImgOverlay className=''>
                    <Card.Title
                        className='fs-lg-1 fw-bold m-lg-5'
                    >Keep Your Body <span className='d-block text-warning'> Fit & Strong</span></Card.Title>
                    <Card.Text className='w-50 m-lg-4 fs-6' >
                        I will help you set goals and reach them. I don't just show you how to do an exercise.I educate you in the areas of strength training, cardiovascular endurance, and proper nutrition.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
            <Services></Services>
        </div>
    );
};

export default Home;