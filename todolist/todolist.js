$(document).ready(function(){
  $("#add").click(function(){
    var inputValue = $("#input").val();
    $("#toDoList").append(
      `<div class="toDos">
        <p id="item">${inputValue}</p>
        <button id="inProject">To Do</button>
        </div>`
    );

    $("#delete").click(function(){
      $(this).click(function(){
        $(this).closest('div').remove(); 
      })
    });
    
    $("#inProject").click(function(){
      $(this).click(function(){
        var todoItem = $(this).parent().children("p").text();
        $("#doingItems").append(
          `<div class="toDos2">
            <p>${todoItem}</p>
            <button id="done">Done</button>
            </div>`
        );
      })
    });
  
    $("#done").click(function(){
      $(this).click(function(){
        var finishItem = $(this).parent().children("p").text();
        $("#finishItems").append(
          `<div class="toDos3">
            <p>${finishItem}</p>
            <button id="delete">delete</button>
            </div>`
        );
      })
    });
  });
});
  