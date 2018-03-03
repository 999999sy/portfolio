$(document).ready(function(){

  slider();

    $('.work_web img').mouseover(function(){
      $(this).css('opacity','0.5');
    })
    $('.work_web img').mouseleave(function(){
      $(this).css('opacity','1');
    })


})

function slider(){
  // slider
  var li_width = $('ul.work_list li').width();
  var list_length = $('ul.work_list li').length;
  console.log(li_width);
  console.log(list_length);

  var list = $('ul.work_list');
  var list_first = $('ul.work_list li:first-child').clone();
  var list_last = $('ul.work_list li:last-child').clone();


  // slide button
 var num = 0;


  $('.slide_button .button_right').on('click',function(){
    num--;
    $('ul.work_list').stop().animate({'marginLeft':li_width*num},700);
      if(-list_length==num-3){
        num=1;
        list.css('margin-left','num');
      }
      console.log(num);
      console.log(-list_length);
  })
  num=0;
  $('.slide_button .button_left').on('click',function(){
    num++;
    $('ul.work_list').stop().animate({'marginLeft':li_width*num-400},700);
    if(list_length==num){
      num=0;
      list.css('margin-left','num');
    }

  })


// $('.show_button').hover(function(){
//   $('.show_button').css('background','#fff');
// },function(){
//   $('.show_button').css('color',' #3c5f9f');
// },function(){
//   $('.show_button').css('border','1px solid #3c5f9f');
// },function(){
//   $('.show_button').css('border-radius','5px');
// })



}
