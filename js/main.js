$(window).resize(function(){
  window_h();
})


$(document).ready(function(){

  //window height
  window_h();
haha_img();
  // window scroll
  $(window).scroll(function(){
      var nav_height = $('nav').height();
      var imgsize =$(this).scrollTop();
      var top = $('header').offset().top;
  if(imgsize>2){
      $('nav').css({
          border:'0px',
          position:'fixed',
          top:'0',
          opacity:'0.9',

      });
       }
      else {
          $('nav').css("position","relative")
      }


   });

   // page scroll
  $('nav ul li a.color_hold').addClass('color');
  $('nav ul li a').on('click',function(event){
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 900, function(){
        window.location.hash = hash;
      });
    } // End if

    // nav pagination
    $('nav ul li a').removeClass('color');
    $(this).addClass('color');

  });

    // main text button click pagination
  $('.main_text span.button a').on('click',function(event){
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 900, function(){
        window.location.hash = hash;
      });
    } // End if

    // // nav pagination
    $('nav ul li a').removeClass('color');
    $('nav ul li:nth-child(2) a').addClass('color');

  });

})

// main img opacity
function haha_img(){
  $('.haha img').animate({opacity:0},'slow');
  $('.haha img').animate({opacity:1},'slow');
}

// height 값 조정
function window_h(){
  // window 맞게 height 값 조정
  var nav_height =$('nav').height();
  var window_height = $(window).height()-nav_height;

  $('.laugh').css({'height':window_height});
}
