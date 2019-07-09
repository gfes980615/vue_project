$(document).ready(function(){
    $("#add").click(function(){
      var inputValue = $("#input").val();
      $("#toDoList").append(
        `<div class="toDos">
          <input type="checkbox" class="status">
          <p>${inputValue}</p>
                  <button class="delete">Delete</button>
              </div>`
      );
      
      $(".status").each(function(){
        $(this).click(function(){
          var status = $(this).prop("checked");
          if(status == true){
            $(this).parent().children("p").css({"text-decoration": "line-through","color": "#a0a0a0"});
          }else if(status == false){
             $(this).parent().children("p").css({"text-decoration": "none","color": "black"});
          };
        });
      });
  
      $(".delete").each(function(){
        $(this).click(function(){
         $(this).closest('div').remove(); 
        })
      })
    });
  });
  