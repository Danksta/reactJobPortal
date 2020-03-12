import React, {Component} from 'react';
/*import '../../public/css/app.css'*/
import Select from '../htmlElements/Select';

class OptionHandler extends Component {

    state = {
        selected_value: "text",
        select_id: "",
        some_value: ["date", "datetime", "email"]
    }

    optionChangeHandler = (e) => {
        console.log("this is e", e)
        this.setState({
                selected_value: e
            }
        )
    }

    CallInterval = () => {
        console.log("intervall call")
    }


    render() {
        console.log("final state", this.state)
        return (

            <div className="App">
                <h1>Henlo 3</h1>
                <header className="App-header">
                    {  /* <img src={logo} className="App-logo" alt="logo" />       */}
                    <h1>Henlo 1</h1>

                    <Select select_id="type_of_input" selected_value={this.state.selected_value}
                            some_value={this.state.some_value}
                            changed={this.optionChangeHandler}

                    />

                </header>
            </div>
        );
    }
}

export default OptionHandler;
