import React from 'react';
import Banner from './Banner';
import DocTeam from './DocTeam';
import Doctors from './Doctors';
import Services from './Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <DocTeam></DocTeam>
        </div>
    );
};

export default Home;