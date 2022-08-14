import React from 'react';
import Banner from '../components/Banner';
import FoodContainer from '../components/FoodContainer';
import Footer from '../components/Footer';
import WhyChoseUs from '../components/WhyChoseUs';


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <FoodContainer></FoodContainer>
            <WhyChoseUs></WhyChoseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;