import React from 'react';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import Banner from './Banner';
import Review from './Review';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HomeSlider/>
            <Review></Review>
        </div>
    );
};

export default Home;