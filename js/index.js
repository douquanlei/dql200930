
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
console.log(oHeadrightregister)
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
var oAnnouncementtabcut=document.querySelectorAll('.announcementtabcut1')
var oAnnouncementdetails=document.querySelectorAll('.announcementdetails')
console.log(oAnnouncementdetails)
oAnnouncementtabcut.forEach(function(item,i,arr){
    item.onclick=function(){
        for(var k=0;k<arr.length;k++){
            arr[k].className='announcementtabcut1 fl'
        }
        item.className='announcementtabcut1 fl announcementtabcut2'
        oAnnouncementdetails[i].style.display='block'
        oAnnouncementdetails[1-i].style.display='none'
    }
})


//轮播图

