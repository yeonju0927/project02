// kakaoI_introduce.js

(function($){


var circleUl = $('.circle');
var circle = circleUl.children('li');


// 텍스트 변경 효과
circle.on('mouseenter', function(){ 

$(this).css({backgroundColor:'#fff', border: '5px solid #CEC567'});
$(this).children('span').eq(0).fadeOut(500);
$(this).children('span').eq(1).addClass('active');

});


circle.on('mouseleave', function(){ 

$(this).css({backgroundColor:'#CEC567', border: '5px solid #fff'});
$(this).children('span').eq(1).removeClass('active');
$(this).children('span').eq(0).fadeIn(500);

});


// modal indicator & 내용 바꾸기

var indicator = $('.indicator');
var indiLi = indicator.children('li');
var modalDl = $('#modalbox').children('dl');
var Lilen = indiLi.length;



indiLi.eq(0).children('a').addClass('active');

indiLi.on('click', function(){

var i = $(this).index();

$(this).children('a').addClass('active');
$(this).siblings('li').children('a').removeClass('active');


modalDl.eq(i).show();
modalDl.eq(i).siblings().hide();


});

// modal close버튼 만들고 활성화시키기

var modalBG = $('#modalBG');
var diWindow = $('.diWindow');

modalBG.hide();

circleUl.on('click', function(e){
e.preventDefault();


modalBG.fadeIn(1000);
diWindow.prepend('<div class="close"><button type="button"><span class="hidden">닫기</span></button></div>');
var close = $('.close');
close.parent().css({position:'relative'});
close.css({width:'45px', height:'45px', backgroundImage:'url("../../img/introduce/close_btn.png")', backgroundSize:'contain', position:'absolute', top: 0, right:0, zIndex: 2000});
                                                                                                                                       
close.on('click', function(e){

e.preventDefault();
modalBG.fadeOut();

});


});




}) (jQuery);