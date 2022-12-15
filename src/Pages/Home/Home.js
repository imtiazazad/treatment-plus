import React from 'react';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import Newsletter from '../../Components/NewsLetter/Newsletter';
import Banner from './Banner';
import HomeHospitals from './HomeHospitals';
import Review from './Review';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <HomeSlider />
            <HomeHospitals></HomeHospitals>
            <Review></Review>
            <Newsletter/>
        </div>
    );
};

export default Home;