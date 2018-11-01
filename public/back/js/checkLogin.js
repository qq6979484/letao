//  一进入页面，判断当前用户是否登录的（发送请求询问后台），如果是已登录才能继续访问
$.ajax({
    type: "get",
    url: "/employee/checkRootLogin",
    dataType: "json",
    success: function (info) {
        console.log(info);
        if (info.error === 400) {
            // 当前用户未登录，拦截到登录页
            // location.href = "login.html";
                
                  
                location.href = "login.html";
            
        }
        if (info.success) {
            console.log("当前用户已登录");
        }
    }
})