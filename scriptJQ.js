$(document).ready(function(){
var $header = $("<h1>Todo App</h1>")
$("body").append($header)   //append header to body

var $input = $("<input>");
$input.attr("placeholder", "Task Here")
var $ul = $("<ul>");
var $button = $("<button id = 'add_todo'>");
$button.text("Add Task");
$("body").append($input);
$("body").append($ul);
$("body").append($button);

$input.on("change", function(event){
    var $taskName = $(event.target).val();     //returns the value of the element that triggered the event
    console.log($(event.target), "event.target")

    var $newItem = $("<li>");
    $newItem.text($taskName);
    $ul.append($newItem)
    var $removeX = $("<button class = 'rm'>").text("X")
    $newItem.append($removeX)
    var $edit = $("<button class = 'edit'>").text("edit")
    $newItem.append($edit)
    $(event.target).val("");

})


$("ul").on("click", ".rm", function(){     //!!!!!! this says attach this action to the ul that already exists, instead of just attaching it to the class name "rm" because if we did that the function would fire without even having typed anything in that has a button with the class rm, and then when we finally typed something in and clicked the button nothing would happen because the function already had fired.
$(this).parent().remove();
console.log($(this));


//same thing in vanilla javascript:
    //myList.addEventListener("click", function(ev){
    //   if (event.target===".rm"
         //    dostuff)       })
    //
})




$("ul").on("click", ".edit", function(ev){   //do I want function(ev) ?
        var $newInput = $("<input id = 'newInput'></input>");  //create a new input box
        $("li").append($newInput)

        var $confirm = $("<button id = 'confirm'>CONFIRM</button>");  //create a new input box
        $("li").append($confirm)

        console.log( $newInput.val() )


})

$("ul").on("click", "#confirm", function(){   //do I want function(ev) ?
        var $newInput = $("#newInput");
        console.log('yo');
        console.log( $newInput.val() );

})













})
// var $formBody = $("<form>");
// $("body").append($formBody);
// $($formBody).attr("action","index.html");
// $($formBody).attr("method", "get");
//
//
// var $bar = $("<input>");
// $($formBody).append($bar);
// $($bar).attr("type","text");
// console.log($bar)
// $($bar).attr("placeholder","Add text here");
// $($bar).attr("id","textbar");
//
//
//
//
//
// var $addButton = $("<button>");
// $($addButton).attr("id", "add_todo");
// $($addButton).html("Add Todo");
// var $space = $("<p>");
// $($formBody).append($space)
// $($formBody).append($addButton);
//
//
//
// var $list = $("<ul>");
// $("body").append($list);
//
//
// function listItem (){
//     event.preventDefault()
//     var $text = $("#textbar").val()
//     console.log($text)
//     var $addedItem = $("<li>");
//     var $removeButton = $("<button>");
//     var $editButton = $("<button>");
//
//
//     $($addedItem).html = $text
//
//     $($removeButton).attr("type","button")
//     $($removeButton).addClass("xButton")
//     $($removeButton).html("x");
//     $($editButton).html("edit");
//
//     $list.append($addedItem)
//     $($addedItem).append($removeButton);
//     $($addedItem).append($editButton)
//
//     $("#textbar").val("");
//
//     $removeButton.click(function(){
//         $addedItem.remove()
//
//     })
//
//
//     $editButton.click(function(){
//         var $editedText = $("<input>");
//         $editedText.attr("type", "text");
//         $editedText.attr("id", "editText")
//         $editedText.attr("value", $text)
//
//         $addedItem.html($editedText);
//
//         var $update = $("#update");
//
//         $update.click(function(){
//             $text = $("#editedText").val();
//             $addedItem.html($text);
//             $addedItem.append($editButton);
//             $addedItem.append($removeButton)
//
//
//         })
//
//     })
//
//
// }
//
// $addButton.click(function(){
//     if($("#textbar").val() !== ""){
//     listItem()
// }
//     else {
//         event.preventDefault()
//     }
// })
//
// })
