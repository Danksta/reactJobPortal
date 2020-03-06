import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

class App extends React.Component {

    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "file:///home/user/WebstormProjects/reactproject/src/components/script.js";
        this.div.appendChild(script);
    }

    render() {


        return (
            <div>
                <Header/>
                <MainContent/>
                <Footer/>
                <p>Potty</p>
                <div className="App" ref={el => (this.div = el)}>
                    <h1>Hello react</h1>
                    {/* Script is inserted here */}
                </div>
            </div>
        )
    }
}


export default App