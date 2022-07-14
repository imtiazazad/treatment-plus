import React from 'react';
import Banner from './Banner';
import Doctors from './Doctors';
import Review from './Review';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors/>
            <Review></Review>
        </div>
    );
};

export default Home;