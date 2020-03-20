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
           {/* <Toolbox/>*/}
            {/*<optionHandler />*/}
            <Footer/>
        </div>
    )
}


export default App
/*

import React from "react"
import ChildComponent from "./components/ChildComponent"
import ParentComponent from "./components/ParentComponent"

class App extends React.Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <ParentComponent/>
                {/!*<ChildComponent/>*!/}
            </div>
        )
    }
}
export default App*/
