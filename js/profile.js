$(document).ready(function(){

 $(window).scroll(function(){

   var w_top = $(window).scrollTop();
   var p_top = $('#PROFILE').offset().top;

   if(p_top<=w_top+500){
     $('.left_wrap li:nth-child(1)').delay(250).animate({'opacity':'1'
   })
     $('.left_wrap li:nth-child(2)').delay(500).animate({'opacity':'1'
   })
     $('.right_wrap li:nth-child(1)').delay(250).animate({'opacity':'1'
   })
     $('.right_wrap li:nth-child(2)').delay(1000).animate({'opacity':'1'
   })
     $('.right_wrap li:nth-child(3)').delay(1000).animate({'opacity':'1'
   })

 } //if end

}) // scroll end

  console.log("w_top : " + w_top);
console.log("top : "+ p_top);

})
