import React from 'react';
import img1 from '../images/header1.jpg';
import img2 from '../images/header2.jpg';
import img3 from '../images/header3.jpg';

import '../styles/Header.css';

import { Route, Switch } from 'react-router-dom';


const Header = () => {


    // const images = [img1, img2, img3];
    // const index = Math.floor(Math.random() * 3);
    // console.log(index);

    // const img = images[index];

    return (
        <>



            <Switch>
                <Route path='/products' exact render={() => (
                    <img src={img2} alt="city" />
                )} />
                <Route path='/contact' render={() => (
                    <img src={img3} alt="city" />
                )} />

                <Route path='/panel' render={() => (
                    <img src={img1} alt="city" />
                )} />

                <Route path='/' render={() => (
                    <img src={img1} alt="city" />
                )} />


                <Route render={() => (
                    <img src={img1} alt="city" />
                )} />
            </Switch>

            {/* <img src={img} alt='city' /> */}
        </>


    );
}

export default Header;