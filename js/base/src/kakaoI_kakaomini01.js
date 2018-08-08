// kakaoI_kakaomini01.js

(function($) {

var aph01 = $('.appeach01');
var aph02 = $('.appeach02');
var div = $('.help_text').children('div');
var divLen = $('.help_text').children('div').length;
var j=0;


var Zindex = function() {
  var i=0;
  for(; i<=divLen; i+=1) {
    var j = i*10;
    div.eq(divLen-i).css({zIndex: j});
  }
};
Zindex();


var IndiActive = function(j){
  div.eq(j).fadeIn(1000);
  div.eq(j).next().fadeIn(1000);
  div.eq(j).prev().fadeOut(1000);
};
IndiActive(j);

var autoStart;

var startSlide =function(){autoStart = 
setInterval(function(){
(j >= divLen) ? j=0 : j+=1;
IndiActive(j);},
 3000);};


startSlide(j);



}) (jQuery);