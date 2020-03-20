import React, {Component} from "react"
import OptionHandler from "./handler/OptionHandler";
import GetElementId from "./htmlElements/GetElementId"
import Toolbox from "./Toolbox"
import Table from 'rc-table';
class MainContent extends Component {

    constructor() {
        super();
        this.setData = this.setData.bind(this)
    }
    state = {
        arr: []
    }

    setData(arr){
        console.log("setData called " + JSON.stringify(arr))
        this.setState({
                arr: arr
            }
        )
    }

    let
    columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 100,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: 100,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            width: 200,
        },
        {
            title: 'Operations',
            dataIndex: '',
            key: 'operations',
            render: () => <a href="#">Delete</a>,
        },
    ];

    const
    data = [
        { name: 'Jack', age: 28, address: 'some where', key: '1' },
        { name: 'Rose', age: 36, address: 'some where', key: '2' },
    ];
    render() {
        return (
            <main>
                <p>Henlo main content</p>
                {/*<OptionHandler/>
                <div className="ui segment">
                    <GetElementId/>
                </div>
                <p>Henlo main content ends</p>*/}
                <Table columns={this.columns} data={this.data} />
                {/*<Toolbox arr={this.state.arr} setData={this.setData}/>*/}
            </main>
        )
    }
}

export default MainContent
