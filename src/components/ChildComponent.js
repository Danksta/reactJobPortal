import React from "react"

class ChildComponent extends React.Component {
    constructor(props) {
        super()
        let count1 = props.count
    }

    funct(props){
        return props.count
    }

    render(props) {
        return (
            <div>
                <h1>Hello {this.count1}</h1>
            </div>
        )
    }
}

export default ChildComponent