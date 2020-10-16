define(["jquery"], function($){
    var oAdvertisingHeadSwitch=document.querySelector('.AdvertisingHeadSwitch')
    var oAdvertisingHead=document.querySelector('.AdvertisingHead')
    oAdvertisingHead.onmouseover=function(){
        oAdvertisingHeadSwitch.style.background='url(../images/close_top.2f74c796.png) no-repeat -28px 0'
    }
    oAdvertisingHead.onmouseout=function(){
        oAdvertisingHeadSwitch.style.background='url(../images/close_top.2f74c796.png) no-repeat -0px 0'
    }
    oAdvertisingHeadSwitch.onclick=function(){
        oAdvertisingHead.style.display='none'
    }
    var oHeadrightregister=document.querySelector('.headright>a:nth-of-type(1)')
    var oHeadrightregisterB=document.querySelector('.headright>a:nth-of-type(1) b')
    var oHeadrightregisterD=document.querySelector('.headright>a:nth-of-type(1) div')
    oHeadrightregister.onmouseover=function(){
        oHeadrightregisterB.style.transform='rotate(180deg)'
        oHeadrightregister.style.background='#fff'
        oHeadrightregister.style.borderRight='1px solid #DEDEDE'
        oHeadrightregister.style.borderLeft='1px solid #DEDEDE'
        oHeadrightregisterD.style. height='90px'
    }
    
    oHeadrightregister.onmouseout=function(){
        oHeadrightregisterB.style.transform='rotate(-180deg)'
        oHeadrightregister.style. background='#F2F2F2'
        oHeadrightregister.style.borderRight='none'
        oHeadrightregister.style.borderLeft='none'
        oHeadrightregisterD.style. height='0px'
    }
   
    var oHeadloge = document.querySelector('.headloge1');
    window.onscroll = function(){
        var distance = document.body.scrollTop||document.documentElement.scrollTop;
        var gun=0;
        if(distance>=200){
            oHeadloge.style.position='fixed'
            oHeadloge.style.top = `${0}px`
        }else{
            oHeadloge.style.position='relative'
            oHeadloge.style.top = `${0}px`
            
        }
    }
    $(".emerging8").click(function(){
        var timer1 = setInterval(function(){
          document.documentElement.scrollTop -= 16
          if(document.documentElement.scrollTop==0){
              clearInterval(timer1)
          }
        },1)
    })
    var oEm1=document.querySelector(".emerging1")
    var oEm2=document.querySelector(".emerging2")
    var oEm3=document.querySelector(".emerging3")
    var oEm4=document.querySelector(".emerging4")
    var oEm5=document.querySelector(".emerging5")
    var oEm6=document.querySelector(".emerging6")
    var oEm7=document.querySelector(".emerging7")
    var emergingjishu=0
    $(".emerging1").click(function(){
        if(emergingjishu==0){
            oEm1.innerHTML='展开'
            oEm2.style.display='none'
            oEm3.style.display='none'
            oEm4.style.display='none'
            oEm5.style.display='none'
            oEm6.style.display='none'
            oEm7.style.display='none'
            emergingjishu=1
        }else{
            oEm1.innerHTML='收起'
            oEm2.style.display='block'
            oEm3.style.display='block'
            oEm4.style.display='block'
            oEm5.style.display='block'
            oEm6.style.display='block'
            oEm7.style.display='block'
            emergingjishu=0
        }
        
       
    })
    
    $(".emerging2").mouseover(function(){
        oEm2.innerHTML='微信客服<div></div>'
        oEm2.style.background='#24BC3D'
        oEm2.style.color='#fff'
        var oEm10=document.querySelector(".emerging2 div")
        oEm10.style.display='block'
    })
    
    $(".emerging2").mouseout(function(){
        oEm2.innerHTML=''
        oEm2.style.background='url(./images/righ_utils_icon_new.ba40447f.png) no-repeat 15px -190px '
        oEm2.style.color='#fff'
    })
    $(".emerging3").mouseover(function(){
        oEm3.innerHTML='<div></div>'
        var oEm11=document.querySelector(".emerging3 div")
        oEm11.style.display='block'
    })
    
    $(".emerging3").mouseout(function(){
        oEm3.innerHTML=''
    })
    $(".emerging4").mouseover(function(){
        oEm4.innerHTML='QQ咨询'
        oEm4.style.background='#D32F19'
        oEm4.style.color='#fff'
    })
    $(".emerging4").mouseout(function(){
        oEm4.innerHTML=''
        oEm4.style.background='url(./images/righ_utils_icon_new.ba40447f.png) no-repeat 15px 10px '
        oEm4.style.color='#fff'
    })
    $(".emerging5").mouseover(function(){
        oEm5.innerHTML='优惠'
        oEm5.style.background='#FF7300'
        oEm5.style.color='#fff'
    })
    $(".emerging5").mouseout(function(){
        oEm5.innerHTML=''
        oEm5.style.background='url(./images/righ_utils_icon_new.ba40447f.png) no-repeat 15px -90px '
        oEm5.style.color='#fff'
    })
    $(".emerging6").mouseover(function(){
        oEm6.innerHTML='有奖问卷'
        oEm6.style.background='#409EFF'
        oEm6.style.color='#fff'
    })
    $(".emerging6").mouseout(function(){
        oEm6.innerHTML=''
        oEm6.style.background='url(./images/righ_utils_icon_new.ba40447f.png) no-repeat 16px -140px '
        oEm6.style.color='#fff'
    })
    var oEm9=document.querySelector(".emerging7 div")
    $(".emerging7").mouseover(function(){
       
        oEm9.style.display='block'
    })
    $(".emerging7").mouseout(function(){
         oEm9.style.display='none'
    })
    var tiaozhuan=document.querySelector(".maingoods1")
    tiaozhuan.onclick=function(){
        window.location.href='./index.html'
    }
    var tiaozhuan=document.querySelector(".maingoods2")
    tiaozhuan.onclick=function(){
        window.location.href='./list.html'
    }
    var tiaozhuan=document.querySelector(".maingoods3")
    tiaozhuan.onclick=function(){
        window.location.href='./goodslist.html'
    }
    
    $('.cart-icon').click(function(){
    console.log(111)
    window.open('./settlement.html')
    })
    // // window.onload = function () {
    //     var oSmall = document.querySelector("#look-big-pic");
    //     var oBig = document.querySelector("#pic-zz");
    //     console.log(oSmall)
    //     console.log(oBig)
    //     Magnifier(oSmall,oBig,2)
    // //   };
    // //封装一个跨浏览器兼容的获取当前有效样式的函数
    // function getStyle(node, cssStyle) {
    //   return node.currentStyle
    //     ? node.currentStyle[cssStyle]
    //     : getComputedStyle(node)[cssStyle];
    // }
    // //放大镜
    // function Magnifier(oSmall,oBig,bei){
    //     var oBigImg =document.querySelector("#pic-zz img");
    //     console.log(oBigImg)
    //     oSmall.style.position='absolute'
    //     //选择放大的区域样式
    //     var oMark=document.createElement('div')
    //     oSmall.appendChild(oMark)
    //     oMark.style.position='absolute'
    //     oMark.style.display='none'
    //     oMark.style.width=parseInt(getStyle(oBig, 'width'))/bei+'px'
    //     oMark.style.height=parseInt(getStyle(oBig, 'height'))/bei+'px'
    //     oMark.style.backgroundColor='black'
    //     oMark.style.opacity='0.5'
    //     oMark.style.filter='alpha(opacity=50)'
    //     //放大区域样式
    //     oBig.style.position='absolute'
    //     oBig.style.overflow='hidden'
    //     oBig.style.display='none'
    //     //放大图片样式
    //     oBigImg.style.position='absolute'
    //     oBigImg.style.width=parseInt(getStyle(oSmall, 'width'))*bei+'px'
    //     oBigImg.style.height=parseInt(getStyle(oSmall, 'height'))*bei+'px'
    //     //给小图片添加移入移出
    //     oSmall.onmouseenter = function () {
    //     oMark.style.display = "block";
    //     oBig.style.display = "block";
    //     };

    //     oSmall.onmouseleave = function () {
    //     oMark.style.display = "none";
    //     oBig.style.display = "none";
    //     };
        
    //     //添加鼠标移动
    //     oSmall.onmousemove = function (ev) {
          
    //     var e = ev || window.event;
    //     var l = e.pageX - $(this).offset().left - parseInt(getStyle(oBig, 'width'))/bei/2;
        
    //     //限制出界
    //     l = Math.max(0, l);
    //     l = Math.min(parseInt(getStyle(oSmall, 'width'))-parseInt(getStyle(oBig, 'width'))/bei, l);
    //     var t = e.pageY - $(this).offset().top - parseInt(getStyle(oBig, 'height'))/bei/2;
    //     t = Math.max(0, t);
    //     t = Math.min(parseInt(getStyle(oSmall, 'height'))-parseInt(getStyle(oBig, 'height'))/bei, t);
    //     oMark.style.left = l + "px";
    //     oMark.style.top = t + "px";
    //     //所谓的放大，原理就是：反方向移动放大倍数距离
    //     oBigImg.style.left = -bei* l + "px";
    //     oBigImg.style.top = -bei* t + "px";
    //     };
    //   }
     









})
    