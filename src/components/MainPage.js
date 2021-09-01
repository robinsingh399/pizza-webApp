import React from 'react'
import './MainPage.css';
import Header from './Header';
import Menu from './Menu';
import MainDisplay from './MainDisplay';
import Footer from './Footer';
function MainPage() {
    return (
        <div className="mainContainer">
        <div className="MainPage">
            <Header/>
            <div className="mainArea">
                <Menu/>
                <MainDisplay/>
            </div>
            <Footer/>
        </div>
        </div>
    )
}

export default MainPage;
