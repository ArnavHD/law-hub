import React from 'react';
import Navbar from '../Navbar/Navbar';
import BannerImg from '../BannerImg/BannerImg';
import BestLawerDiscription from '../BestLawer/BestLawerDiscription';
import AllLawer from '../AllLawer/AllLawer';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className=" mx-40">
          {/* <Navbar></Navbar> */}
          <Outlet></Outlet>
        </div>

        {/* <BannerImg></BannerImg>
            <BestLawerDiscription></BestLawerDiscription>
            <AllLawer></AllLawer> */}
        <Footer></Footer>
      </div>
    );
};

export default Root;