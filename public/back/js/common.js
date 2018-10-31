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
 }) 
 

