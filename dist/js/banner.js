define(["jquery"], function($){
  function move(){
    $(function () {
      var aBtns = $(".play").find("ol li");
      var oUl = $(".play").find("ul");
      var iNow = 0;
      var timer = null;

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

      function tab() {
        aBtns.removeClass("active").eq(iNow).addClass("active");

        if (iNow == aBtns.size()) {
          aBtns.eq(0).addClass("active");
        }

        oUl.animate(
          {
            top: iNow * -150,
          },
          500,
          function () {
            //判断是否是最后一张图片
            if (iNow === aBtns.size()) {
              iNow = 0;
              oUl.css("top", 0);
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
