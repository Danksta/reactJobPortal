import React from "react"
import {Data, inputFields, inputType, js} from './Data';

let pos = []

class Toolbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createEle: '',
            idList: [],
            arr: props.arr,
            setData: props.setData
        }
    }

    view(data, selectedInput, insertTag, inputData) {
        let p = document.getElementById(insertTag)
        let option = document.getElementById(selectedInput).value
        let val = this.findObjectByIdInDictArray(inputData, option, "id")
        return val
    }

    searchElement(data, selectedInput, insertTag, inputData) {
        let html = JSON.stringify(this.view(data, selectedInput, insertTag, inputData))

        document.getElementById(insertTag).innerText += html


    }

    createInput(inputFields, data) {
        let val = this.findObjectByIdInDictArray(inputFields, data, 'name')
        let customFields = document.getElementById('customFields')
        customFields.innerHTML = ''
        for (const [key, value] of Object.entries(val)) {
            if (key !== 'name') {
                let label = document.createElement("LABEL");
                label.setAttribute("for", key);
                let labelText = document.createTextNode(value);
                label.appendChild(labelText)
                let input = document.createElement("INPUT");
                input.setAttribute("type", "text");
                input.setAttribute('id', key)
                input.setAttribute('class', "ui fluid input")
                //x.setAttribute("value", "Hello World!");

                customFields.appendChild(label)
                customFields.appendChild(input);
            }
        }
        return val
    }

    createElement(data, selectedInput, insertTag, inputData) {

        let customFields = this.findObjectByIdInDictArray(inputFields, document.getElementById(selectedInput).value, 'name')
        console.log("customFields is " + JSON.stringify(customFields))

        //let cssClassInput = document.getElementById('cssClassInput').value
        let idInput = document.getElementById('id').value
        this.state.idList.push(idInput)
        let x = document.getElementById("idList");
        let option = document.createElement("option");
        option.text = idInput;
        let insertData = this.findObjectByIdInDictArray(inputData, document.getElementById(selectedInput).value, "name")
        for (const [key, value] of Object.entries(customFields)) {
            if (key !== 'name') {
                let keyValue = document.getElementById(key).value
                if(keyValue !== ''){
                    let keyArr = key.split('.')
                    if(keyArr.length > 1){
                        let insertData1 = insertData
                        for(let i=0; i<keyArr.length -1 ; i++){
                            insertData = insertData[keyArr[i]]
                        }
                        insertData[keyArr[keyArr.length -1 ]]  = keyValue
                        insertData = insertData1
                    }else {
                        insertData[key] =  keyValue
                    }
                }
            }
        }

        x.add(option);
        if (this.state.createEle.length !== 0) {
            let enterLocation = document.getElementById('idList').value
            console.log("insertdata is " + JSON.stringify(insertData))
            insertData.id = idInput
            insertData = JSON.stringify(insertData)
            let arr1 = JSON.parse(this.state.createEle)
            let arr2 = arr1;

            this.findObjectByIdInDictArray(arr1, enterLocation, "id")
            let str = ''
            pos.forEach(elem => {
                arr1 = arr1[elem];
                str = str + "[" + elem + "]"
            })
            arr1.elements.push(JSON.parse(insertData))
            let ret = JSON.stringify(arr2)
            this.state.arr = []
            this.state.arr.push(JSON.parse(ret))
            this.state.setData(this.state.arr[0])
            this.NewDiv(this.state.arr)
            for (let i = 0; i < this.state.arr.length; i++) {
                this.state.createEle = JSON.stringify(this.state.arr[i])
                document.getElementById(insertTag).innerText = JSON.stringify(this.state.arr[i])
            }
            /*console.log("create element is" + createEle)*/
        } else {

            /*let val = this.view(data, selectedInput, insertTag, inputData)
           */
            insertData.id = idInput
            //val.properties.css_class = cssClassInput
            insertData = JSON.stringify(insertData)
            this.state.arr = []
            this.state.arr.push(JSON.parse(insertData))
            this.state.setData(this.state.arr)
            this.NewDiv(this.state.arr)
            this.state.createEle = JSON.stringify(this.state.arr)
            document.getElementById(insertTag).innerText = JSON.stringify(this.state.arr)
            /*console.log("create element is" + createEle)*/

        }


    }

    viewAll(data, insertTag, inputData) {
        let p = document.getElementById(insertTag)
        for (let i = 0; i < inputData.length; i++) {
            p.innerText += JSON.stringify(inputData[i], null, '\t\t\t\t\t')
        }
    }

    findObjectByIdInDictArray(arr, id, objProp1) {
        pos = []
        for (let i = 0; i < arr.length; i++) {
            let val = false
            val = this.findObjectById(arr[i], id, objProp1)
            if (val !== null && val !== false) {
                pos.reverse()
                pos.splice(0, 0, i);
                console.log("pos array is " + pos)
                return val
            }
        }
    }

    findObjectById(obj, id, objProp1) {
        if (obj[objProp1] == id) {
            console.log('found i')
            return obj;
        }
        let foundObject = false;
        if (obj.hasOwnProperty("elements")) {
            const noOfElements = obj["elements"].length;
            for (let i = 0; i < noOfElements; ++i) {
                console.log("findObjectById inner loop is " + JSON.stringify(obj["elements"][i]))
                console.log("findObjectById i is " + i)
                let foundElement = false;
                foundElement = this.findObjectById(obj["elements"][i], id, objProp1);
                console.log(foundElement);
                if (foundElement) {
                    foundObject = foundElement;
                    pos.push(i)
                    pos.push('elements')
                    break;
                }
            }
        }
        if (foundObject) return foundObject;
        return false;
    }

    selectDropdown(e) {
        let val = document.getElementById('elements').value
        this.createInput(inputFields, val)
        //let ret = this.findObjectByIdInDictArray(inputType, val, "name")
        // console.log(ret)
    }


    NewDiv = (arr1) => {
        arr1.forEach(elem => {
            //this.createDiv(elem, document.getElementById('root1'));
            // clickableEvent(elem);
        })
    }


    render() {
        return (
            <div className="ui container">
                <div className="ui segment" id="multipleDropdownInput">
                    <div className="ui segment" id="dropdown1">
                        <label htmlFor="elements">Choose an element:</label>

                        <select id="elements" className="ui dropdown" onChange={(e) => this.selectDropdown(e)}>
                            <option value="start">Select Element</option>
                            <option value="div">div</option>
                            <option value="input">input</option>
                        </select>
                        <label htmlFor="idList">Where to enter</label>
                        <select id="idList" className="ui dropdown" onChange={(e) => this.selectDropdown(e)}>
                        </select>

                        <div className="ui segment" id="customFields">{/*
                            <label htmlFor="textInput">Enter id</label>
                            <input type="text" className="ui fluid input" id="id"></input>
                            <label htmlFor="textInput">Enter CSS class</label>
                            <input type="text" className="ui fluid input" id="cssClassInput"></input>*/}
                        </div>
                        <p id="p1">
                        </p>
                        <button type="button" className="ui button" id="button_output"
                                onClick={(e) => this.createElement(e, 'elements', 'p1', inputType, 'div', Math.random().toString(36).substr(2, 9))}>Select
                        </button>

                    </div>
                </div>
                <div className="ui segment">

                    <label htmlFor="textInput">Search an element by id</label>
                    <input type="text" className="ui fluid input" id="textInput"></input>
                    <button type="button" className="ui button"
                            onClick={(e) => this.searchElement(e, 'textInput', 'p2', js)}>Select
                    </button>
                    <div className="ui segment" id="p2">
                        <p></p>
                    </div>
                </div>

                <div className="ui segment">

                    <label htmlFor="textInput">View all elements</label>
                    <button type="button" className="ui button"
                            onClick={(e) => this.viewAll(e, 'p3', js)}>Select
                    </button>
                    <div className="ui segment" id="p3">
                        <p></p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Toolbox