// SEARCH ) 실시간 급상승 검색어 롤링
function rolling() {
  $(".rising_up ul").stop(true, true).animate({
    "margin-top": "-=28px"
  }, 500, function () {
    $(".rising_up ul li:first-child").appendTo(".rising_up ul");
    $(this).css({
      "margin-top": "0"
    });
  });
}

// INDEX) 스플래쉬
function splashIn(){
  $(".splash").fadeOut(3000);
}

$(document).ready(function () {

  setInterval(rolling, 3000);

  // top btn
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#top_btn").fadeIn();
    } else {
      $("#top_btn").fadeOut();
    }
  });

  // top btn 클릭시 부드럽게 올라가는
  $("#top_btn").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 300);
    return false;
  });

  // =========== SEARCH ===========
  // 실시간 급상승 icon을 클릭하면 전체 리스트가 보이는
  let rising = true;
  $(".rising .down_icon").click(function () {
    if (rising) {
      $(this).html('<span class="iconify" data-icon="akar-icons:circle-chevron-up-fill"></span>');
      $(".rising_up").fadeOut();
      $(".rising_all").slideDown("slow");
      rising = false;
    } else {
      $(this).html('<span class="iconify" data-icon="akar-icons:circle-chevron-down-fill"></span>');
      $(".rising_up").fadeIn();
      $(".rising_all").slideUp("slow");
      rising = true;
    }
  });

  // =========== EVENT ===========
  // tab menu
  let button = $("#event_tab .tab_button>li");
  let content = $("#event_tab .tab_content>li");

  for (let i = 0; i < button.length; i++) {
    button.eq(i).click(function () {
      tab(i);
    });
  }

  function tab(i) {
    button.removeClass("selected");
    button.eq(i).addClass("selected");
    content.removeClass("show");
    content.eq(i).addClass("show");
  }

  // =========== MY PAGE ===========
  // accordion menu
  $("dd:not(:first)").css("display", "none");
  $("dt:first").addClass("selected");

  $("dl dt").click(function () {
    $("dl dt").find("+dd").stop().slideUp(200);
    $(this).find("+dd").stop().slideToggle(200);
    $("dt").removeClass("selected");
    $(this).addClass("selected");
  });

  // =========== INDEX ===========
  // index 클래스 안내 함수 실행
  newEdu();
  dealEdu();
  mdEdu();

  // quick menu: toggle 버튼 클릭시 메뉴 등장, toggle 버튼 텍스트 바뀜
  let toggle = true;
  $(".quick_toggle").click(function(){
    if(toggle){
      $(".quick_list li:first-child").stop(true,true).animate({"bottom":"62px"},500,"easeOutBack");
			$(".quick_list li:nth-child(2)").stop(true,true).animate({"bottom":"125px"},500,"easeOutBack");
			$(".quick_list li:last-child").stop(true,true).animate({"bottom":"188px"},500,"easeOutBack");
      $(this).text("×");
      toggle = false;
    } else {
      $(".quick_list li").stop(true,true).animate({"bottom":"0px"},200);
      $(this).text("?");
      toggle = true;
    }
  });
});

// =========== 1~5 category ===========
// 더보기 버튼 클릭시, 추가 컨텐츠 등장+더보기 버튼 숨기기 -> onload로 실행
function view_more() {
  $("section#class_section button").click(function () {
    $("section#class_section ul li[data-index='4'], section#class_section ul li[data-index='5'], section#class_section ul li[data-index='6'], section#class_section ul li[data-index='7']").slideDown("slow");
    $("section#class_section .more_btn").fadeOut();
  });
}

// 데이터바인딩(json파일에 있는 데이터를 ajax get 요청하기) -> onload로 실행
function getClass() {
  $.get("resources/class1.json").done((data) => {
    data.classes.forEach((card, i) => {
      appendProducts(card, i);
    });
  });
}
function getClass2() {
  $.get("resources/class2.json").done((data) => {
    data.classes.forEach((card, i) => {
      appendProducts(card, i);
    });
  });
}
function getClass3() {
  $.get("resources/class3.json").done((data) => {
    data.classes.forEach((card, i) => {
      appendProducts(card, i);
    });
  });
}
function getClass4() {
  $.get("resources/class4.json").done((data) => {
    data.classes.forEach((card, i) => {
      appendProducts(card, i);
    });
  });
}
function getClass5() {
  $.get("resources/class5.json").done((data) => {
    data.classes.forEach((card, i) => {
      appendProducts(card, i);
    });
  });
}

// 클래스 데이터바인딩 코드(category)
function appendProducts(classes, index) {
  let newItem = $(`
  <li data-index="${index}">
    <img src="resources/${classes.photo}" alt="class photo" class="class_img">
    <div class="text">
      <p class="class_name">${classes.name}</p>
      <p class="class_sub clamp">${classes.sub}</p>
      <hr class="class_line">
      <p class="class_price">
        <span class="sale">${classes.sale}%</span>${classes.price}<span class="month">${classes.month}</span>
      </p>
    </div>
  </li>
  `);

  $(".class_card").append(newItem);
}

// ============= index =============
function newEdu() {
  $.get("resources/class1.json").done((data) => {
    data.classes.forEach((card, i) => {
      appendEdu(card, i);
    });
  });
}
function dealEdu() {
  $.get("resources/class2.json").done((data) => {
    data.classes.forEach((card, i) => {
      appendEdu2(card, i);
    });
  });
}
function mdEdu() {
  $.get("resources/class3.json").done((data) => {
    data.classes.forEach((card, i) => {
      appendEdu3(card, i);
    });
  });
}

// 클래스 데이터바인딩 코드(index)
function appendEdu(classes, index) {
  let newItem2 = $(`
  <li class="swiper-slide" data-index="${index}">
    <img src="resources/${classes.photo}" alt="class photo" class="class_img">
    <div class="text">
      <p class="class_name">${classes.name}</p>
      <p class="class_sub clamp">${classes.sub}</p>
      <hr class="class_line">
      <p class="class_price">
        <span class="sale">${classes.sale}%</span>${classes.price}
      </p>
    </div>
  </li>
  `);

  $("#index_edu .new_edu .swiper-wrapper").append(newItem2);
}
function appendEdu2(classes, index) {
  let newItem2 = $(`
  <li class="swiper-slide" data-index="${index}">
    <img src="resources/${classes.photo}" alt="class photo" class="class_img">
    <div class="text">
      <p class="class_name">${classes.name}</p>
      <p class="class_sub clamp">${classes.sub}</p>
      <hr class="class_line">
      <p class="class_price">
        <span class="sale">${classes.sale}%</span>${classes.price}
      </p>
    </div>
  </li>
  `);

  $("#index_edu .deal_edu .swiper-wrapper").append(newItem2);
}
function appendEdu3(classes, index) {
  let newItem2 = $(`
  <li class="swiper-slide" data-index="${index}">
    <img src="resources/${classes.photo}" alt="class photo" class="class_img">
    <div class="text">
      <p class="class_name">${classes.name}</p>
      <p class="class_sub clamp">${classes.sub}</p>
      <hr class="class_line">
      <p class="class_price">
        <span class="sale">${classes.sale}%</span>${classes.price}
      </p>
    </div>
  </li>
  `);

  $("#index_edu .md_edu .swiper-wrapper").append(newItem2);
}