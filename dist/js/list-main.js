console.log("加载成功");
//一个.html页面独享一个js，配置要引入的js文件
require.config({
  paths: {
    "jquery": "../js/jquery-1.11.3",
    "jquery-cookie": "../js/jquery.cookie",
    "parabola": "../js/parabola",
    "list": "../js/list",
    "listload": "../js/listload"
    
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


require(["list", 'listload'], function(list, listload){
 

  //轮播图可以实现
  
})