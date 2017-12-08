//logic interface
var formNumbers =[];
function sally(finisher) {
  for (var index = 1; index <=finisher; index++)
        if (index %15===0) {
      formNumbers.push("ping pong");
    }else if (index % 5===0) {
      formNumbers.push("pong");
    } else if (index %3===0) {
      formNumbers.push("ping");
    }else {
      formNumbers.push(index);
    }
    }
// #user interface

$(document).ready(function() {
  $("#button").click(function() {
    var finisher = parseInt($("#numberInput").val());
    sally(finisher);
    formNumbers.forEach(function(finisher){
      $("#results").append("<li>" +finisher + "</li>");
    });

  });
});
