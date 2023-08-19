import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({children}) => {
    return (
        <div className='max-w-5xl mx-auto'>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;