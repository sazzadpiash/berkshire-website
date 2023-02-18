import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ScrollToTop from '../components/ScroolToTopInUrlChange/ScrollToTop';

const Main = () => {
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;