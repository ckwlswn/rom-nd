$(function(){
     // 비주얼 슬라이드
     $('#visual .slider').bxSlider({
        // 옵션
        auto: true, // 자동재생(true, false)
        mode: "fade", // 효과종류(fade, vertical, horizontal)
    })

    // 탭버튼 이벤트
    $('#list .category a').on('click', function(){
        // 카테고리명(hash값) 확인
        var cat_name = $(this).attr('href');
        console.log(cat_name)
        
        // 해당 아이디의 목록을 표시
        if(cat_name !== '#face-list'){
          // 일반 카테고리
          $('#face-list > ul').hide(200);
          $(cat_name).show(200);
        } else {
          // all 버튼을 누른 경우
          $('#face-list > ul').show(200);
        }
  
        return false; // 하이퍼링크 기본이벤트 금지
  
      })

      // 탭버튼 색상
      $('#list .category a').click(function(){
        $('#list .category a').removeClass("selected");
        $(this).addClass("selected");
      });
});