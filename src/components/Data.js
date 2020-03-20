import React from "react";

export let inputType = [{
    "id": "div",
    "name": "div",
    "type": "div",
    "properties": {
        "css_class": "div1",
        "style": ""
    },
    "elements": []
},
    {
        "id": "input",
        "name": "input",
        "type": "input",
        "label": "Age",
        "align": "center",
        "properties": {
            "data_type": "number",
            "css_class": "",
            "style": ""
        }
    }]

export let inputFields = [
    {
      "name": "start"
    },
    {
        "name": "div",
        "id" : "Enter ID",
        "properties.css_class": "Enter css"
    },
    {
        "name": "input",
        "id" : "Enter ID",
        "label": "Enter label",
        "properties.data_type": "Enter input type",
        "properties.css_class": "Enter css",

    }

    /*{
        "name": "div",
        elements: [
            {
                "id" : "Enter ID",
                "properties.css_class": "Enter css"
            }
        ]
    },
    {
        "name": "input",
        elements: [
            {
                "id" : "Enter ID",
                "label": "Enter label",
                "properties.css_class": "Enter css"
            }
        ]
    }*/

]

export let js = [
    {
        "id": "div",
        "name": "div",
        "type": "div",
        "properties": {
            "css_class": "div1",
            "style": ""
        },
        "elements": [
            {
                "id": "input1",
                "name": "input",
                "type": "input",
                "label": "Age",
                "align": "center",
                "properties": {
                    "data_type": "number",
                    "css_class": "",
                    "style": ""
                },
                "elements": []
            }]
    },
    {
        "id": "div66",
        "name": "div",
        "type": "div",
        "properties": {
            "css_class": "div1",
            "style": ""
        },
        "elements": [{
            "id": "div99",
            "name": "div",
            "type": "div",
            "properties": {
                "css_class": "div1",
                "style": ""
            },
            "elements": [{
                "id": "input3",
                "name": "input",
                "type": "input",
                "label": "Date of Birth",
                "align": "center",
                "properties": {
                    "data_type": "date",
                    "css_class": "",
                    "style": ""
                },
                "elements": []
            },
                {
                    "id": "input31",
                    "name": "input",
                    "type": "input",
                    "label": "Date of Birth",
                    "align": "center",
                    "properties": {
                        "data_type": "date",
                        "css_class": "",
                        "style": ""
                    },
                    "elements": [{
                        "id": "input313"
                    }, {
                        "id": "input314"
                    }, {
                        "id": "input315"
                    }

                    ]
                }]
        },
            {
                "id": "div11",
                "name": "div",
                "type": "div",
                "properties": {
                    "css_class": "div1",
                    "style": ""
                },
                "elements": [{
                    "id": "div13",
                    "name": "div",
                    "type": "div",
                    "properties": {
                        "css_class": "div1",
                        "style": ""
                    },
                    "elements": []
                }]
            }
        ]
    }
]
export let js1 = [
    {
        "id": "div",
        "elements": [
            {
                "id": "input0",
                "elements": [
                    {
                        "id": "input12",
                        "elements": []
                    },
                    {
                        "id": "input1",
                        "elements": []
                    }
                ]
            },
            {
                "id": "input2",
                "elements": []
            }]
    },
    {
        "id": "div66",

        "elements": [{
            "id": "div99",
            "elements": [{
                "id": "input3",

                "elements": []
            }]
        }]
    }
]

class Data extends React.Component {
    constructor() {
        super();
    }


}

export default Data