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
    ///
    // var oAnnouncementtabcut=document.querySelectorAll('.announcementtabcut1')
    // var oAnnouncementdetails=document.querySelectorAll('.announcementdetails')
    // oAnnouncementtabcut.forEach(function(item,i,arr){
    //     item.onclick=function(){
    //         for(var k=0;k<arr.length;k++){
    //             arr[k].className='announcementtabcut1 fl'
    //         }
    //         item.className='announcementtabcut1 fl announcementtabcut2'
    //         oAnnouncementdetails[i].style.display='block'
    //         oAnnouncementdetails[1-i].style.display='none'
    //     }
    // })
    // var oSash1tab1tab=document.querySelectorAll('.sash1 .sash1tab1tab span')
    // var oSash1tab1=document.querySelector('.sash1 .sash1tab1')
    // oSash1tab1tab.forEach(function(item,i,arr){
    //     item.onmouseover=function(){
    //         for(var k=0;k<arr.length;k++){
    //             arr[k].className=''
    //         }
    //         item.className='sash1tab1tabspan'
    //         oSash1tab1.style.left=`-${i*430}px`
    //     }
    // })
    // var oSash1tab1tab2=document.querySelectorAll('.sash2 .sash1tab1tab span')
    // var oSash1tab12=document.querySelector('.sash2 .sash1tab1')
    // oSash1tab1tab2.forEach(function(item,i,arr){
    //     item.onmouseover=function(){
    //         for(var k=0;k<arr.length;k++){
    //             arr[k].className=''
    //         }
    //         item.className='sash1tab1tabspan'
    //         oSash1tab12.style.left=`-${i*430}px`
    //     }
    // })
    // var oSash1tab1tab3=document.querySelectorAll('.sash3 .sash1tab1tab span')
    // var oSash1tab13=document.querySelector('.sash3 .sash1tab1')
    // oSash1tab1tab3.forEach(function(item,i,arr){
    //     item.onmouseover=function(){
    //         for(var k=0;k<arr.length;k++){
    //             arr[k].className=''
    //         }
    //         item.className='sash1tab1tabspan'
    //         oSash1tab13.style.left=`-${i*430}px`
    //     }
    // })
    // var oChoicenessbut=document.querySelectorAll('.choicenessbut span')
    // var oChoicenesstab=document.querySelector('.choicenesstab')
    // oChoicenessbut.forEach(function(item,i,arr){
    //     item.onmouseover=function(){
    //         for(var k=0;k<arr.length;k++){
    //             arr[k].className=''
    //         }
    //         item.className='choicenessbuttab'
    //         oChoicenesstab.style.left=`-${i*1200}px`
    //     }
    // })
    ///////////////////////////////
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
    })
    var tiaozhuan=document.querySelector(".maingoods1")
    tiaozhuan.onclick=function(){
        window.location.href='../index.html'
    }
    var tiaozhuan=document.querySelector(".maingoods2")
    tiaozhuan.onclick=function(){
        window.location.href='../list.html'
    }
    