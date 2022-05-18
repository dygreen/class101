// SEARCH ) 실시간 급상승 검색어 롤링
function rolling(){
  $(".rising_up ul").stop(true,true).animate({"margin-top":"-=28px"},500,function(){
    $(".rising_up ul li:first-child").appendTo(".rising_up ul");
    $(this).css({"margin-top":"0"});
  });
}



$(document).ready(function(){

  setInterval(rolling,3000);

  // top btn
  $(window).scroll(function(){
    if($(window).scrollTop() > 100){
      $("#top_btn").fadeIn();
    } else {
      $("#top_btn").fadeOut();
    }
  });

  // top btn 클릭시 부드럽게 올라가는
  $("#top_btn").click(function(){
    $("html, body").animate({scrollTop : 0}, 300);
    return false;
  });

  // =========== SEARCH ===========
  // 실시간 급상승 icon을 클릭하면 전체 리스트가 보이는
  let rising = true;
  $(".rising .down_icon").click(function(){
    if(rising){
      $(this).html('<span class="iconify" data-icon="akar-icons:chevron-up"></span>');
      $(".rising_up").fadeOut();
      $(".list_all").slideDown("slow");
      rising = false;
    } else {
      $(this).html('<span class="iconify" data-icon="akar-icons:chevron-down"></span>');
      $(".rising_up").fadeIn();
      $(".list_all").slideUp("slow");
      rising = true;
    }
  });






});