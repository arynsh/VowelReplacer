var vowelList = ["a","e","i","o","u"]
$(document).ready(function()
{
  $("form#input").submit(function(event)
  {
    event.preventDefault();
    var puzzle = $(".stringInput").val();
    var splitPuzzle = puzzle.split('');
    console.log(splitPuzzle);
    for (var i = 0; i < splitPuzzle.length; i++)
     {
       if (vowelList.includes(splitPuzzle[i])){
         splitPuzzle.splice(i,1,"-");
       }
     }
     $(".ending").append(splitPuzzle.join(""));
     $("#input").hide();
  });
});
