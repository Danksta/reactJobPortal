let str = "<div className=\"ui segment\" id=\"dropdown1" + newTagID + "\" >\n" +
    "                        <label htmlFor=\"elements" + newTagID + "\">Choose an element:</label>\n" +
    "\n" +
    "                        <select id=\"elements" + newTagID + "\" className=\"ui dropdown\">\n" +
    "                            <option value=\"div\">div</option>\n" +
    "                            <option value=\"input\">input</option>\n" +
    "                        </select>\n" +
    "                        <button type=\"button\" className=\"ui button\"\n" +
    "                                onClick={(e) => this.createElement(e, 'elements" + newTagID + "', 'p1" + newTagID + "', inputType, 'div', Math.random().toString(36).substr(2, 9))}>Select\n" +
    "                        </button>\n" +
    "\n" +
    "<p id=\"p1" + newTagID + "\">\n" +
    "                        </p> " +
    "                    </div>"


json =
    {
            "id":
                "div", "name":
                "div", "type":
                "div", "properties":
                {
                        "css_class":
                            "div1", "style":
                            ""
                }
            ,
            "elements":
                [{
                        "id": "div",
                        "name": "div",
                        "type": "div",
                        "properties": {"css_class": "div1", "style": ""},
                        "elements": []
                }]
    }
    document.getElementById('button_output').addEventListener('click', ()=>{
            console.log(document.getElementById('p1').value)
    })