$(document).ready(function(){

  var top_height = $('#CONTACT').offset().top-137;
  var top_height_1 =$('#CONTACT').height();
  var scroll_top = $(window).scrollTop();
  var window_top = $(window).height();

  // modal height 값 조정
  console.log(window_top);
  // $('.modal').css('height',top_height_1);
  //
  //
  // if(top_height==scroll_top){
  //   $('.modal').css('display','block');
  // }
  // $('.modal').click(function(){
  //   $('.modal').css('display','none');
  //
  // // })


  console.log(scroll_top);
  console.log(top_height);



})
