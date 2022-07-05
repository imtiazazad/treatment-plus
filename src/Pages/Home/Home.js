import React from 'react';
import Banner from './Banner';
import DocTeam from './DocTeam';
import Review from './Review';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <DocTeam></DocTeam>
            <Review></Review>
        </div>
    );
};

export default Home;