$(document).ready(function(){

  slider();



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

  list.append(list_first);
  list.prepend(list_last);

  // for(i=0; i<list_length; i++){
  //  $('.work_slider ul.work_list').animate({'marginLeft':-li_width*i},2000);
  // }

  // slide button
 var num = -1;


  $('.slide_button .button_right').on('click',function(){
    num--;
    $('ul.work_list').stop().animate({'marginLeft':li_width*num},1000);
      if(-list_length==num-1){
        num=1;
        list.css('margin-left','num');
      }
      console.log(num);
      console.log(-list_length);
  })

  $('.slide_button .button_left').on('click',function(){
    num=0;
    num++;
    $('ul.work_list').stop().animate({'marginLeft':li_width*num-400},1000);
    if(list_length==num){
      num=0;
      list.css('margin-left','num');
    }
    //
    // console.log(num);
    // console.log(list_length);
  })
}
