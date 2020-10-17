define(["jquery","jquery-cookie"], function($){
    //通过ajax下载数据
    sc_num()
    var jishu=0;
    $.ajax({
      url: "./json/goodslist.json",
      success: function(result){
        // console.log(result);
        var bigdata = result.bigdata;
        //JQ创建节点，html部分如何写，这里也如何写
        for(var i = jishu*10; i < jishu*10+10; i++){
           
          var node=$(`<table class="inside inside-page tab-data " id="product-tbody-line-21904" data-batchstocklimit="4000" data-encapstandard="0603" data-hassamplerule="no" data-productcode="C21190" data-productminencapsulationnumber="5000" data-productminencapsulationunit="圆盘" data-productmodel="0603WAF1001T5E" data-productname="1KΩ ±1% " data-samplestocknumber="0" data-validstocknumber="6041" data-productstockstatus="yes" data-convesionratio="100" data-productunit="个" width="100%" cellspacing="0" cellpadding="0" border="0">
          <tbody>
          <tr class="no-tj-tr add-cart-tr">
            <td class="one">
              <a class="one-to-item-link" href="./details.html?product_id=${bigdata[i].bigdataid}"" target="_blank" onclick="toBuriedPoint(21904, this)">
                
                  
                    <img class="is-hot-img" src="https://static.szlcsc.com/ecp/public/img/bk_icon.19e50291.png">
                  
                
                <img src=${bigdata[i].bigdataimg} productid="21904" alt="1KΩ ±1% " xpath="https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F0B964A0ECF712B10768A9921FD33F69.jpg" data-urls="https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F0B964A0ECF712B10768A9921FD33F69.jpg<$>https://alimg.szlcsc.com/upload/public/product/breviary/20190224/2ABF8EE00E07644077B86F7E85BE2D6A.jpg<$>https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F2C3F2BB674A9945D659AF136BBA9D9E.jpg<$>https://alimg.szlcsc.com/upload/public/brand/product/certificate/20200610/DFB2839373B1608AD080ECE1440F0A0D.png" showflag="yes" onerror="javascript:this.src='https://static.szlcsc.com/ecp/public/static/images/default_pic.gif'">
              </a>
              <span>
                <input type="button" class="db" data-add-compare="21904" title="对比后该商品会添加到对比栏中" value="对比">
                <input type="button" class="sc common-sc" value="收藏" title="收藏后该商品会保存到[会员中心]下的[我的收藏]中" data-productid="21904">
              </span>
            </td>
            <td class="two">
              <div class="two-tit">
                <a title="1KΩ ±1% " target="_blank" class="blue ellipsis" style="font-size: 20px; color: #007BFF; display: block; max-width: 200px; float: left;" href="./details.html?product_id=${bigdata[i].bigdataid}"" onclick="toBuriedPoint(21904, this)">
                ${bigdata[i].bigdataname}
                </a>
                <a title="贴片电阻" target="_blank" class="catalog ellipsis" href="https://list.szlcsc.com/catalog/439.html">
                ${bigdata[i].Classification}
                </a>
              </div>
              <div class="two-01">
                <ul class="l02-zb">
                  <li class="li-ellipsis">
                    <span class="c9a9a9a">规格：</span>
                    <span title="06033">${bigdata[i].bigdataspecifications}</span>
                  </li>
                  <li class="band li-ellipsis">
                    <span class="c9a9a9a">品牌：</span>
                    <a class="brand-name" title="点击查看UNI-ROYAL(厚声)的品牌信息" href="https://list.szlcsc.com/brand/99.html" target="_blank">
                    ${bigdata[i].Brand}
                    </a>
                  </li>
                  <li class="li-ellipsis">
                    <span class="c9a9a9a">型号：</span>
                    <span title="0603WAF1001T5E">${bigdata[i].Model}</span>
                  </li>
                  <li>
                    
                    
                      <div class="ellipsis ms" title="功率：0.1W 阻值：1kΩ 温度系数：±100ppm/℃ 精度：±1% ">
                        <span class="c9a9a9a">描述：</span>
                        ${bigdata[i].describe}
                      </div>
                    
                  </li>
                </ul>
                <ul class="l02-yb">
                  <li class="li-ellipsis">
                    <span class="c9a9a9a">编号：</span>${bigdata[i].bigdataid}
                  </li>
                  
                  <li class="btn-wrapper li-ellipsis">
                    
                      <a class="sjsc" productid="21904" param-click="3CE5AED75327E0AE"><i></i>数据手册</a>
                    
                    
                    
                  </li>
                  
                  <li class="tag-wrapper">
                    
                      
                        <span class="couponbgs" id="${bigdata[i].bigdataid}">
                          <span class="lq">领券</span>
                          <div class="line"></div>
                          <span>1-30</span>
                          <div class="ljsy">立即领取</div>
                        </span>
                      
                    
                    
                  </li>
                </ul>
              </div>
            </td>
            <td class="three">
              
                <ul class="three-nr">
                  <li class="three-nr-01">
                    
                      <span>价格（含增值税）</span>
                    
                    
                  </li>
                  
                  
                  
                    
                    
                    
                    <!--非最后一项-->
                    
                      <li>
                        
                          <div class="price-warp ff7900">
                            <p class="ppbbz-p no-special " minordernum="100" orderprice="0.004835">
                              100+：
                            </p>
                            <span class="ccd ccd-ppbbz" data-endpurchasednumber="9" data-productprice="0.004835" data-productprice-discount="" data-startpurchasednumber="1">
                              
                                <span>￥${bigdata[i].totalsum/100}</span>
                              
                            </span>
                          </div>
                        
                      </li>
                      <!--最后一项-->
                    
                  
                    
                    
                    
                    <!--非最后一项-->
                    
                      <li>
                        
                          <div class="price-warp ">
                            <p class="ppbbz-p no-special " minordernum="1000" orderprice="0.004045">
                              1000+：
                            </p>
                            <span class="ccd ccd-ppbbz" data-endpurchasednumber="29" data-productprice="0.004045" data-productprice-discount="" data-startpurchasednumber="10">
                              
                                <span>￥${bigdata[i].totalsum/10}</span>
                              
                            </span>
                          </div>
                        
                      </li>
                      <!--最后一项-->
                    
                  
                    
                    
                    
                    <!--非最后一项-->
                    
                      <li>
                        
                          <div class="price-warp ">
                            <p class="ppbbz-p no-special " minordernum="3000" orderprice="0.003824">
                              3000+：
                            </p>
                            <span class="ccd ccd-ppbbz" data-endpurchasednumber="99" data-productprice="0.003824" data-productprice-discount="" data-startpurchasednumber="30">
                              
                                <span>￥${0.003824}</span>
                              
                            </span>
                          </div>
                        
                      </li>
                      <!--最后一项-->
                    
                  
                    
                    
                    
                    <!--非最后一项-->
                    
                      <li>
                        
                          <div class="price-warp ">
                            <p class="ppbbz-p no-special " minordernum="10000" orderprice="0.003634">
                              10000+：
                            </p>
                            <span class="ccd ccd-ppbbz" data-endpurchasednumber="499" data-productprice="0.003634" data-productprice-discount="" data-startpurchasednumber="100">
                              
                                <span>￥${bigdata[i].totalsum}</span>
                              
                            </span>
                          </div>
                        
                      </li>
                      <!--最后一项-->
                    
                  
                    
                    
                    
                    <!--非最后一项-->
                    
                      <li>
                        
                          <div class="price-warp ">
                            <p class="ppbbz-p no-special " minordernum="50000" orderprice="0.003445">
                              50000+：
                            </p>
                            <span class="ccd ccd-ppbbz" data-endpurchasednumber="999" data-productprice="0.003445" data-productprice-discount="" data-startpurchasednumber="500">
                              
                                <span>￥${bigdata[i].bigdataspecifications*5}</span>
                              
                            </span>
                          </div>
                        
                      </li>
                      <!--最后一项-->
                    
                  
                    
                    
                    
                    <!--非最后一项-->
                    
                      
                      
                      
                      <!--6,7,8区间特卖-->
                      
                        <li>
                          
                            <div class="price-warp ">
                              <p class="ppbbz-p no-special " minordernum="100000" orderprice="0.003413">
                                100000+：
                              </p>
                              <span class="ccd ccd-ppbbz " data-endpurchasednumber="1999" data-productprice="0.003413" data-productprice-discount="" data-startpurchasednumber="1000">
                                ￥${bigdata[i].bigdataspecifications*10}
                              </span>
                            </div>
                          
                        </li>
                        
                        <!--非6,7,8区间特卖-->
                      
                    
                  
                  <input type="hidden" id="isHasOneDiscount" value="no">
                </ul>
              
            </td>
            <td class="finput">
              <ul>
                <li class="price-input">
                  <input type="text" class="cartnumbers " maxlength="9" unit-type="single" unitnum="5000" value="100">
                  <div class="unit ">
                    <span class="cur-unit ">个</span>
                    
                      <i class="xl"></i>
                      <div class="unit-contain" style="display: none;">
                        <div class="unit-type">
                          <span class="unit-one">个</span>
                          <span class="unit-two">圆盘</span>
                        </div>
                        <i class="sl"></i>
                      </div>
                    
                  </div>
                </li>
                
                  
                    
                  
                  
                    
                  
                  <li class="totlePrice-li">总额：<span class="goldenrod totlePrice">￥${bigdata[i].totalsum}</span></li>
                  
                    <li class="stocks">
                      <span>有货</span>
                    </li>
                  
                  
                    <li>5000个/圆盘</li>
                  
                  
                    <li class="stocks">
                      
                      
                        <span>近期成交：100单+</span>
                      
                    </li>
                  
                
              </ul>
            </td>
            <td class="ffour">
              <ul class="pan">
                <li class="pan-list">
                  
                    
                      <button type="button" class="addCartBtn" productcode="C21190" id="${bigdata[i].bigdataid}">加入购物车</button>
                    
                  
                </li>
                <li class="li-flag add-cart-tip" style="display: none;">
                  <i class="add-cart"></i><span class="c999 cursor-default lh">已加购</span>
                </li>
                
                
                  
                
                
              </ul>
            </td>
          </tr>
          
          </tbody>
        </table>`)
          node.appendTo($(".maingoods"))
         
          
        }
      },
      error: function(msg){
        console.log(msg);
      }

      
    })
    $(".maingoods43right").click(function(){
        console.log(111)
        
        jishu++
        if(jishu>2){jishu=2}
        else{
            if(jishu==0){
                $(".bian1").addClass('bian')
                $(".bian2").removeClass('bian')
                $(".bian3").removeClass('bian')
            }else if(jishu==1){
                $(".bian2").addClass('bian')
                $(".bian1").removeClass('bian')
                $(".bian3").removeClass('bian')
            }else{
                $(".bian3").addClass('bian')
                $(".bian1").removeClass('bian')
                $(".bian2").removeClass('bian')
            }
            var node1=$(`<b>${jishu+1}/3</b>`)
            $(".maingoods44 b").remove()
            node1.appendTo($(".maingoods44"))
            $("table").remove()
            console.log(jishu)
            $.ajax({
            url: "./json/goodslist.json",
            success: function(result){
              // console.log(result);
              var bigdata = result.bigdata;
              //JQ创建节点，html部分如何写，这里也如何写
              for(var i = jishu*10; i < jishu*10+10; i++){
                 
                var node=$(`<table class="inside inside-page tab-data " id="product-tbody-line-21904" data-batchstocklimit="4000" data-encapstandard="0603" data-hassamplerule="no" data-productcode="C21190" data-productminencapsulationnumber="5000" data-productminencapsulationunit="圆盘" data-productmodel="0603WAF1001T5E" data-productname="1KΩ ±1% " data-samplestocknumber="0" data-validstocknumber="6041" data-productstockstatus="yes" data-convesionratio="100" data-productunit="个" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                <tr class="no-tj-tr add-cart-tr">
                  <td class="one">
                    <a class="one-to-item-link" href="./details.html?product_id=${bigdata[i].bigdataid}"" target="_blank" onclick="toBuriedPoint(21904, this)">
                      
                        
                          <img class="is-hot-img" src="https://static.szlcsc.com/ecp/public/img/bk_icon.19e50291.png">
                        
                      
                      <img src=${bigdata[i].bigdataimg} productid="21904" alt="1KΩ ±1% " xpath="https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F0B964A0ECF712B10768A9921FD33F69.jpg" data-urls="https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F0B964A0ECF712B10768A9921FD33F69.jpg<$>https://alimg.szlcsc.com/upload/public/product/breviary/20190224/2ABF8EE00E07644077B86F7E85BE2D6A.jpg<$>https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F2C3F2BB674A9945D659AF136BBA9D9E.jpg<$>https://alimg.szlcsc.com/upload/public/brand/product/certificate/20200610/DFB2839373B1608AD080ECE1440F0A0D.png" showflag="yes" onerror="javascript:this.src='https://static.szlcsc.com/ecp/public/static/images/default_pic.gif'">
                    </a>
                    <span>
                      <input type="button" class="db" data-add-compare="21904" title="对比后该商品会添加到对比栏中" value="对比">
                      <input type="button" class="sc common-sc" value="收藏" title="收藏后该商品会保存到[会员中心]下的[我的收藏]中" data-productid="21904">
                    </span>
                  </td>
                  <td class="two">
                    <div class="two-tit">
                      <a title="1KΩ ±1% " target="_blank" class="blue ellipsis" style="font-size: 20px; color: #007BFF; display: block; max-width: 200px; float: left;" href="./details.html?product_id=${bigdata[i].bigdataid}"" onclick="toBuriedPoint(21904, this)">
                      ${bigdata[i].bigdataname}
                      </a>
                      <a title="贴片电阻" target="_blank" class="catalog ellipsis" href="https://list.szlcsc.com/catalog/439.html">
                      ${bigdata[i].Classification}
                      </a>
                    </div>
                    <div class="two-01">
                      <ul class="l02-zb">
                        <li class="li-ellipsis">
                          <span class="c9a9a9a">规格：</span>
                          <span title="0603">${bigdata[i].bigdataspecifications}</span>
                        </li>
                        <li class="band li-ellipsis">
                          <span class="c9a9a9a">品牌：</span>
                          <a class="brand-name" title="点击查看UNI-ROYAL(厚声)的品牌信息" href="https://list.szlcsc.com/brand/99.html" target="_blank">
                          ${bigdata[i].Brand}
                          </a>
                        </li>
                        <li class="li-ellipsis">
                          <span class="c9a9a9a">型号：</span>
                          <span title="0603WAF1001T5E">${bigdata[i].Model}</span>
                        </li>
                        <li>
                          
                          
                            <div class="ellipsis ms" title="功率：0.1W 阻值：1kΩ 温度系数：±100ppm/℃ 精度：±1% ">
                              <span class="c9a9a9a">描述：</span>
                              ${bigdata[i].describe}
                            </div>
                          
                        </li>
                      </ul>
                      <ul class="l02-yb">
                        <li class="li-ellipsis">
                          <span class="c9a9a9a">编号：</span>${bigdata[i].bigdataid}
                        </li>
                        
                        <li class="btn-wrapper li-ellipsis">
                          
                            <a class="sjsc" productid="21904" param-click="3CE5AED75327E0AE"><i></i>数据手册</a>
                          
                          
                          
                        </li>
                        
                        <li class="tag-wrapper">
                          
                            
                              <span class="couponbgs" id="${bigdata[i].bigdataid}">
                                <span class="lq">领券</span>
                                <div class="line"></div>
                                <span>1-30</span>
                                <div class="ljsy">立即领取</div>
                              </span>
                            
                          
                          
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td class="three">
                    
                      <ul class="three-nr">
                        <li class="three-nr-01">
                          
                            <span>价格（含增值税）</span>
                          
                          
                        </li>
                        
                        
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ff7900">
                                  <p class="ppbbz-p no-special " minordernum="100" orderprice="0.004835">
                                    100+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="9" data-productprice="0.004835" data-productprice-discount="" data-startpurchasednumber="1">
                                    
                                      <span>￥${bigdata[i].totalsum/100}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="1000" orderprice="0.004045">
                                    1000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="29" data-productprice="0.004045" data-productprice-discount="" data-startpurchasednumber="10">
                                    
                                      <span>￥${bigdata[i].totalsum/10}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="3000" orderprice="0.003824">
                                    3000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="99" data-productprice="0.003824" data-productprice-discount="" data-startpurchasednumber="30">
                                    
                                      <span>￥${0.003824}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="10000" orderprice="0.003634">
                                    10000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="499" data-productprice="0.003634" data-productprice-discount="" data-startpurchasednumber="100">
                                    
                                      <span>￥${bigdata[i].totalsum}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="50000" orderprice="0.003445">
                                    50000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="999" data-productprice="0.003445" data-productprice-discount="" data-startpurchasednumber="500">
                                    
                                      <span>￥${bigdata[i].bigdataspecifications*5}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            
                            
                            
                            <!--6,7,8区间特卖-->
                            
                              <li>
                                
                                  <div class="price-warp ">
                                    <p class="ppbbz-p no-special " minordernum="100000" orderprice="0.003413">
                                      100000+：
                                    </p>
                                    <span class="ccd ccd-ppbbz " data-endpurchasednumber="1999" data-productprice="0.003413" data-productprice-discount="" data-startpurchasednumber="1000">
                                      ￥${bigdata[i].bigdataspecifications*10}
                                    </span>
                                  </div>
                                
                              </li>
                              
                              <!--非6,7,8区间特卖-->
                            
                          
                        
                        <input type="hidden" id="isHasOneDiscount" value="no">
                      </ul>
                    
                  </td>
                  <td class="finput">
                    <ul>
                      <li class="price-input">
                        <input type="text" class="cartnumbers " maxlength="9" unit-type="single" unitnum="5000" value="100">
                        <div class="unit ">
                          <span class="cur-unit ">个</span>
                          
                            <i class="xl"></i>
                            <div class="unit-contain" style="display: none;">
                              <div class="unit-type">
                                <span class="unit-one">个</span>
                                <span class="unit-two">圆盘</span>
                              </div>
                              <i class="sl"></i>
                            </div>
                          
                        </div>
                      </li>
                      
                        
                          
                        
                        
                          
                        
                        <li class="totlePrice-li">总额：<span class="goldenrod totlePrice">￥${bigdata[i].totalsum}</span></li>
                        
                          <li class="stocks">
                            <span>有货</span>
                          </li>
                        
                        
                          <li>5000个/圆盘</li>
                        
                        
                          <li class="stocks">
                            
                            
                              <span>近期成交：100单+</span>
                            
                          </li>
                        
                      
                    </ul>
                  </td>
                  <td class="ffour">
                    <ul class="pan">
                      <li class="pan-list">
                        
                          
                            <button type="button" class="addCartBtn" productcode="C21190" id="${bigdata[i].bigdataid}">加入购物车</button>
                          
                        
                      </li>
                      <li class="li-flag add-cart-tip" style="display: none;">
                        <i class="add-cart"></i><span class="c999 cursor-default lh">已加购</span>
                      </li>
                      
                      
                        
                      
                      
                    </ul>
                  </td>
                </tr>
                
                </tbody>
              </table>`)
                node.appendTo($(".maingoods"))
               
                
              }
            },
            error: function(msg){
              console.log(msg);
            }
          })

        }
        
    })
    $(".maingoods43left").click(function(){
       
        jishu--
        if(jishu<0){jishu=0}
        else{ 
            if(jishu==0){
                $(".bian1").addClass('bian')
                $(".bian2").removeClass('bian')
                $(".bian3").removeClass('bian')
            }else if(jishu==1){
                $(".bian2").addClass('bian')
                $(".bian1").removeClass('bian')
                $(".bian3").removeClass('bian')
            }else{
                $(".bian3").addClass('bian')
                $(".bian1").removeClass('bian')
                $(".bian2").removeClass('bian')
            }
            var node1=$(`<b>${jishu+1}/3</b>`)
            $(".maingoods44 b").remove()
            node1.appendTo($(".maingoods44"))
            
            $("table").remove()
            console.log(jishu)
            $.ajax({
            url: "./json/goodslist.json",
            success: function(result){
              // console.log(result);
              var bigdata = result.bigdata;
              //JQ创建节点，html部分如何写，这里也如何写
              for(var i = jishu*10; i < jishu*10+10; i++){
                 
                var node=$(`<table class="inside inside-page tab-data " id="product-tbody-line-21904" data-batchstocklimit="4000" data-encapstandard="0603" data-hassamplerule="no" data-productcode="C21190" data-productminencapsulationnumber="5000" data-productminencapsulationunit="圆盘" data-productmodel="0603WAF1001T5E" data-productname="1KΩ ±1% " data-samplestocknumber="0" data-validstocknumber="6041" data-productstockstatus="yes" data-convesionratio="100" data-productunit="个" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                <tr class="no-tj-tr add-cart-tr">
                  <td class="one">
                    <a class="one-to-item-link" href="./details.html?product_id=${bigdata[i].bigdataid}"" target="_blank" onclick="toBuriedPoint(21904, this)">
                      
                        
                          <img class="is-hot-img" src="https://static.szlcsc.com/ecp/public/img/bk_icon.19e50291.png">
                        
                      
                      <img src=${bigdata[i].bigdataimg} productid="21904" alt="1KΩ ±1% " xpath="https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F0B964A0ECF712B10768A9921FD33F69.jpg" data-urls="https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F0B964A0ECF712B10768A9921FD33F69.jpg<$>https://alimg.szlcsc.com/upload/public/product/breviary/20190224/2ABF8EE00E07644077B86F7E85BE2D6A.jpg<$>https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F2C3F2BB674A9945D659AF136BBA9D9E.jpg<$>https://alimg.szlcsc.com/upload/public/brand/product/certificate/20200610/DFB2839373B1608AD080ECE1440F0A0D.png" showflag="yes" onerror="javascript:this.src='https://static.szlcsc.com/ecp/public/static/images/default_pic.gif'">
                    </a>
                    <span>
                      <input type="button" class="db" data-add-compare="21904" title="对比后该商品会添加到对比栏中" value="对比">
                      <input type="button" class="sc common-sc" value="收藏" title="收藏后该商品会保存到[会员中心]下的[我的收藏]中" data-productid="21904">
                    </span>
                  </td>
                  <td class="two">
                    <div class="two-tit">
                      <a title="1KΩ ±1% " target="_blank" class="blue ellipsis" style="font-size: 20px; color: #007BFF; display: block; max-width: 200px; float: left;" href="./details.html?product_id=${bigdata[i].bigdataid}"" onclick="toBuriedPoint(21904, this)">
                      ${bigdata[i].bigdataname}
                      </a>
                      <a title="贴片电阻" target="_blank" class="catalog ellipsis" href="https://list.szlcsc.com/catalog/439.html">
                      ${bigdata[i].Classification}
                      </a>
                    </div>
                    <div class="two-01">
                      <ul class="l02-zb">
                        <li class="li-ellipsis">
                          <span class="c9a9a9a">规格：</span>
                          <span title="0603">${bigdata[i].bigdataspecifications}</span>
                        </li>
                        <li class="band li-ellipsis">
                          <span class="c9a9a9a">品牌：</span>
                          <a class="brand-name" title="点击查看UNI-ROYAL(厚声)的品牌信息" href="https://list.szlcsc.com/brand/99.html" target="_blank">
                          ${bigdata[i].Brand}
                          </a>
                        </li>
                        <li class="li-ellipsis">
                          <span class="c9a9a9a">型号：</span>
                          <span title="0603WAF1001T5E">${bigdata[i].Model}</span>
                        </li>
                        <li>
                          
                          
                            <div class="ellipsis ms" title="功率：0.1W 阻值：1kΩ 温度系数：±100ppm/℃ 精度：±1% ">
                              <span class="c9a9a9a">描述：</span>
                              ${bigdata[i].describe}
                            </div>
                          
                        </li>
                      </ul>
                      <ul class="l02-yb">
                        <li class="li-ellipsis">
                          <span class="c9a9a9a">编号：</span>${bigdata[i].bigdataid}
                        </li>
                        
                        <li class="btn-wrapper li-ellipsis">
                          
                            <a class="sjsc" productid="21904" param-click="3CE5AED75327E0AE"><i></i>数据手册</a>
                          
                          
                          
                        </li>
                        
                        <li class="tag-wrapper">
                          
                            
                              <span class="couponbgs" id="${bigdata[i].bigdataid}">
                                <span class="lq">领券</span>
                                <div class="line"></div>
                                <span>1-30</span>
                                <div class="ljsy">立即领取</div>
                              </span>
                            
                          
                          
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td class="three">
                    
                      <ul class="three-nr">
                        <li class="three-nr-01">
                          
                            <span>价格（含增值税）</span>
                          
                          
                        </li>
                        
                        
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ff7900">
                                  <p class="ppbbz-p no-special " minordernum="100" orderprice="0.004835">
                                    100+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="9" data-productprice="0.004835" data-productprice-discount="" data-startpurchasednumber="1">
                                    
                                      <span>￥${bigdata[i].totalsum/100}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="1000" orderprice="0.004045">
                                    1000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="29" data-productprice="0.004045" data-productprice-discount="" data-startpurchasednumber="10">
                                    
                                      <span>￥${bigdata[i].totalsum/10}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="3000" orderprice="0.003824">
                                    3000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="99" data-productprice="0.003824" data-productprice-discount="" data-startpurchasednumber="30">
                                    
                                      <span>￥${0.003824}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="10000" orderprice="0.003634">
                                    10000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="499" data-productprice="0.003634" data-productprice-discount="" data-startpurchasednumber="100">
                                    
                                      <span>￥${bigdata[i].totalsum}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="50000" orderprice="0.003445">
                                    50000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="999" data-productprice="0.003445" data-productprice-discount="" data-startpurchasednumber="500">
                                    
                                      <span>￥${bigdata[i].bigdataspecifications*5}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            
                            
                            
                            <!--6,7,8区间特卖-->
                            
                              <li>
                                
                                  <div class="price-warp ">
                                    <p class="ppbbz-p no-special " minordernum="100000" orderprice="0.003413">
                                      100000+：
                                    </p>
                                    <span class="ccd ccd-ppbbz " data-endpurchasednumber="1999" data-productprice="0.003413" data-productprice-discount="" data-startpurchasednumber="1000">
                                      ￥${bigdata[i].bigdataspecifications*10}
                                    </span>
                                  </div>
                                
                              </li>
                              
                              <!--非6,7,8区间特卖-->
                            
                          
                        
                        <input type="hidden" id="isHasOneDiscount" value="no">
                      </ul>
                    
                  </td>
                  <td class="finput">
                    <ul>
                      <li class="price-input">
                        <input type="text" class="cartnumbers " maxlength="9" unit-type="single" unitnum="5000" value="100">
                        <div class="unit ">
                          <span class="cur-unit ">个</span>
                          
                            <i class="xl"></i>
                            <div class="unit-contain" style="display: none;">
                              <div class="unit-type">
                                <span class="unit-one">个</span>
                                <span class="unit-two">圆盘</span>
                              </div>
                              <i class="sl"></i>
                            </div>
                          
                        </div>
                      </li>
                      
                        
                          
                        
                        
                          
                        
                        <li class="totlePrice-li">总额：<span class="goldenrod totlePrice">￥${bigdata[i].totalsum}</span></li>
                        
                          <li class="stocks">
                            <span>有货</span>
                          </li>
                        
                        
                          <li>5000个/圆盘</li>
                        
                        
                          <li class="stocks">
                            
                            
                              <span>近期成交：100单+</span>
                            
                          </li>
                        
                      
                    </ul>
                  </td>
                  <td class="ffour">
                    <ul class="pan">
                      <li class="pan-list">
                        
                          
                            <button type="button" class="addCartBtn" productcode="C21190" id="${bigdata[i].bigdataid}">加入购物车</button>
                          
                        
                      </li>
                      <li class="li-flag add-cart-tip" style="display: none;">
                        <i class="add-cart"></i><span class="c999 cursor-default lh">已加购</span>
                      </li>
                      
                      
                        
                      
                      
                    </ul>
                  </td>
                </tr>
                
                </tbody>
              </table>`)
                node.appendTo($(".maingoods"))
               
                
              }
            },
            error: function(msg){
              console.log(msg);
            }
          })

        }
        
    })
    $(".bian1").click(function(){
        if(jishu==0){jishu=0}
        else{ jishu=0
            $(".bian1").addClass('bian')
            $(".bian2").removeClass('bian')
            $(".bian3").removeClass('bian')
            var node1=$(`<b>${jishu+1}/3</b>`)
            $(".maingoods44 b").remove()
            node1.appendTo($(".maingoods44"))
            
            $("table").remove()
            console.log(jishu)
            $.ajax({
            url: "./json/goodslist.json",
            success: function(result){
              // console.log(result);
              var bigdata = result.bigdata;
              //JQ创建节点，html部分如何写，这里也如何写
              for(var i = jishu*10; i < jishu*10+10; i++){
                 
                var node=$(`<table class="inside inside-page tab-data " id="product-tbody-line-21904" data-batchstocklimit="4000" data-encapstandard="0603" data-hassamplerule="no" data-productcode="C21190" data-productminencapsulationnumber="5000" data-productminencapsulationunit="圆盘" data-productmodel="0603WAF1001T5E" data-productname="1KΩ ±1% " data-samplestocknumber="0" data-validstocknumber="6041" data-productstockstatus="yes" data-convesionratio="100" data-productunit="个" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                <tr class="no-tj-tr add-cart-tr">
                  <td class="one">
                    <a class="one-to-item-link" href="./details.html?product_id=${bigdata[i].bigdataid}"" target="_blank" onclick="toBuriedPoint(21904, this)">
                      
                        
                          <img class="is-hot-img" src="https://static.szlcsc.com/ecp/public/img/bk_icon.19e50291.png">
                        
                      
                      <img src=${bigdata[i].bigdataimg} productid="21904" alt="1KΩ ±1% " xpath="https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F0B964A0ECF712B10768A9921FD33F69.jpg" data-urls="https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F0B964A0ECF712B10768A9921FD33F69.jpg<$>https://alimg.szlcsc.com/upload/public/product/breviary/20190224/2ABF8EE00E07644077B86F7E85BE2D6A.jpg<$>https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F2C3F2BB674A9945D659AF136BBA9D9E.jpg<$>https://alimg.szlcsc.com/upload/public/brand/product/certificate/20200610/DFB2839373B1608AD080ECE1440F0A0D.png" showflag="yes" onerror="javascript:this.src='https://static.szlcsc.com/ecp/public/static/images/default_pic.gif'">
                    </a>
                    <span>
                      <input type="button" class="db" data-add-compare="21904" title="对比后该商品会添加到对比栏中" value="对比">
                      <input type="button" class="sc common-sc" value="收藏" title="收藏后该商品会保存到[会员中心]下的[我的收藏]中" data-productid="21904">
                    </span>
                  </td>
                  <td class="two">
                    <div class="two-tit">
                      <a title="1KΩ ±1% " target="_blank" class="blue ellipsis" style="font-size: 20px; color: #007BFF; display: block; max-width: 200px; float: left;" href="./details.html?product_id=${bigdata[i].bigdataid}"" onclick="toBuriedPoint(21904, this)">
                      ${bigdata[i].bigdataname}
                      </a>
                      <a title="贴片电阻" target="_blank" class="catalog ellipsis" href="https://list.szlcsc.com/catalog/439.html">
                      ${bigdata[i].Classification}
                      </a>
                    </div>
                    <div class="two-01">
                      <ul class="l02-zb">
                        <li class="li-ellipsis">
                          <span class="c9a9a9a">规格：</span>
                          <span title="0603">${bigdata[i].bigdataspecifications}</span>
                        </li>
                        <li class="band li-ellipsis">
                          <span class="c9a9a9a">品牌：</span>
                          <a class="brand-name" title="点击查看UNI-ROYAL(厚声)的品牌信息" href="https://list.szlcsc.com/brand/99.html" target="_blank">
                          ${bigdata[i].Brand}
                          </a>
                        </li>
                        <li class="li-ellipsis">
                          <span class="c9a9a9a">型号：</span>
                          <span title="0603WAF1001T5E">${bigdata[i].Model}</span>
                        </li>
                        <li>
                          
                          
                            <div class="ellipsis ms" title="功率：0.1W 阻值：1kΩ 温度系数：±100ppm/℃ 精度：±1% ">
                              <span class="c9a9a9a">描述：</span>
                              ${bigdata[i].describe}
                            </div>
                          
                        </li>
                      </ul>
                      <ul class="l02-yb">
                        <li class="li-ellipsis">
                          <span class="c9a9a9a">编号：</span>${bigdata[i].bigdataid}
                        </li>
                        
                        <li class="btn-wrapper li-ellipsis">
                          
                            <a class="sjsc" productid="21904" param-click="3CE5AED75327E0AE"><i></i>数据手册</a>
                          
                          
                          
                        </li>
                        
                        <li class="tag-wrapper">
                          
                            
                              <span class="couponbgs" id="${bigdata[i].bigdataid}">
                                <span class="lq">领券</span>
                                <div class="line"></div>
                                <span>1-30</span>
                                <div class="ljsy">立即领取</div>
                              </span>
                            
                          
                          
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td class="three">
                    
                      <ul class="three-nr">
                        <li class="three-nr-01">
                          
                            <span>价格（含增值税）</span>
                          
                          
                        </li>
                        
                        
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ff7900">
                                  <p class="ppbbz-p no-special " minordernum="100" orderprice="0.004835">
                                    100+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="9" data-productprice="0.004835" data-productprice-discount="" data-startpurchasednumber="1">
                                    
                                      <span>￥${bigdata[i].totalsum/100}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="1000" orderprice="0.004045">
                                    1000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="29" data-productprice="0.004045" data-productprice-discount="" data-startpurchasednumber="10">
                                    
                                      <span>￥${bigdata[i].totalsum/10}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="3000" orderprice="0.003824">
                                    3000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="99" data-productprice="0.003824" data-productprice-discount="" data-startpurchasednumber="30">
                                    
                                      <span>￥${0.003824}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="10000" orderprice="0.003634">
                                    10000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="499" data-productprice="0.003634" data-productprice-discount="" data-startpurchasednumber="100">
                                    
                                      <span>￥${bigdata[i].totalsum}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="50000" orderprice="0.003445">
                                    50000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="999" data-productprice="0.003445" data-productprice-discount="" data-startpurchasednumber="500">
                                    
                                      <span>￥${bigdata[i].bigdataspecifications*5}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            
                            
                            
                            <!--6,7,8区间特卖-->
                            
                              <li>
                                
                                  <div class="price-warp ">
                                    <p class="ppbbz-p no-special " minordernum="100000" orderprice="0.003413">
                                      100000+：
                                    </p>
                                    <span class="ccd ccd-ppbbz " data-endpurchasednumber="1999" data-productprice="0.003413" data-productprice-discount="" data-startpurchasednumber="1000">
                                      ￥${bigdata[i].bigdataspecifications*10}
                                    </span>
                                  </div>
                                
                              </li>
                              
                              <!--非6,7,8区间特卖-->
                            
                          
                        
                        <input type="hidden" id="isHasOneDiscount" value="no">
                      </ul>
                    
                  </td>
                  <td class="finput">
                    <ul>
                      <li class="price-input">
                        <input type="text" class="cartnumbers " maxlength="9" unit-type="single" unitnum="5000" value="100">
                        <div class="unit ">
                          <span class="cur-unit ">个</span>
                          
                            <i class="xl"></i>
                            <div class="unit-contain" style="display: none;">
                              <div class="unit-type">
                                <span class="unit-one">个</span>
                                <span class="unit-two">圆盘</span>
                              </div>
                              <i class="sl"></i>
                            </div>
                          
                        </div>
                      </li>
                      
                        
                          
                        
                        
                          
                        
                        <li class="totlePrice-li">总额：<span class="goldenrod totlePrice">￥${bigdata[i].totalsum}</span></li>
                        
                          <li class="stocks">
                            <span>有货</span>
                          </li>
                        
                        
                          <li>5000个/圆盘</li>
                        
                        
                          <li class="stocks">
                            
                            
                              <span>近期成交：100单+</span>
                            
                          </li>
                        
                      
                    </ul>
                  </td>
                  <td class="ffour">
                    <ul class="pan">
                      <li class="pan-list">
                        
                          
                            <button type="button" class="addCartBtn" productcode="C21190" id="${bigdata[i].bigdataid}">加入购物车</button>
                          
                        
                      </li>
                      <li class="li-flag add-cart-tip" style="display: none;">
                        <i class="add-cart"></i><span class="c999 cursor-default lh">已加购</span>
                      </li>
                      
                      
                        
                      
                      
                    </ul>
                  </td>
                </tr>
                
                </tbody>
              </table>`)
                node.appendTo($(".maingoods"))
               
                
              }
            },
            error: function(msg){
              console.log(msg);
            }
          })

        }
        
    })
    $(".bian2").click(function(){
        if(jishu==1){jishu=1}
        else{ jishu=1
            $(".bian1").removeClass('bian')
            $(".bian2").addClass('bian')
            $(".bian3").removeClass('bian')
            var node1=$(`<b>${jishu+1}/3</b>`)
            $(".maingoods44 b").remove()
            node1.appendTo($(".maingoods44"))
            
            $("table").remove()
            console.log(jishu)
            $.ajax({
            url: "./json/goodslist.json",
            success: function(result){
              // console.log(result);
              var bigdata = result.bigdata;
              //JQ创建节点，html部分如何写，这里也如何写
              for(var i = jishu*10; i < jishu*10+10; i++){
                 
                var node=$(`<table class="inside inside-page tab-data " id="product-tbody-line-21904" data-batchstocklimit="4000" data-encapstandard="0603" data-hassamplerule="no" data-productcode="C21190" data-productminencapsulationnumber="5000" data-productminencapsulationunit="圆盘" data-productmodel="0603WAF1001T5E" data-productname="1KΩ ±1% " data-samplestocknumber="0" data-validstocknumber="6041" data-productstockstatus="yes" data-convesionratio="100" data-productunit="个" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                <tr class="no-tj-tr add-cart-tr">
                  <td class="one">
                    <a class="one-to-item-link" href="./details.html?product_id=${bigdata[i].bigdataid}"" target="_blank" onclick="toBuriedPoint(21904, this)">
                      
                        
                          <img class="is-hot-img" src="https://static.szlcsc.com/ecp/public/img/bk_icon.19e50291.png">
                        
                      
                      <img src=${bigdata[i].bigdataimg} productid="21904" alt="1KΩ ±1% " xpath="https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F0B964A0ECF712B10768A9921FD33F69.jpg" data-urls="https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F0B964A0ECF712B10768A9921FD33F69.jpg<$>https://alimg.szlcsc.com/upload/public/product/breviary/20190224/2ABF8EE00E07644077B86F7E85BE2D6A.jpg<$>https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F2C3F2BB674A9945D659AF136BBA9D9E.jpg<$>https://alimg.szlcsc.com/upload/public/brand/product/certificate/20200610/DFB2839373B1608AD080ECE1440F0A0D.png" showflag="yes" onerror="javascript:this.src='https://static.szlcsc.com/ecp/public/static/images/default_pic.gif'">
                    </a>
                    <span>
                      <input type="button" class="db" data-add-compare="21904" title="对比后该商品会添加到对比栏中" value="对比">
                      <input type="button" class="sc common-sc" value="收藏" title="收藏后该商品会保存到[会员中心]下的[我的收藏]中" data-productid="21904">
                    </span>
                  </td>
                  <td class="two">
                    <div class="two-tit">
                      <a title="1KΩ ±1% " target="_blank" class="blue ellipsis" style="font-size: 20px; color: #007BFF; display: block; max-width: 200px; float: left;" href="./details.html?product_id=${bigdata[i].bigdataid}"" onclick="toBuriedPoint(21904, this)">
                      ${bigdata[i].bigdataname}
                      </a>
                      <a title="贴片电阻" target="_blank" class="catalog ellipsis" href="https://list.szlcsc.com/catalog/439.html">
                      ${bigdata[i].Classification}
                      </a>
                    </div>
                    <div class="two-01">
                      <ul class="l02-zb">
                        <li class="li-ellipsis">
                          <span class="c9a9a9a">规格：</span>
                          <span title="0603">${bigdata[i].bigdataspecifications}</span>
                        </li>
                        <li class="band li-ellipsis">
                          <span class="c9a9a9a">品牌：</span>
                          <a class="brand-name" title="点击查看UNI-ROYAL(厚声)的品牌信息" href="https://list.szlcsc.com/brand/99.html" target="_blank">
                          ${bigdata[i].Brand}
                          </a>
                        </li>
                        <li class="li-ellipsis">
                          <span class="c9a9a9a">型号：</span>
                          <span title="0603WAF1001T5E">${bigdata[i].Model}</span>
                        </li>
                        <li>
                          
                          
                            <div class="ellipsis ms" title="功率：0.1W 阻值：1kΩ 温度系数：±100ppm/℃ 精度：±1% ">
                              <span class="c9a9a9a">描述：</span>
                              ${bigdata[i].describe}
                            </div>
                          
                        </li>
                      </ul>
                      <ul class="l02-yb">
                        <li class="li-ellipsis">
                          <span class="c9a9a9a">编号：</span>${bigdata[i].bigdataid}
                        </li>
                        
                        <li class="btn-wrapper li-ellipsis">
                          
                            <a class="sjsc" productid="21904" param-click="3CE5AED75327E0AE"><i></i>数据手册</a>
                          
                          
                          
                        </li>
                        
                        <li class="tag-wrapper">
                          
                            
                              <span class="couponbgs" id="${bigdata[i].bigdataid}">
                                <span class="lq">领券</span>
                                <div class="line"></div>
                                <span>1-30</span>
                                <div class="ljsy">立即领取</div>
                              </span>
                            
                          
                          
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td class="three">
                    
                      <ul class="three-nr">
                        <li class="three-nr-01">
                          
                            <span>价格（含增值税）</span>
                          
                          
                        </li>
                        
                        
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ff7900">
                                  <p class="ppbbz-p no-special " minordernum="100" orderprice="0.004835">
                                    100+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="9" data-productprice="0.004835" data-productprice-discount="" data-startpurchasednumber="1">
                                    
                                      <span>￥${bigdata[i].totalsum/100}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="1000" orderprice="0.004045">
                                    1000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="29" data-productprice="0.004045" data-productprice-discount="" data-startpurchasednumber="10">
                                    
                                      <span>￥${bigdata[i].totalsum/10}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="3000" orderprice="0.003824">
                                    3000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="99" data-productprice="0.003824" data-productprice-discount="" data-startpurchasednumber="30">
                                    
                                      <span>￥${0.003824}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="10000" orderprice="0.003634">
                                    10000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="499" data-productprice="0.003634" data-productprice-discount="" data-startpurchasednumber="100">
                                    
                                      <span>￥${bigdata[i].totalsum}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="50000" orderprice="0.003445">
                                    50000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="999" data-productprice="0.003445" data-productprice-discount="" data-startpurchasednumber="500">
                                    
                                      <span>￥${bigdata[i].bigdataspecifications*5}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            
                            
                            
                            <!--6,7,8区间特卖-->
                            
                              <li>
                                
                                  <div class="price-warp ">
                                    <p class="ppbbz-p no-special " minordernum="100000" orderprice="0.003413">
                                      100000+：
                                    </p>
                                    <span class="ccd ccd-ppbbz " data-endpurchasednumber="1999" data-productprice="0.003413" data-productprice-discount="" data-startpurchasednumber="1000">
                                      ￥${bigdata[i].bigdataspecifications*10}
                                    </span>
                                  </div>
                                
                              </li>
                              
                              <!--非6,7,8区间特卖-->
                            
                          
                        
                        <input type="hidden" id="isHasOneDiscount" value="no">
                      </ul>
                    
                  </td>
                  <td class="finput">
                    <ul>
                      <li class="price-input">
                        <input type="text" class="cartnumbers " maxlength="9" unit-type="single" unitnum="5000" value="100">
                        <div class="unit ">
                          <span class="cur-unit ">个</span>
                          
                            <i class="xl"></i>
                            <div class="unit-contain" style="display: none;">
                              <div class="unit-type">
                                <span class="unit-one">个</span>
                                <span class="unit-two">圆盘</span>
                              </div>
                              <i class="sl"></i>
                            </div>
                          
                        </div>
                      </li>
                      
                        
                          
                        
                        
                          
                        
                        <li class="totlePrice-li">总额：<span class="goldenrod totlePrice">￥${bigdata[i].totalsum}</span></li>
                        
                          <li class="stocks">
                            <span>有货</span>
                          </li>
                        
                        
                          <li>5000个/圆盘</li>
                        
                        
                          <li class="stocks">
                            
                            
                              <span>近期成交：100单+</span>
                            
                          </li>
                        
                      
                    </ul>
                  </td>
                  <td class="ffour">
                    <ul class="pan">
                      <li class="pan-list">
                        
                          
                            <button type="button" class="addCartBtn" productcode="C21190" id="${bigdata[i].bigdataid}">加入购物车</button>
                          
                        
                      </li>
                      <li class="li-flag add-cart-tip" style="display: none;">
                        <i class="add-cart"></i><span class="c999 cursor-default lh">已加购</span>
                      </li>
                      
                      
                        
                      
                      
                    </ul>
                  </td>
                </tr>
                
                </tbody>
              </table>`)
                node.appendTo($(".maingoods"))
               
                
              }
            },
            error: function(msg){
              console.log(msg);
            }
          })

        }
        
    })
    $(".bian3").click(function(){
        if(jishu==2){jishu=2}
        else{ jishu=2
            $(".bian1").removeClass('bian')
            $(".bian2").removeClass('bian')
            $(".bian3").addClass('bian')
            var node1=$(`<b>${jishu+1}/3</b>`)
            $(".maingoods44 b").remove()
            node1.appendTo($(".maingoods44"))
            
            $("table").remove()
            console.log(jishu)
            $.ajax({
            url: "./json/goodslist.json",
            success: function(result){
              // console.log(result);
              var bigdata = result.bigdata;
              //JQ创建节点，html部分如何写，这里也如何写
              for(var i = jishu*10; i < jishu*10+10; i++){
                 
                var node=$(`<table class="inside inside-page tab-data " id="product-tbody-line-21904" data-batchstocklimit="4000" data-encapstandard="0603" data-hassamplerule="no" data-productcode="C21190" data-productminencapsulationnumber="5000" data-productminencapsulationunit="圆盘" data-productmodel="0603WAF1001T5E" data-productname="1KΩ ±1% " data-samplestocknumber="0" data-validstocknumber="6041" data-productstockstatus="yes" data-convesionratio="100" data-productunit="个" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                <tr class="no-tj-tr add-cart-tr">
                  <td class="one">
                    <a class="one-to-item-link" href="./details.html?product_id=${bigdata[i].bigdataid}"" target="_blank" onclick="toBuriedPoint(21904, this)">
                      
                        
                          <img class="is-hot-img" src="https://static.szlcsc.com/ecp/public/img/bk_icon.19e50291.png">
                        
                      
                      <img src=${bigdata[i].bigdataimg} productid="21904" alt="1KΩ ±1% " xpath="https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F0B964A0ECF712B10768A9921FD33F69.jpg" data-urls="https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F0B964A0ECF712B10768A9921FD33F69.jpg<$>https://alimg.szlcsc.com/upload/public/product/breviary/20190224/2ABF8EE00E07644077B86F7E85BE2D6A.jpg<$>https://alimg.szlcsc.com/upload/public/product/breviary/20190224/F2C3F2BB674A9945D659AF136BBA9D9E.jpg<$>https://alimg.szlcsc.com/upload/public/brand/product/certificate/20200610/DFB2839373B1608AD080ECE1440F0A0D.png" showflag="yes" onerror="javascript:this.src='https://static.szlcsc.com/ecp/public/static/images/default_pic.gif'">
                    </a>
                    <span>
                      <input type="button" class="db" data-add-compare="21904" title="对比后该商品会添加到对比栏中" value="对比">
                      <input type="button" class="sc common-sc" value="收藏" title="收藏后该商品会保存到[会员中心]下的[我的收藏]中" data-productid="21904">
                    </span>
                  </td>
                  <td class="two">
                    <div class="two-tit">
                      <a title="1KΩ ±1% " target="_blank" class="blue ellipsis" style="font-size: 20px; color: #007BFF; display: block; max-width: 200px; float: left;" href="./details.html?product_id=${bigdata[i].bigdataid}"" onclick="toBuriedPoint(21904, this)">
                      ${bigdata[i].bigdataname}
                      </a>
                      <a title="贴片电阻" target="_blank" class="catalog ellipsis" href="https://list.szlcsc.com/catalog/439.html">
                      ${bigdata[i].Classification}
                      </a>
                    </div>
                    <div class="two-01">
                      <ul class="l02-zb">
                        <li class="li-ellipsis">
                          <span class="c9a9a9a">规格：</span>
                          <span title="0603">${bigdata[i].bigdataspecifications}</span>
                        </li>
                        <li class="band li-ellipsis">
                          <span class="c9a9a9a">品牌：</span>
                          <a class="brand-name" title="点击查看UNI-ROYAL(厚声)的品牌信息" href="https://list.szlcsc.com/brand/99.html" target="_blank">
                          ${bigdata[i].Brand}
                          </a>
                        </li>
                        <li class="li-ellipsis">
                          <span class="c9a9a9a">型号：</span>
                          <span title="0603WAF1001T5E">${bigdata[i].Model}</span>
                        </li>
                        <li>
                          
                          
                            <div class="ellipsis ms" title="功率：0.1W 阻值：1kΩ 温度系数：±100ppm/℃ 精度：±1% ">
                              <span class="c9a9a9a">描述：</span>
                              ${bigdata[i].describe}
                            </div>
                          
                        </li>
                      </ul>
                      <ul class="l02-yb">
                        <li class="li-ellipsis">
                          <span class="c9a9a9a">编号：</span>${bigdata[i].bigdataid}
                        </li>
                        
                        <li class="btn-wrapper li-ellipsis">
                          
                            <a class="sjsc" productid="21904" param-click="3CE5AED75327E0AE"><i></i>数据手册</a>
                          
                          
                          
                        </li>
                        
                        <li class="tag-wrapper">
                          
                            
                              <span class="couponbgs" id="${bigdata[i].bigdataid}">
                                <span class="lq">领券</span>
                                <div class="line"></div>
                                <span>1-30</span>
                                <div class="ljsy">立即领取</div>
                              </span>
                            
                          
                          
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td class="three">
                    
                      <ul class="three-nr">
                        <li class="three-nr-01">
                          
                            <span>价格（含增值税）</span>
                          
                          
                        </li>
                        
                        
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ff7900">
                                  <p class="ppbbz-p no-special " minordernum="100" orderprice="0.004835">
                                    100+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="9" data-productprice="0.004835" data-productprice-discount="" data-startpurchasednumber="1">
                                    
                                      <span>￥${bigdata[i].totalsum/100}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="1000" orderprice="0.004045">
                                    1000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="29" data-productprice="0.004045" data-productprice-discount="" data-startpurchasednumber="10">
                                    
                                      <span>￥${bigdata[i].totalsum/10}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="3000" orderprice="0.003824">
                                    3000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="99" data-productprice="0.003824" data-productprice-discount="" data-startpurchasednumber="30">
                                    
                                      <span>￥${0.003824}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="10000" orderprice="0.003634">
                                    10000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="499" data-productprice="0.003634" data-productprice-discount="" data-startpurchasednumber="100">
                                    
                                      <span>￥${bigdata[i].totalsum}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            <li>
                              
                                <div class="price-warp ">
                                  <p class="ppbbz-p no-special " minordernum="50000" orderprice="0.003445">
                                    50000+：
                                  </p>
                                  <span class="ccd ccd-ppbbz" data-endpurchasednumber="999" data-productprice="0.003445" data-productprice-discount="" data-startpurchasednumber="500">
                                    
                                      <span>￥${bigdata[i].bigdataspecifications*5}</span>
                                    
                                  </span>
                                </div>
                              
                            </li>
                            <!--最后一项-->
                          
                        
                          
                          
                          
                          <!--非最后一项-->
                          
                            
                            
                            
                            <!--6,7,8区间特卖-->
                            
                              <li>
                                
                                  <div class="price-warp ">
                                    <p class="ppbbz-p no-special " minordernum="100000" orderprice="0.003413">
                                      100000+：
                                    </p>
                                    <span class="ccd ccd-ppbbz " data-endpurchasednumber="1999" data-productprice="0.003413" data-productprice-discount="" data-startpurchasednumber="1000">
                                      ￥${bigdata[i].bigdataspecifications*10}
                                    </span>
                                  </div>
                                
                              </li>
                              
                              <!--非6,7,8区间特卖-->
                            
                          
                        
                        <input type="hidden" id="isHasOneDiscount" value="no">
                      </ul>
                    
                  </td>
                  <td class="finput">
                    <ul>
                      <li class="price-input">
                        <input type="text" class="cartnumbers " maxlength="9" unit-type="single" unitnum="5000" value="100">
                        <div class="unit ">
                          <span class="cur-unit ">个</span>
                          
                            <i class="xl"></i>
                            <div class="unit-contain" style="display: none;">
                              <div class="unit-type">
                                <span class="unit-one">个</span>
                                <span class="unit-two">圆盘</span>
                              </div>
                              <i class="sl"></i>
                            </div>
                          
                        </div>
                      </li>
                      
                        
                          
                        
                        
                          
                        
                        <li class="totlePrice-li">总额：<span class="goldenrod totlePrice">￥${bigdata[i].totalsum}</span></li>
                        
                          <li class="stocks">
                            <span>有货</span>
                          </li>
                        
                        
                          <li>5000个/圆盘</li>
                        
                        
                          <li class="stocks">
                            
                            
                              <span>近期成交：100单+</span>
                            
                          </li>
                        
                      
                    </ul>
                  </td>
                  <td class="ffour">
                    <ul class="pan">
                      <li class="pan-list">
                        
                          
                            <button type="button" class="addCartBtn" productcode="C21190" id="${bigdata[i].bigdataid}">加入购物车</button>
                          
                        
                      </li>
                      <li class="li-flag add-cart-tip" style="display: none;">
                        <i class="add-cart"></i><span class="c999 cursor-default lh">已加购</span>
                      </li>
                      
                      
                        
                      
                      
                    </ul>
                  </td>
                </tr>
                
                </tbody>
              </table>`)
                node.appendTo($(".maingoods"))
               
                
              }
            },
            error: function(msg){
              console.log(msg);
            }
          })

        }
        
    })
    //事件委托
    $(".maingoods").on("click", ".addCartBtn", function(){
        //拿到了点击按钮所在商品的id
        var id = this.id;
        console.log(id)
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

})
