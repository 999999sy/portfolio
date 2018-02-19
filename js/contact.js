$(document).ready(function(){

  var top_height = $('#CONTACT').offset().top-137;
  var top_height_1 =$('#CONTACT').height();
  var scroll_top = $(window).scrollTop();
  var window_top = $(window).height();

  // modal height 값 조정
  console.log(window_top);
  console.log(scroll_top);
  console.log(top_height);



  mouse();


})

function mouse(){
  $('.contact_phone img').mouseover(function(){
    $('.modal').fadeIn("slow").css('display','block');
    return false;
  })
  $('.modal').click(function(){
      $(this).fadeOut('slow').css('display','none');
      $(this).css('cursor','pointer');
  })

}
