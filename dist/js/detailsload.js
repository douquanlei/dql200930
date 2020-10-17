define(["jquery","jquery-cookie"], function($){
//事件委托
sc_num()
$(".product-top").on("click", "#addCartBtn-product", function(){
    //拿到了点击按钮所在商品的id
    var id = this.id;
    //适合用cookie进行本地缓存 <1>只能存储字符串  <2>cookie最大4kb
    //存储成json字符串，结构： [{id:id,num1},{id:id,num2}]
    //1、判断cookie是否存在
    var first = $.cookie("goods") === null ? true : false;
    if(first){
      var arr = [{id:id,num:1}];
      $.cookie("goods", JSON.stringify(arr), {
        expires: 7
      })
    }else{
      //2、判断商品之前是否添加过
      var cookieArr = JSON.parse($.cookie("goods"));
      var same = false; //假设没有添加过
      for(var i = 0; i < cookieArr.length; i++){
        if(cookieArr[i].id == id){
          same = true;
          break;
        }
      }
      if(same){
        cookieArr[i].num++;
      }else{
        cookieArr.push({id: id,num:1});
      }

      $.cookie("goods", JSON.stringify(cookieArr), {
        expires: 7
      })
    }
    sc_num();
  })

  //单独计算，已经加入到购物车中的商品数量
  function sc_num(){
    var cookieStr = $.cookie("goods");
    var sum = 0;
    if(cookieStr){
      var cookieArr = JSON.parse(cookieStr);
      for(var i = 0; i < cookieArr.length; i++){
        sum += cookieArr[i].num;
      }
    }

    $(".cart-icon2").html(sum);

  }

  function download(){
    var product_id = valueByName(location.search, "id");
    console.log(product_id)
    $.ajax({
        url: "../json/goodslist.json",
        success: function(result){
          // console.log(result);
          var bigdata = result.bigdata;
            
            var node=$(`<div class="product-top clr">
            <div class="thumbnail">
  
  
  
              <div class="position-r big-img-box">
                <div id="look-big-pic" title="点击查看大图" href="/product/jpg_116568_0.html" target="_blank">
                  <img src="./images/A629A9DFCA1B6028972647C7689E5E10.jpg" title="点击查看&quot;100KΩ(1003) ±1% &quot;原图">
                </div>
                <div id="pic-zz">
                  <img src="./images/A629A9DFCA1B6028972647C7689E5E10.jpg" title="点击查看&quot;100KΩ(1003) ±1% &quot;原图">
  
                </div>
              </div>
              <!-- 展示商品缩略图 -->
  
              <div class="thumbnail-01">
                <div class="thum-left">
                  <a href="javaScript:void(0);" title="上一组图片"></a>
                </div>
                <div class="thum-cont">
  
  
  
                  <img index="0"
                    src="https://alimg.szlcsc.com/upload/public/product/breviary/20180907/A629A9DFCA1B6028972647C7689E5E10.jpg"
                    class="thum-chc thum-cls">
  
  
  
                  <img index="1"
                    src="https://alimg.szlcsc.com/upload/public/product/breviary/20180907/42E71FE7F6128B18119594679503FBB8.jpg"
                    class="thum-chc  ">
  
  
  
                  <img index="2"
                    src="https://alimg.szlcsc.com/upload/public/product/breviary/20180907/374B661E494C04B5480329D7EDADA44E.jpg"
                    class="thum-chc  ">
  
                </div>
                <div class="thum-right">
                  <a href="javaScript:void(0);" title="下一组图片"></a>
                </div>
              </div>
  
              <div class="clear"></div>
              <div class="txt-info">温馨提醒：图片仅供参考，商品以实物为准</div>
              <div id="big-pic-wraper" style="display: none;">
                <img
                  src="https://alimg.szlcsc.com/upload/public/product/source/20180907/A629A9DFCA1B6028972647C7689E5E10.jpg"
                  style="margin-left: -117px; margin-top: -213px;">
              </div>
              <div class="icon-box mt15">
                <a href="javascript:void(0);" class="collect-btn" data-productid="116568">
                  <span class="icon-collect icon-w20"></span>收藏</a>
                <a href="javascript:void(0);" class="comparison-btn" data-productid="116568">
                  <span class="icon-compare icon-w20 icon"></span>对比</a>
              </div>
            </div>
            <div class="product-top-right" style="width: 860px;">
              <div class="product-info" style="width: 583.05px;">
                <div class="title">
                  <h1 class="product-name" title="100KΩ(1003) ±1% ">
                    ${bigdata[product_id-1].bigdataid}
                  </h1>
  
                  <div>
  
  
                  </div>
                </div>
                <div class="pro-info-content">
  
  
                  <div class="blue full-site" style="overflow: hidden;">
  
  
  
  
                    <span class="couponbg"><span>满1减30</span></span>
  
  
  
  
                  </div>
                  <div style="height: 5px;"></div>
  
  
                  <!-- 供应商甩货批次 -->
  
                  <!-- 供应商甩货批次结束 -->
                  <div class="quondam-product">
  
                    <div class="mt10" style="padding-bottom: 10px;background: #f8f8f8;">
                      <table class="price-list-table">
                        <tbody>
                          <tr style="background: #f8f8f8;">
                            <td colspan="3" style="padding: 10px 0;" align="center">
                              <span style="margin-left: -20%"></span>
                              含增值税
  
                            </td>
                          </tr>
  
  
  
  
  
                          <!--非最后一项-->
                          <tr class="sample-list-tr">
  
                            <td width="40%" align="right">
                              100+：
                            </td>
                            <td width="60%">
                              <p class="goldenrod">
  
                                ￥0.005797 / 个
  
  
                              </p>
                            </td>
  
                          </tr>
  
  
  
  
  
                          <!--非最后一项-->
                          <tr class="sample-list-tr">
  
                            <td width="40%" align="right">
                              1000+：
                            </td>
                            <td width="60%">
                              <p class="goldenrod">
  
                                ￥0.004289 / 个
  
  
                              </p>
                            </td>
  
                          </tr>
  
  
  
  
  
                          <!--非最后一项-->
                          <tr class="sample-list-tr">
  
                            <td width="40%" align="right">
                              3000+：
                            </td>
                            <td width="60%">
                              <p class="goldenrod">
  
                                ￥0.004012 / 个
  
  
                                <span class="c9a9a9a">（折合1圆盘20.06元）</span>
  
                              </p>
                            </td>
  
                          </tr>
  
  
  
  
  
                          <!--非最后一项-->
                          <tr class="sample-list-tr">
  
                            <td width="40%" align="right">
                              10000+：
                            </td>
                            <td width="60%">
                              <p class="goldenrod">
  
                                ￥0.003735 / 个
  
  
                                <span class="c9a9a9a">（折合1圆盘18.68元）</span>
  
                              </p>
                            </td>
  
                          </tr>
  
  
  
  
  
                          <!--非最后一项-->
                          <tr class="sample-list-tr">
  
                            <td width="40%" align="right">
                              50000+：
                            </td>
                            <td width="60%">
                              <p class="goldenrod">
  
                                ￥0.003612 / 个
  
  
                                <span class="c9a9a9a">（折合1圆盘18.06元）</span>
  
                              </p>
                            </td>
  
                          </tr>
  
  
  
  
  
                          <!--最后一项-->
  
  
                          <!--6,7,8区间特卖-->
                          <tr class="sample-list-tr">
  
                            <td width="40%" align="right">
                              100000+：
                            </td>
                            <td width="60%">
                              <p class="goldenrod">
  
                                ￥0.003551 / 个
  
  
                                <span class="c9a9a9a">（折合1圆盘17.76元）</span>
  
                              </p>
                            </td>
  
                          </tr>
  
  
  
  
                        </tbody>
                      </table>
                    </div>
  
  
                    <div class="items">
  
                      <span class="c9a9a9a">有货</span>
                      <i class="pan-stock adequate"></i>
  
  
                      <!-- hasStockNow为no的话显示我要订货，param-click：存放“我要买”相关参数（通过|分隔） -->
  
  
  
                      <span class="c9a9a9a">近期成交：<span style="color: #444;">100单+</span></span>
  
  
  
                    </div>
                    <div class="items">
                      <span class="c9a9a9a">购买数量：</span>
                      <input id="catInputNum-product" type="text" value="" class="w80 txt"> X
                      <span id="buyPrice-product" class="orange fw-b fs14">￥0.005797</span> =
                      <span id="buyTotalPrice-product" class="orange fw-b fs14">￥0.58</span>
                      <span class="orange">（总价）</span>
  
                    </div>
  
                    <div class="items">
                      <span class="c9a9a9a">按整包装：</span>
                      <input id="encapsulationNum-product" type="text" value="" class="w80 txt mr5">圆盘（1圆盘有<label
                        class="stock-number-color">5000</label>个）
                    </div>
  
  
  
  
                    <div class="btn-box">
                      <!-- hasStockNow为no的话显示我要订货，param-click：存放“我要买”相关参数（通过|分隔） -->
  
  
                      <button  style="outline: none;" class="btn bg-orange" type="button" id="addCartBtn-product"
                        title="把&quot;100KΩ(1003) ±1% &quot;添加到购物车中" param-product-id="116568"
                        data-agl-cvt="15">加入购物车</button>
  
  
  
  
                    </div>
                  </div>
                </div>
              </div>
              <!-- 最右边品牌 -->
              <div class="product-brand" style="width: 237.445px;">
                <div class="product-brand-con">
                  <div class="img-box">
  
                    <img alt="FH(风华)" src="https://alimg.szlcsc.com/upload/public/brand/logo/20151027/1445911983490.png">
  
                  </div>
                  <div class="item">
                    <span class="c9a9a9a inline-block layout-left">品　　牌：</span>
                    <span class="fw-b inline-block brand-buried">
                      <a href="https://list.szlcsc.com/brand/63.html" title="FH(风华)" target="_blank">
                      ${bigdata[product_id-1].Brand}
                      </a>
                    </span>
                  </div>
                  <div class="item">
                    <span class="c9a9a9a inline-block layout-left">厂家型号：</span>
                    <span class="inline-block" title="RS-03K1003FT">RS-03K1003FT</span>
                  </div>
                  <div class="item">
                    <span class="c9a9a9a">商品编号：</span>
                    <span>${bigdata[product_id-1].Numbering}</span>
                  </div>
                  <div class="item">
                    <span class="c9a9a9a layout-left inline-block">封装规格：</span>
                    <span class="layout-right inline-block" title="0603">${bigdata[product_id-1].bigdataspecifications}</span>
                  </div>
                  <div class="item">
                    <span class="c9a9a9a">数据手册：</span>
                    <!-- param-click：存放DES加密后的商品id，用于下载PDF等相关资料 -->
                    <a style="cursor: pointer;" class="color444" id="downloadFile" productid="116568"
                      param-click="FAAB465F555A855E296C67311B688FC3">
                      <i class="down-icon"></i>
                      <span>下载文件</span>
                    </a>
                  </div>
  
                  <div class="item">
                    <span class="c9a9a9a">商品毛重：</span>
                    <span>0.03克(g)</span>
                  </div>
  
                  <div class="item">
                    <span class="c9a9a9a">包装方式：</span>
                    <span>编带</span>
                  </div>
  
  
  
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>`)
            node.appendTo($(".main-content-wrap"))
           function getStyle(node, cssStyle) {
        return node.currentStyle
          ? node.currentStyle[cssStyle]
          : getComputedStyle(node)[cssStyle];
      }

      //放大镜
        function Magnifier(oSmall,oBig,bei){
          var oBigImg =document.querySelector("#pic-zz img");
          oSmall.style.position='absolute'
          //选择放大的区域样式
          var oMark=document.createElement('div')
          oSmall.appendChild(oMark)
          oMark.style.position='absolute'
          oMark.style.display='none'
          oMark.style.width=parseInt(getStyle(oBig, 'width'))/bei+'px'
          oMark.style.height=parseInt(getStyle(oBig, 'height'))/bei+'px'
          oMark.style.backgroundColor='black'
          oMark.style.opacity='0.5'
          oMark.style.filter='alpha(opacity=50)'
          //放大区域样式
          oBig.style.position='absolute'
          oBig.style.overflow='hidden'
          oBig.style.display='none'
          //放大图片样式
          oBigImg.style.position='absolute'
          oBigImg.style.width=parseInt(getStyle(oSmall, 'width'))*bei+'px'
          oBigImg.style.height=parseInt(getStyle(oSmall, 'height'))*bei+'px'
          //给小图片添加移入移出
          oSmall.onmouseenter = function () {
          oMark.style.display = "block";
          oBig.style.display = "block";
          };
  
          oSmall.onmouseleave = function () {
          oMark.style.display = "none";
          oBig.style.display = "none";
          };
          
          //添加鼠标移动
          oSmall.onmousemove = function (ev) {
            
          var e = ev || window.event;
          var l = e.pageX - $(this).offset().left - parseInt(getStyle(oBig, 'width'))/bei/2;
          
          //限制出界
          l = Math.max(0, l);
          l = Math.min(parseInt(getStyle(oSmall, 'width'))-parseInt(getStyle(oBig, 'width'))/bei, l);
          var t = e.pageY - $(this).offset().top - parseInt(getStyle(oBig, 'height'))/bei/2;
          t = Math.max(0, t);
          t = Math.min(parseInt(getStyle(oSmall, 'height'))-parseInt(getStyle(oBig, 'height'))/bei, t);
          oMark.style.left = l + "px";
          oMark.style.top = t + "px";
          //所谓的放大，原理就是：反方向移动放大倍数距离
          oBigImg.style.left = -bei* l + "px";
          oBigImg.style.top = -bei* t + "px";
          };
        }
        var oSmall = document.querySelector("#look-big-pic");
        var oBig = document.querySelector("#pic-zz");
        Magnifier(oSmall,oBig,2)
        var thumcontimg=document.querySelectorAll('.thum-cont img')
        //var oAnnouncementdetails=document.querySelectorAll('.announcementdetails')
        thumcontimg.forEach(function(item,i,arr){
          item.onclick=function(){
              for(var k=0;k<arr.length;k++){
                  arr[k].className='thum-chc'
              }
              item.className='thum-cls'
              $('#look-big-pic img').attr("src",`${item.src}`)
              $('#pic-zz img').attr("src",`${item.src}`)
          }
      })
      
      //加购物车
      $(".main-content-wrap").on("click", ".bg-orange", function(){
        //拿到了点击按钮所在商品的id
        
        var id = this.id;
        $(this).css('outline','none')
        //适合用cookie进行本地缓存 <1>只能存储字符串  <2>cookie最大4kb
        //存储成json字符串，结构： [{id:id,num1},{id:id,num2}]
        //1、判断cookie是否存在
        var first = $.cookie("goods") === null ? true : false;
        if(first){
          var arr = [{id:id,num:1}];
          $.cookie("goods", JSON.stringify(arr), {
            expires: 7
          })
        }else{
          //2、判断商品之前是否添加过
          var cookieArr = JSON.parse($.cookie("goods"));
          var same = false; //假设没有添加过
          for(var i = 0; i < cookieArr.length; i++){
            if(cookieArr[i].id == id){
              same = true;
              break;
            }
          }
          if(same){
            cookieArr[i].num++;
          }else{
            cookieArr.push({id: id,num:1});
          }

          $.cookie("goods", JSON.stringify(cookieArr), {
            expires: 7
          })
        }
        sc_num();
      })

      //单独计算，已经加入到购物车中的商品数量
      function sc_num(){
        var cookieStr = $.cookie("goods");
        var sum = 0;
        if(cookieStr){
          var cookieArr = JSON.parse(cookieStr);
          for(var i = 0; i < cookieArr.length; i++){
            sum += cookieArr[i].num;
          }
        }

        $(".cart-icon2").html(sum);

      }
      },
        error: function(msg){
          console.log(msg);
        }
        
  
      })
}

//name1=value1&name2=value2&name3=value3 
function valueByName(search, name){
    var start = search.indexOf(name + "=");
    if(start == -1){
        return null;
    }else{
        var end = search.indexOf("&", start);
        if(end == -1){
            end = search.length;
        }
        //提取出想要键值对 name=value
        var str = search.substring(start, end);
        var arr = str.split("=");
        return arr[1];
    }
}

return {
    download: download
}

})