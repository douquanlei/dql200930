define(["jquery"], function($){
    //通过ajax下载数据
    console.log(222)
    $.ajax({
      url: "../json/products.json",
      success: function(result){
        // console.log(result);
        var shangping = result.shangping;
        //JQ创建节点，html部分如何写，这里也如何写
        for(var i = 0; i < shangping.length; i++){
            var str=` <p>${shangping[i].fenleimingcheng}(${shangping[i].fenleishuliang})<span>></span></p>
          <ul>`
          for(var k = 0; k < shangping[i].fenlishangping.length; k++){
            str+=`<li>${shangping[i].fenlishangping[k].shangpingmingcheng }<span>${shangping[i].fenlishangping[k].shangpingshuliang }</span></li>`
          }
          str+=`</ul>`
          var node=$(str)
          node.appendTo($(".main-list"))
         
          
        }
      },
      error: function(msg){
        console.log(msg);
      }
    })

})