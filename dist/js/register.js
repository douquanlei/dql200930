define(["jquery"], function($){
    // $(".input1").hide()
    function registerSend(){
       
        //通过post提交数据到对应的php页面，谨记前后端交互看控制台网络
        //点击注册按钮进行注册，有兴趣的同学可以在这个部分加表单验证
        $("#register-button").click(function(){
            
            $.ajax({
                type: "post",
                url: "./php/register.php",
                data: {
                    username: $(".registermian3 input").eq(0).val(),
                    password: $(".registermian3 input").eq(1).val(),
                    repassword: $(".registermian3 input").eq(2).val(),
                    createTime: (new Date()).getTime()
                },
                success: function(result){
                    //解析拿到的数据
                    var obj = JSON.parse(result);
                        $(".input1").hide()
                        switch(obj.code){
                            case 1: $(".input1").eq(0).show().html(obj.message);break;
                            case 2: $(".input1").eq(1).show().html(obj.message);break;
                            case 3: $(".input1").eq(2).show().html(obj.message);break;
                            case 4: $(".input1").eq(3).show().html(obj.message);break;
                            case 5: $(".input1").eq(3).show().html(obj.message);break;
                            case 6: $(".input1").eq(0).show().html(obj.message);break;
                            case 0: $(".input1").eq(3).show().html(obj.message).css("color","green");
                            setTimeout(function(){
                                location.assign("login.html");
                            }, 1000);
                            break;
                        }
                },
                error: function(msg){
                    console.log(msg);
                }
    
            })
        })
        
    }
    return {
        registerSend: registerSend
    }
})