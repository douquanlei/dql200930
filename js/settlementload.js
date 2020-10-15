define(["jquery", "jquery-cookie"], function($){
    //拿到cookie上的数据加载到页面
    function loadCarData(){ 
        if(cookieStr){
        var cookieArr = JSON.parse(cookieStr);
        //拿到加入购物车的所有数据，加载到页面上
        $.ajax({
            url: "../json/goodslist.json",
            success: function(result){
              // console.log(result);
              var bigdata = result.bigdata;
              var allnum=0;
              //JQ创建节点，html部分如何写，这里也如何写
              for(var i = 0; i < cookieArr.length; i++){
                  allnum+=Number((cookieArr[i].num*bigdata[cookieArr[i].id-1].totalsum).toFixed(2))
                var node=$(`<div class="commodity" id="${bigdata[cookieArr[i].id-1].bigdataid}">
                <input class="commodity0 commodity01"  type="checkbox"  checked name='fenxuan' value="funxuan${bigdata[cookieArr[i].id-1].bigdataid}">
                <img src="images/A629A9DFCA1B6028972647C7689E5E10.jpg" alt="">
                <div class="commodity1">${bigdata[cookieArr[i].id-1].bigdataid}</div>
                <div class="commodity2">
                  <p>${bigdata[cookieArr[i].id-1].Classification}/${bigdata[cookieArr[i].id-1].bigdataname}</p>
                  <p>${bigdata[cookieArr[i].id-1].Model}/${bigdata[cookieArr[i].id-1].Numbering}</p>
                  <p>${bigdata[cookieArr[i].id-1].Brand}</p>
                </div>
                <div class="commodity3">￥${bigdata[cookieArr[i].id-1].totalsum}</div>
                <div class="commodity4">
                  <button class="commodity41">-</button>
                  <input class="commodity43" type="text" value="${cookieArr[i].num}">
                  <button class="commodity42">+</button>
                </div>
                <div class="commodity5">￥${(cookieArr[i].num*bigdata[cookieArr[i].id-1].totalsum).toFixed(2)}</div>
                <div class="commodity6">
                  <button class="commodity61" >删除</button>
                </div> </div>`)
                node.appendTo($(".maincent"))
              }
              $('.total span').html(cookieArr.length)
              $('.mainbottomselected1').html(cookieArr.length)
              $(".mainbottomselected2").html(allnum.toFixed(2))
            },
            error: function(msg){
              console.log(msg);
            }})
        $(".maincent").on("click", ".commodity61", function(){
           var id = $(this).closest(".commodity").remove().attr("id");
            var cookieStr = $.cookie("goods");
            var cookieArr = JSON.parse(cookieStr);
            for(var i = 0; i < cookieArr.length; i++){
                if(id == cookieArr[i].id){
                    //删除数据
                    cookieArr.splice(i, 1);
                    break;
                }
            }

            cookieArr.length == 0 ? $.cookie("goods", null) : $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7
            })
            //isCheckAll();
            // window.location.reload()
            
              $('.total span').remove()
              $(`<span>${JSON.parse($.cookie("goods")).length}</span>`).appendTo($(".total"))
            return false;
        })
        $(".maincent").on("click", ".commodity41,.commodity42", function(){
            //1、先找出当前+和-按钮所在商品的id
            var id = $(this).closest(".commodity").attr("id");
            //找出cookie
            var cookieStr = $.cookie("goods");
            var cookieArr = JSON.parse(cookieStr);
            for(var i = 0; i < cookieArr.length; i++){
                if(cookieArr[i].id == id){
                    //说明该用户找到了
                    if(this.className == "commodity41"){
                        //数量-1
                        cookieArr[i].num == 1 ? alert("数量已经为1，不能再减少！") : cookieArr[i].num--;
                    }else{
                        cookieArr[i].num++;
                    }
                    break;
                }
            }
            //更新页面上的数量
            $(this).siblings(".commodity43").val(cookieArr[i].num);
            $(this).closest(".commodity").children("div.commodity5").html(`￥${($(this).closest(".commodity").children("div.commodity3").html().substring(1)*cookieArr[i].num).toFixed(2)}`)
            // $(this).siblings(".commodity5").val(cookieArr[i].num*);
            //更新页面上的单个商品价格
            // var price = parseFloat($(this).closest(".col-num").siblings(".col-price").html().trim());
            // $(this).closest(".col-num").siblings(".col-total").html((price * cookieArr[i].num).toFixed(1) + "元");

            //最后将更改后的数据存储到cookie中
            $.cookie("goods", JSON.stringify(cookieArr), {
                expires: 7
            })

            //每次更改一次数据，重新计算一次总价
            

            return false;
        })
        $(".maincent").on("click", '.commodity0', function(){
             var allChecks = $('.commodity0');
                if($(this).hasClass("commodity01")){
                    $(this).removeClass("commodity01");
                    
                }else{
                    $(this).addClass("commodity01");
                }
                var allnumll=0
                for(var z=0;z<$('.commodity01').length;z++){
                    allnumll+=Number($('.commodity01').eq(z).closest(".commodity").children("div.commodity5").html().substring(1))            
                }
                $(".mainbottomselected1").html($('.commodity01').length);
                $(".mainbottomselected2").html(allnumll.toFixed(2))
            
        })
        // isCheckAll();//计算总数
        $(".maincent").on("click", '.selectall input', function(){
            console.log(123151561165)
            if( $(this).is(':checked')){
                $('.commodity0').addClass("commodity01");
                $('.commodity0').prop("checked", true)
            }else{$('.commodity0').removeClass("commodity01");
                $('.commodity0').prop("checked", false)
                
            }
           
        })
    }


}
// $("#isOverInvoice").prop("checked", true);
//  $("#abc").is(':checked');   
    
    var cookieStr = $.cookie("goods");
    loadCarData()
  
})