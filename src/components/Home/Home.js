import React from 'react';
import Usetitle from '../Tilehook/Usetitle';
import Advertised from './Advertised';
import Categories from './Categories';
import Flashsale from './Flashsale';
import Slider from './Slider';

const Home = () => {
    Usetitle();
    return (
        <div className='lg:px-14 px-5'>
            <Slider></Slider>
            <Advertised></Advertised>
            <Flashsale></Flashsale>
            <Categories></Categories>
        </div>
    );
};

export default Home;