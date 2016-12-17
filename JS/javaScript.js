$(document).ready(function(){
  //declare variable:
  var totalWidth = 0;
  var positions = new Array();

  //make a loop through slides using each
  $('#slides .slide').each(function(i){
    //get slider width
    positions[i] = totalWidth;
    totalWidth += (this).width();

    //check each slide has width
    if(!$(this).width()){
      alert("please add width to your mages");
      return false;
    }
  });

  //set width
  $('#slides').width(totalWidth);

  //menu item click handler
  $('#menu ul li a').click(function(e, keepScroll){
      //remove active class and add inactive
      ('li.product').removeClass('active').addClass('inactive');
      //add active class to parents
      $(this).parents().addClass('active');

      $(this).parent().prevAll('.product').lenght;

      $('.slides').stop().animate(margin-left:-positions[pos]+ "px", 450);

      //prevent the default action
      e.preventDefault();
    });
});
