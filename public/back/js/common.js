


// 调用进度条方法

// NProgress.start();

// setTimeout(function () {
//     // 结束进度条
//     NProgress.done();
// }, 1000);



// ajax 全局事件

// 需求： （1） 在ajax 开始发送的时候 ， 开启进度条
//        （2） 在所有的 ajax 请求结束时， 结束进度条

//.  .ajaxComplete() 注册一个事件， 这个事件将在每个 ajax 完成时调用 （不管失败或者成功， 都会调用）
//.  .ajaxError() 将在每个 ajax 失败时调用
//   .ajaxSend()  在每个 ajax 发送前调用
//   .ajaxStart() 在第一个 ajax 开始发送时调用
//   .ajaxStop()  在所有的 ajax 请求完成后调用

$(document).ajaxStart(function () {
    // 第一个 ajax 开始发送时调用，开启进度条
    NProgress.start();
});

$(document).ajaxStop(function () {
    NProgress.done();
});


$(function () {

    // 1 . 二级导航的切换
    $('.lt_aside  .nav .category').click(function () {
        // 下一个兄弟元素 //切换上划下滑的状态
        $(this).next().stop().slideToggle();
    })


    // 2.  左侧菜单的切换
    $('.lt_topbar  .icon_menu').click(function () {
        // 切换类名
        $('.lt_aside').toggleClass("hidemenu");
    })





    // 3. 退出功能实现
    $('.lt_topbar .icon_logout').click(function () {
        // 显示模态框
        // 显示 modal("show");
        // 隐藏 modal("hide");
        $('#logoutModal').modal("show");

    })

    // 退出功能
    // 推出登录的方式：
    // (1) 用户端（浏览器端），用户自己清除浏览器缓存 （清空了 cookie),
    // 本质上将会话表示 sessionId 也清除了
    // (2)前端通过发送ajax退出请求，让后台销毁当前用户的登录状态
    $('#logoutBtn').click(function () {
        $.ajax({
            type: "get",
            url: "/employee/employeeLogout",
            dataType: "json",
            success: function (info) {
                console.log(info);
                // if ( info.error === 400) {
                //退出成功，跳转到首页
                // location.href = "login.html";
                // }
                if (info.success) {
                    // console.log("当前用户已登录");
                    location.href = "login.html";
                }
            }
        })
    })
})


