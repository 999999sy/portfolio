$(document).ready(function(){

  // slider();

    $('.work_web img').mouseover(function(){
      $(this).css('opacity','0.5');
    })
    $('.work_web img').mouseleave(function(){
      $(this).css('opacity','1');
    })

    // slide 2
setInterval(slide_2(),2000);
})


function slide_2(){

  //이전/다음버튼 초기화
     var arrow_01 = $('.button_left');
     var arrow_02 = $('.button_right');

     var imgLength_01 = $('.work_list li').length;
     var imgWidth = $('.work_list li').width();

     var list = $('.work_list');
     var show_num = 3;
     var show_num1 = 3;
     var i = 0;
     var copyObj = $('.work_list li:lt(' + show_num + ')').clone();
     var copyObj2 = $('.work_list li:gt(' + show_num1 + ')').clone();

     //슬라이드 이후에
     list.append(copyObj);
     // 슬라이드 이전
     list.prepend(copyObj);


     //이미지 슬라이드 처리

     $('.button_left').click(function(){
               if(i == imgLength_01){
                  i = 0 ;
                  list.css({
                     'margin-left': 0
                  })
               }
               console.log(i);
               i++;
               list.stop().animate({
                  marginLeft: -imgWidth * i
               },500)

     })

     $('.button_right').click(function(){

           if(i== imgLength_01-4){
             i=0;
             list.css({'margin-left':imgWidth*i});
           }
           console.log(i);
            i++;
           list.stop().animate({'marginLeft':imgWidth*i},500);
       })



          // 이전/다음 버튼
          // $('.button_right').click(function(){
          //
          //           if(i == imgLength_01){
          //              i = 0 ;
          //              list.css({
          //                 'margin-left': 0
          //              })
          //           }
          //
          //           i++;
          //           list.stop().animate({
          //              marginLeft: imgWidth * i
          //           })
          //           // console.log(i);
          //
          //             // console.log(imgLength_01);
          //
          //
          // })





}



//  수정 전 slider


// function slider(){
//   // slider
//   var li_width = $('ul.work_list li').width();
//   var list_length = $('ul.work_list li').length;
//   console.log(li_width);
//   console.log(list_length);
//
//   var list = $('ul.work_list');
//   var list_first = $('ul.work_list li:first-child').clone();
//   var list_last = $('ul.work_list li:last-child').clone();
//
//
//   // slide button
//  var num = 0;
//
//
//   $('.slide_button .button_right').on('click',function(){
//     num--;
//     $('ul.work_list').stop().animate({'marginLeft':li_width*num},700);
//       if(-list_length==num-3){
//         num=1;
//         list.css('margin-left','num');
//       }
//       console.log(num);
//       console.log(-list_length);
//   })
//   num=0;
//   $('.slide_button .button_left').on('click',function(){
//     num++;
//     $('ul.work_list').stop().animate({'marginLeft':li_width*num-400},700);
//     if(list_length==num){
//       num=0;
//       list.css('margin-left','num');
//     }
//
//   })
// }
