console.log("加载成功");
//一个.html页面独享一个js，配置要引入的js文件
require.config({
  paths: {
    "jquery": "../js/jquery-1.11.3",
    "jquery-cookie": "../js/jquery.cookie",
    "parabola": "../js/parabola",
    "goodslist": "../js/goodslist",
    "goodslistload": "../js/goodslistload",
    "banner": "../js/banner",
    "products": "../js/products"
    
  },
  shim: {
    //设置依赖关系
    "jquery-cookie": ['jquery'],
    //parabola 不遵从amd规范
    parabola: {
      exports: "_"
    }
  }
})


require(["goodslistload","goodslist", "banner",'products'], function(goodslistload,details, banner,products){
 

  
})