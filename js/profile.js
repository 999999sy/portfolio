$(document).ready(function(){

 $(window).scroll(function(){

   var w_top = $(window).scrollTop();
   var p_top = $('#PROFILE').offset().top;

   if(p_top<=w_top+500){
     $('.left_wrap li:nth-child(1)').fadeIn(50).stop().animate({'opacity':'1'
   })
     $('.left_wrap li:nth-child(2)').fadeIn(50).delay(500).stop().animate({'opacity':'1'
   })
     $('.right_wrap li:nth-child(1)').fadeIn(50).delay(250).stop().animate({'opacity':'1'
   })
     $('.right_wrap li:nth-child(2)').fadeIn(50).delay(1000).stop().animate({'opacity':'1'
   })
     $('.right_wrap li:nth-child(3)').fadeIn(50).delay(1000).stop().animate({'opacity':'1'
   })

 } //if end

}) // scroll end

  console.log("w_top : " + w_top);
console.log("top : "+ p_top);

})
