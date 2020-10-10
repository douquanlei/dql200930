define(["jquery"], function($){
  function move(){
    $(function () {
      var aBtns = $(".play").find("ol li");
      var oUl = $(".play").find("ul");
      var iNow = 0;
      var timer = null;
      const aBtnLeftAndRight = document.querySelectorAll(".leftRightTabs a");
      $(".play").mouseenter(function () {
        clearInterval(timer);
      });

      $(".play").mouseleave(function () {
        //轮播
        timer = setInterval(function () {
          iNow++;
          tab();
        }, 2000);
      });

      aBtns.click(function () {
        iNow = $(this).index();
        tab();
      });

      //轮播
      timer = setInterval(function () {
        iNow++;
        tab();
      }, 2000);
      aBtnLeftAndRight[0].onclick = function(){
        iNow--;
        tab();
        return false;
      }
      aBtnLeftAndRight[1].onclick = function(){
        iNow++;
        tab();
        return false;
      }
      function tab() {
        aBtns.removeClass("active").eq(iNow).addClass("active");
        
        if (iNow == aBtns.size()) {
          aBtns.eq(0).addClass("active");
        }

        oUl.animate(
          {
            left: iNow * -690,
          },
          500,
          function () {
            //判断是否是最后一张图片
            if (iNow === aBtns.size()) {
              iNow = 0;
              oUl.css("left", 0);
            }
          }
        );
      }
    });
  }

  return {
    move
  }
})
