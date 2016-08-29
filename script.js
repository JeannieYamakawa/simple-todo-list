
var input = document.getElementsByClassName("inputBox")[0];
var myList = document.createElement("ul");
var addButton = document.getElementsByTagName("button")[0];
var insertedNode = document.body.insertBefore(myList, addButton);
var x = document.getElementsByClassName('x')
var newInput = document.createElement("input");
var editTab =  "<button id = 'edit' class = 'edit' style='display:inline-block; float:right; length: 20px; margin-right:25px; margin-top:7px; font-family:arial;  font-size:4;'>edit</button>"
var xTab = "<div class = 'x' style='display:inline-block; float: right; font-family: arial;  margin-right: 5px;font-size: 7;'>x</div>" //creates a div for the x, nowhere
// console.log(x)
//document.body.appendChild(myList)


function addEvent (){
    if(input.value !== ""){   //user cannot enter a blank item
    var newLi = document.createElement("li");   //creates the new list item, attached to nothing
    newLi.innerHTML = "<div style='display:inline-block'>" + input.value + "</div>" + xTab + editTab//attaches the new x dix to the innerHTML of the list item
    myList.appendChild(newLi);  //appends the list item to the unordered list
    input.value = "" //sets the input text box back to blank
    var liIndex = x.length-1  //secretly numbers the toDo list in order of entry
    var newId = "'id" + liIndex + "'"  //creates a new ID string for each entry
    newLi.childNodes[1].id = newId  //assigns that id string to the new list item (each will be numbered in sequence)
    var ex = document.getElementById(newId)  //creates a variable to get only the x div
    ex.addEventListener("click", removeItem) //adds an event listener to the x div
    var edit = document.getElementById("edit")
    console.log(edit) //edit is the edit button
    edit.addEventListener("click", editItem) //when the edit button is clicked, run the editItem function
    newLi.appendChild(newInput) //creates an input element on the new list item
    newInput.setAttribute("type", "text") //sets the new input to be a text input
    newInput.setAttribute("id", "override") //sets the ID name of the new input box
    newInput.setAttribute("value","type new text")
    newInput.setAttribute("style", "display:none") //hides the new input box until edit button is clicked


}
}


function addEvent2 (){
    var code = event.keyCode
        if ([13].includes(code)&& input.value !=="") {
    var newLi = document.createElement("li");
    newLi.innerHTML = "<div style='display:inline-block'>" + input.value + "</div>" + xTab + editTab
    myList.appendChild(newLi);
    input.value = ""
    var liIndex = x.length-1
    var newId = "'id" + liIndex + "'"
    newLi.childNodes[1].id = newId
    var ex = document.getElementById(newId)
    ex.addEventListener("click", removeItem)
    var edit = document.getElementById("edit")
    console.log(edit) //edit is the edit button
    edit.addEventListener("click", editItem) //when the edit button is clicked, run the editItem function
    newLi.appendChild(newInput) //creates an input element on the new list item
    newInput.setAttribute("type", "text") //sets the new input to be a text input
    newInput.setAttribute("id", "override") //sets the ID name of the new input box
    newInput.setAttribute("value","type new text")
    newInput.setAttribute("style", "display:none") //hides the new input box until edit button is clicked

    }
}



function editText(){}

function removeItem(){
    var myParent = this.parentNode
    myParent.parentNode.removeChild(myParent)
}




function editItem(){

    newInput.setAttribute("style", "display: inline-block") //makes the input box visible
    var input2 = document.getElementById("override") //creates a new variable for the new input box that was created
    console.log(input2.value)
     input2.addEventListener("keyup", storeValue)
        function storeValue(e){
             if (e.keyCode == 13) {
            this.parentNode.innerHTML =  input2.value + xTab + editTab
        }
        }




    //document.getElementById("override").parentNode = new1;

    //var textToEdit = myParent.innerText;
}







addButton.addEventListener("click", addEvent)
input.addEventListener("keyup", addEvent2)
