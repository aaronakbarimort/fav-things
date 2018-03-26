$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var favOne = $("input#favOne").val();
    var favTwo = $("input#favTwo").val();
    var favThree = $("input#favThree").val();

    var array = [favOne, favTwo, favThree];
    var array2 = []
    array2.push(array[0] , array[2]);

    $("#output").append("<li>" + array2[0] + "</li>" + "<li>" + array2[1] + "</li>");
  });
});
