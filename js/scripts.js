$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var favOne = $("input#favOne").val();
    var favTwo = $("input#favTwo").val();
    var favThree = $("input#favThree").val();

    var array = [favOne, favTwo, favThree];

  });
});
