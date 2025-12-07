import React from 'react';
import BannerImg from '../BannerImg/BannerImg';
import BestLawerDiscription from '../BestLawer/BestLawerDiscription';
import AllLawer from '../AllLawer/AllLawer';
import OurService from '../OurService/OurService';

const Home = () => {
    return (
        <div>
            <BannerImg></BannerImg>
            <BestLawerDiscription></BestLawerDiscription>
            <AllLawer></AllLawer>
            <OurService></OurService>
        </div>
    );
};

export default Home;