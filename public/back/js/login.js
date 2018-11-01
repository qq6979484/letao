



$(function () {

    // 1. 进行表单校验
    //    校验要求: (1) 用户名不能为空
    //              (2) 密码不能为空, 且必须是 6-12 位

    $('#form').bootstrapValidator({


        //2. 指定校验时的图标显示，默认是bootstrap风格
        feedbackIcons: {

            valid: 'glyphicon glyphicon-ok',  // 校验成功       一般是成功 或者失败
            invalid: 'glyphicon glyphicon-remove', // 校验失败
            validating: 'glyphicon glyphicon-refresh'  // 校验中
        },




        fields: {

            // 配置 用户名校验
            username: {
                // 配置校验规则

                validators: {
                    // 非空校验
                    notEmpty: {

                        message: "用户名不能为空"
                    },


                    //长度校验

                    stringLength: {
                        min: 2,
                        max: 6,
                        // 非空提示
                        // 长度校验
                        message: "用户名长度必须是2-6位"
                    },

                    //  用以配置 ajax 回调的提示
                    callback:{
                        message:"用户名不存在"
                    }
                }
            },
            password: {

                validators: {
                    // 非空校验
                    notEmpty: {
                        // 非空提示
                        message: "密码不能为空"
                    },

                    stringLength: {
                        min: 6,
                        max: 12,

                        message: "密码长度必须是6-12位"
                    },

                    callback:{
                        message:"密码错误"
                    }

                    //长度校验
                }
            }
        }


    });



    // 2. 进行登录请求
  //    通过 ajax 进行登录请求

  // 表单校验插件有一个特点, 在表单提交的时候进行校验
  // 如果校验成功, 继续提交, 需要阻止这次默认的提交, 通过 ajax 进行请求提交
  // 如果校验失败, 默认会阻止提交

  $("#form").on('success.form.bv', function (e) {
    e.preventDefault();
    // console.log("阻止了默认的提交");
    //使用ajax提交逻辑

     // 通过 ajax 进行提交
     $.ajax({
         type:"post",
         url:"/employee/employeelogin",
         data:$('#form').serialize(),
         dataType:'json',
         success:function ( info) {
             console.log( info);

             if (info.success) {
                 // 跳转到首页
                 location.href = "index.html";
             }
             if (info.error === 1000) {
                 // 提示用户名不存在
                //  alert(info.message);
                // 调用插件实例方法， 更新校验状态成失败
                // 参数1： 校验字段
                // 参数2： 校验状态  NOT_VALIDATED未校验, VALIDATING校验中, INVALID校验失败 or VALID成功
                // 参数3：  配置校验规则 ， 用于配置提示信息
                $("#form").data("bootstrapValidator").updateStatus("username","INVALID","callback");
             }
             if (info.error === 1001) {
                // alert(info.message); 
                // 密码错误
                $("#form").data("bootstrapValidator").updateStatus("password","INVALID","callback") 
             }
         }
     })
});
//    3. 重置功能完成

  $('[type="reset"]').click(function () {
      // 调用实例的方法， 重置校验状态和内容
      // resetForm 传
      $('#form').data("bootstrapValidator").resetForm();
  })


})




