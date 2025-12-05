import React from 'react';
import BannerImg from '../BannerImg/BannerImg';
import BestLawerDiscription from '../BestLawer/BestLawerDiscription';
import AllLawer from '../AllLawer/AllLawer';

const Home = () => {
    return (
        <div>
            <BannerImg></BannerImg>
            <BestLawerDiscription></BestLawerDiscription>
            <AllLawer></AllLawer>
        </div>
    );
};

export default Home;