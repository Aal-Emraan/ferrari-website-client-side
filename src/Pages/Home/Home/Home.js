import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import FeaturedCars from '../FeaturedCars/FeaturedCars';
import LandingPage from '../LandingPage/LandingPage';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <LandingPage></LandingPage>
            <FeaturedCars></FeaturedCars>
            <PhotoGallery></PhotoGallery>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;