import React from 'react';
import Hero from './sections/Hero';
// import Delivered from './sections/Delivered';
// import Options from './sections/Options';
// import Fresh from './sections/Fresh';
import LandingInfo from './sections/LandingInfo';
import Footer from './sections/Footer';
import delivered from '../../assets/Landing/delivered.jpg';
import options from '../../assets/Landing/options.jpg';
import fresh from '../../assets/Landing/fresh.jpg';

function LandingPage() {
    return (
        <>
            <Hero/>
            <LandingInfo imgSrc={delivered} secondary="Delivered" primary2="straight to your door steps"/>
            <LandingInfo imgSrc={options} primary="Enjoy a variety of" secondary="Options"/>
            <LandingInfo imgSrc={fresh} primary="Guaranteed" secondary="Fresh"/>
            <Footer/>
        </>
    );
}

export default LandingPage;