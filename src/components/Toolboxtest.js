import React from "react"
import {Data, inputFields, inputType, js} from './Data';

export let arr = []
let pos = []
let createEle = ''
let idList = []

class Toolbox extends React.Component {
    constructor() {
        super();
    }

    view(data, selectedInput, insertTag, inputData) {
        let p = document.getElementById(insertTag)
        console.log(data)
        let option = document.getElementById(selectedInput).value
        let val = this.findObjectByIdInDictArray(inputData, option, "id")
        console.log("view function val is" + val)
        /*let html = JSON.stringify(val)*/
        /*p.innerText += html*/
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

    createElement(data, selectedInput, insertTag, inputData, newTag, newTagID) {


        //let cssClassInput = document.getElementById('cssClassInput').value
        let idInput = document.getElementById('id').value
        idList.push(idInput)
        let x = document.getElementById("idList");
        let option = document.createElement("option");
        option.text = idInput;
        x.add(option);
        let insertData = this.findObjectByIdInDictArray(inputData, document.getElementById(selectedInput).value, "name")
        let customFields = this.findObjectByIdInDictArray(inputFields, document.getElementById(selectedInput).value, 'name')
        console.log("customFields is " + customFields)
        /*for (const [key, value] of Object.entries(customFields)) {
            if (key !== 'name') {

                insertData[key] = value
            }
        }*/
        console.log("create element is "+ createEle)
        if (createEle.length !== 0) {
            let enterLocation = document.getElementById('idList').value
            /*insertData.id = idInput*/
            //insertData.properties.css_class = cssClassInput
            insertData = JSON.stringify(insertData)
            let arr1 = JSON.parse(createEle)
            let arr2 = arr1;
            this.findObjectByIdInDictArray(arr1, enterLocation, "id")
            let str = ''
            console.log("arr1 before push "+ JSON.parse(arr1) )
            pos.forEach(elem => {
                arr1 = arr1[elem];
                str = str + "[" + elem + "]"
            })
            console.log("arr1 after push "+ JSON.parse(arr1))
            arr1.elements.push(JSON.parse(insertData))
            let ret = JSON.stringify(arr2)
            arr.push(JSON.parse(ret))
            this.NewDiv(arr)
            for (let i = 0; i < arr.length; i++) {
                createEle = JSON.stringify(arr[i])
                document.getElementById(insertTag).innerText = JSON.stringify(arr[i])
            }
        } else {

            /*let val = this.view(data, selectedInput, insertTag, inputData)
           */
            /*insertData.id = idInput*/
            //val.properties.css_class = cssClassInput
            insertData = JSON.stringify(insertData)
            arr.push(JSON.parse(insertData))
            this.NewDiv(arr)
            createEle = JSON.stringify(arr)
            document.getElementById(insertTag).innerText = JSON.stringify(arr)
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
        console.log(obj[objProp1]);
        if (obj[objProp1] == id) {
            console.log('found i')
            return obj;
        }
        let foundObject = false;
        if (obj.hasOwnProperty("elements")) {
            const noOfElements = obj["elements"].length;
            for (let i = 0; i < noOfElements; ++i) {
                let foundElement = false;
                foundElement = this.findObjectById(obj["elements"][i], id, objProp1);
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
                            <option value="div">div</option>
                            <option value="input">input</option>
                        </select>
                        <label htmlFor="idList">Where to enter</label>
                        <select id="idList" className="ui dropdown">
                        </select>

                        <div className="ui segment" id="customFields">
                            <label htmlFor="textInput">Enter id</label>
                            <input type="text" className="ui fluid input" id="id"></input>
                            <label htmlFor="textInput">Enter CSS class</label>
                            <input type="text" className="ui fluid input" id="cssClassInput"></input>
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