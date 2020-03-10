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
        /*for (let i = 0; i < inputData.length; i++) {
            let val = this.findObjectById(inputData[i], option)
            if (val !== null && val !== false) {
                break
            }
        }*/

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
        /*let val = document.getElementById(insertTag).innerText
        let cssClassInput = document.getElementById('cssClassInput').value
            let idInput = document.getElementById('idInput').value
            idList.push(idInput)
        let x = document.getElementById("idList");
        let option = document.createElement("option");
        option.text = idInput;
        x.add(option);
        if (val !== "") {
            val = JSON.parse(val)

            let insertData = this.view(data, selectedInput, insertTag, inputData)
            /!*insertData = JSON.parse(insertData)*!/
            insertData.id = idInput
            insertData.properties.css_class = cssClassInput
            insertData = JSON.stringify(insertData)

            let ret = JSON.stringify(this.findEmptyElement(val, insertData))
            console.log("ret is " + ret)
            arr.push(JSON.parse(ret))
            this.NewDiv(arr)
            console.log("wasim", arr)
            document.getElementById(insertTag).innerText = ""
            for (let i = 0; i < arr.length; i++) {
                document.getElementById(insertTag).innerText = JSON.stringify(arr[i])
            }
        } else {

            val = this.view(data, selectedInput, insertTag, inputData)
            val.id = idInput
            val.properties.css_class = cssClassInput
            val = JSON.stringify(val)
            console.log(JSON.parse(val))
            arr.push(JSON.parse(val))
            this.NewDiv(arr)
            document.getElementById(insertTag).innerText = JSON.stringify(arr[0])
        }*/
        let customFields = this.findObjectByIdInDictArray(inputFields, selectedInput, 'name')
        console.log("customFields is " + customFields)
        for (const [key, value] of Object.entries(customFields)) {
            if (key !== 'name') {

            }
        }
        let cssClassInput = document.getElementById('cssClassInput').value
        let idInput = document.getElementById('id').value
        idList.push(idInput)
        let x = document.getElementById("idList");
        let option = document.createElement("option");
        option.text = idInput;
        x.add(option);
        if (createEle.length !== 0) {
            let enterLocation = document.getElementById('idList').value
            console.log("crea ele is " + createEle)
            let val = JSON.parse(createEle)

            /*let insertData = this.view(data, selectedInput, insertTag, inputData)*/
            let insertData = this.findObjectByIdInDictArray(inputData, document.getElementById(selectedInput).value, "name")
            /*insertData = JSON.parse(insertData)*/
            console.log("insertdata is " + insertData)
            insertData.id = idInput
            insertData.properties.css_class = cssClassInput
            insertData = JSON.stringify(insertData)
            // let ret = JSON.stringify(this.findEmptyElement(val, insertData))
            console.log("type of insertData" + JSON.parse(insertData).id)
            let arr1 = JSON.parse(createEle)
            /*arr1.push(val)*/
            let arr2 = arr1;

            this.findObjectByIdInDictArray(arr1, enterLocation, "id")
            console.log("arr1 before posforeach is " + JSON.stringify(arr1) + "pos array is " + pos)
            let str = ''
            pos.forEach(elem => {
                arr1 = arr1[elem];
                str = str + "[" + elem + "]"
            })
            console.log("arr" + str)
            console.log("insertData is " + insertData)
            console.log("val is" + JSON.stringify(arr1))
            arr1.elements.push(JSON.parse(insertData))
            let ret = JSON.stringify(arr2)
            console.log("ret is " + ret)
            arr.push(JSON.parse(ret))
            this.NewDiv(arr)
            for (let i = 0; i < arr.length; i++) {
                createEle = JSON.stringify(arr[i])
                document.getElementById(insertTag).innerText = JSON.stringify(arr[i])
            }
            console.log("create element is" + createEle)
        } else {
            let val = this.findObjectByIdInDictArray(inputData, document.getElementById(selectedInput).value, "name")

            /*let val = this.view(data, selectedInput, insertTag, inputData)
           */
            val.id = idInput
            val.properties.css_class = cssClassInput
            val = JSON.stringify(val)
            arr.push(JSON.parse(val))
            this.NewDiv(arr)
            createEle = JSON.stringify(arr)
            document.getElementById(insertTag).innerText = JSON.stringify(arr)
            console.log("create element is" + createEle)

        }


    }


    findEmptyElement(arr, insertData) {
        if (arr.elements.length === 0) {
            console.log('1 is executing')
            console.log("insertData is" + insertData)
            console.log("arr is" + JSON.stringify(arr))

            arr.elements.push(JSON.parse(insertData))
            console.log("insertDataPushed" + JSON.stringify(arr))
            return arr
        }
        console.log('2 is executing')
        this.findEmptyElement(arr.elements[0], insertData);
        return arr
    }

    viewAll(data, insertTag, inputData) {
        let p = document.getElementById(insertTag)
        for (let i = 0; i < inputData.length; i++) {
            p.innerText += JSON.stringify(inputData[i], null, '\t\t\t\t\t')
        }
        inputData.push('henlo')
    }

    findObjectByIdInDictArray(arr, id, objProp1) {
        pos = []
        console.log("findObjectByIdInDictArray arr is" + JSON.stringify(arr) + "id is" + id)
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
                            <option value="div">div</option>
                            <option value="input">input</option>
                        </select>
                        <label htmlFor="idList">Where to enter</label>
                        <select id="idList" className="ui dropdown">
                        </select>

                        <div className="ui segment" id="customFields">
                            <label htmlFor="textInput">Enter id</label>
                            <input type="text" className="ui fluid input" id="idInput"></input>
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