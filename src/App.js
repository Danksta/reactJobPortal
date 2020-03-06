import React, { Component } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Toolbox from "./components/Toolbox"

function App() {
    return (
        <div>
            <Header />
            <MainContent/>
            <Toolbox/>
            <Footer/>
        </div>
    )
}


export default App