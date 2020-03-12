import React, {Component} from "react"
import OptionHandler from "./handler/OptionHandler";
import GetElementId from "./htmlElements/GetElementId"


class MainContent extends Component {
    render() {
        return (
            <main>
                <p>Henlo main content</p>
                <OptionHandler/>
                <div className="ui segment">
                    <GetElementId/>
                </div>
                <p>Henlo main content ends</p>
            </main>
        )
    }
}

export default MainContent
