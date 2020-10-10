define(["jquery"], function($){
        //通过ajax下载数据
        console.log(111111)
        $.ajax({
          url: "../json/products.json",
          success: function(result){
            // console.log(result);
            var recommendList = result.recommendList;
            //JQ创建节点，html部分如何写，这里也如何写
            for(var i = 0; i < result.recommendSize; i++){
                
              //JQ创建节点的函数，返回值就是这个节点
                var node = $(`<li>
                <img src="../images/catalog-570_0fcd070b.png" alt="">
                <div>
                  <div class="choicenesstab1">${recommendList[i].productName}</div>
                  <p>品牌：${recommendList[i].productGradePlateName}</p>
                  <P>型号：${recommendList[i].productModel}</P>
                  <p>封装规格：${recommendList[i].encapsulationModel}</p>
                  <span>￥${recommendList[i].productPriceList[1].productPrice}/${recommendList[i].venditionUnit}</span>
                </div>
              </li>`)
              if(i<8){node.appendTo($(".choicenesstaba"));}
              else{node.appendTo($(".choicenesstabb"));}
                

            
              
            }
          },
          error: function(msg){
            console.log(msg);
          }
        })
    
})