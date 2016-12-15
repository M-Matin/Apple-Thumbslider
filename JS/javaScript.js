$(document).ready(function(){
  //declare variable:
  var totalWidth = 0;
  var positions = new Array();

  //make a loop through slides using each
  $('#slides .slide').each(function(i){

    positions[i] = totalWidth;
    totalWidth += (this).width();
//check each slide has width
    if(!$(this).width()){
      alert("please add width to your mages");
      return false;
    }
  });
  $('#slides').width(totalWidth);
  $('#menu ul li a').click(function(e, keepScroll){

    });
});
