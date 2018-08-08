// kakaoI_main.js

(function($) {
// gnb hover > 하위 메뉴 표시

var gBtn = $('.dropBtn');
var gnb = $('#gnb');
var gnbLi = gnb.children('ul').children('li');
var gnbOl = gnbLi.children('ol');

gnbOl.hide();

gnbLi.children('a').on('click', function(e){
  e.preventDefault();
  $(this).next('ol').fadeIn();
  $(this).next('ol').addClass('show');
  $(this).parent('active');
});


gnbLi.on('mouseleave', function(e){

e.preventDefault();
$(this).children('ol').fadeOut();
$(this).removeClass('active');
$(this).children('ol').removeClass('show');

});


// gnb > li > a에 포커스 상태일 때
gnbLi.children('a').on('focus', function(e){

$(this).next('ol').fadeIn();
});

// gnbOl의 li와 a에 대해 각각 적용(each문)
$.each(gnbOl, function(i,v){

  var j= gnbOl.eq(i).children('li');
  j.eq(-1).children('a').on('blur', function(){
  gnbOl.eq(i).stop().fadeOut();
  });
});

gnbOl.children('li').last().children('a').on('blur', function(e){

$(this).hide();
});

// drop버튼 클릭 시 메뉴 펼쳐서 보여주기

var wind = $(window);
var windWidth = wind.outerWidth();

gnb.hide();

if(windWidth <1025) {
gBtn.on('click', function(){

gnb.slideToggle();

});
} else if (windWidth >1024) {
  gBtn.hide();
  gnb.show();
}

// 디바이스 가로값 변경 시 자동 적용

$(wind).on('resize', function(e){

var nowW = $(window).outerWidth();
if(windWidth !== nowW) {
  location.reload();
}
});


}) (jQuery);

