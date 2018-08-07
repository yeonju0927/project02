// kakaoI_main.js

// banner & indicator 이동

(function($) {

var bannerUl = $('.bannerUl');
var bannerLi = bannerUl.children('li');
var indiLi = $('.indicator').children('li');
var bannerLen = bannerLi.length;
var j=0;

var Zindex = function() {
  var i=0;
  for(; i<=bannerLen; i+=1) {
    var j = i*10;
    bannerLi.eq(bannerLen-i).css({zIndex: j});
  }
};
Zindex();


var IndiActive = function(j){
  indiLi.eq(j).addClass('active');
  indiLi.eq(j).siblings('li').removeClass('active');
  bannerLi.eq(j).fadeIn();
  bannerLi.eq(j).next().fadeIn();
  bannerLi.eq(j).prev().fadeOut();
};
IndiActive(j);

var autoStart;

var startSlide =function(){autoStart = 
setInterval(function(){
(j >= bannerLen) ? j=0 : j+=1;
IndiActive(j);},
 2000);};


startSlide(j);

indiLi.on('click', function(e){

e.preventDefault();
j = $(this).index();
IndiActive(j);

});


// 라이언 두마리 애니메이션 효과
var little = $('.little');
var teen = $('.teen');

teen.hide();

$(window).on('scroll', function(){
teen.fadeIn(1000);
teen.addClass('active');

});


}) (jQuery);