import React from "react"
import {Data, inputType, js} from './Data';

export let arr=[]

class Toolbox extends React.Component {
    constructor() {
        super();
    }

    view(data, selectedInput, insertTag, inputData) {

        let p = document.getElementById(insertTag)
        console.log(data)
        let option = document.getElementById(selectedInput).value
        let val
        let html
        for (let i = 0; i < inputData.length; i++) {
            val = this.findObjectById(inputData[i], option)
            if (val !== null && val !== false) {
                break
            }
        }
        html = JSON.stringify(val)
        /*p.innerText += html*/
        return html
    }

    createElement(data, selectedInput, insertTag, inputData, newTag, newTagID) {


        /*let node = document.createElement(newTag);
        node.setAttribute("id", newTagID)
        let textNode = document.createTextNode("");
        node.appendChild(textNode);
        document.getElementById(insertTag).appendChild(node)
        textNode = document.createTextNode();*/
        let val = document.getElementById(insertTag).innerText
        // console.log(`val is ${val}`);
        // const tempVal = {
        //     "id": "div",
        //     "name": "div",
        //     "type": "div",
        //     "properties": {"css_class": "div1", "style": ""},
        //     "elements": [{
        //         "id": "div",
        //         "name": "div",
        //         "type": "div",
        //         "properties": {"css_class": "div1", "style": ""},
        //         "elements": []
        //     }]
        // }
        if (val !== "") {
            val = JSON.parse(val)

            let insertData = this.view(data, selectedInput, newTagID, inputData)
            let ret = JSON.stringify(this.findEmptyElement(val, insertData))
            console.log("ret is " + ret )
            arr.push(ret)
            console.log(arr)

            document.getElementById(insertTag).innerText = arr.toString()


        } else {
            val = this.view(data, selectedInput, newTagID, inputData)
            arr.push(val)
            console.log(arr)
            document.getElementById(insertTag).innerText = arr.toString()
        }

        return
    }

    findEmptyElement(arr, insertData) {
        if (arr.elements.length === 0) {
            console.log("insertData is" + insertData)
            arr.elements.push(JSON.parse(insertData))
            return arr
        }
        this.findEmptyElement(arr.elements[0], insertData)
    }


    viewAll(data, insertTag, inputData) {

        let p = document.getElementById(insertTag)
        for (let i = 0; i < inputData.length; i++) {
            p.innerText += JSON.stringify(inputData[i], null, '\t\t\t\t\t')
        }
        inputData.push('henlo')
    }

    findObjectById(obj, id) {
        console.log(obj.id);
        if (obj.id == id) {
            console.log('found i')
            return obj;
        }
        let foundObject = false;
        if (obj.hasOwnProperty("elements")) {
            const noOfElements = obj["elements"].length;
            for (let i = 0; i < noOfElements; ++i) {
                let foundElement = false;
                foundElement = this.findObjectById(obj["elements"][i], id);
                console.log(foundElement);
                if (foundElement) {
                    foundObject = foundElement;
                    break;
                }
            }
        }
        if (foundObject) return foundObject;
        return false;
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui segment" id="multipleDropdownInput">
                    <div className="ui segment" id="dropdown1">
                        <label htmlFor="elements">Choose an element:</label>

                        <select id="elements" className="ui dropdown">
                            <option value="div">div</option>
                            <option value="input">input</option>
                        </select>
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
                            onClick={(e) => this.view(e, 'textInput', 'p2', js)}>Select
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