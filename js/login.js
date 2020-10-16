define(['jquery', "jquery-cookie"], function($){
    console.log(56465455651651)
    $('.loginmian21').eq(0).click(function(){
        console.log(56465455651651)
        $('.loginmian21').eq(0).addClass("loginmian22");
        $('.loginmian21').eq(1).removeClass("loginmian22")
        $('.loginmian21').eq(2).removeClass("loginmian22")
        $(".loginmian23").css('display','block')
        $(".loginmian24").css('display','none')
        $(".loginmian25").css('display','none')
    })
    $('.loginmian21').eq(1).click(function(){
        $('.loginmian21').eq(1).addClass("loginmian22");
        $('.loginmian21').eq(0).removeClass("loginmian22")
        $('.loginmian21').eq(2).removeClass("loginmian22")
        $(".loginmian24").css('display','block')
        $(".loginmian23").css('display','none')
        $(".loginmian25").css('display','none')
    })
    $('.loginmian21').eq(2).click(function(){
        $('.loginmian21').eq(2).addClass("loginmian22");
        $('.loginmian21').eq(1).removeClass("loginmian22")
        $('.loginmian21').eq(0).removeClass("loginmian22")
       $(".loginmian25").css('display','block')
        $(".loginmian24").css('display','none')
        $(".loginmian23").css('display','none')
    })
    function loginSend(){
            $(".loginmian24but").click(function(){
                $.ajax({
                    type: "post",
                    url: "../php/login.php",
                    data: {
                        username: $(".loginmian241 input").eq(0).val(),
                        password: $(".loginmian241 input").eq(1).val()
                    },
                    success: function(result){
                        var obj = JSON.parse(result);
                        $(".loginmian24 p").hide()
                        switch(obj.code){
                            case 1: $(".loginmian24 p").show().html(obj.message);break;
                            case 2: $(".loginmian24 p").show().html(obj.message);break;
                            case 3: $(".loginmian24 p").show().html(obj.message);break;
                            case 4: $(".loginmian24 p").show().html(obj.message);break;
                            case 0: $(".loginmian24 p").show().html(obj.message).css("color","green");
                            setTimeout(function(){
                                location.assign("index.html");
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
        loginSend: loginSend
    }
})