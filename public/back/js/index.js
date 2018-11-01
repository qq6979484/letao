 $(function () {
     // 基于准备好的dom，初始化echarts实例
     var myChart = echarts.init(document.querySelector(".content_left"));

     // 指定图表的配置项和数据
     var option = {
         title: {
             text: '2018年变态杀人魔人数综合统计'
         },
         tooltip: {},
         legend: {
             data:['击杀','逃跑']
         },
         xAxis: {
             data: ["李晓鹏","袁兆鑫","小飞飞","李立","房楷摸","周建@PQQ"]
         },
         yAxis: {},
         series: [{
             name: '击杀',
             type: 'bar',
             data: [500, 180, 1136, 610, 710, 420]
         },
         {
         name: '逃跑',
         type: 'bar',
         data: [368, 280, 376, 810, 910, 620]
             
         }]
     };

     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
 })


 $(function () {

    var myChart = echarts.init(document.querySelector(".content_right"));

    option = {
        title : {
            text: '热门品牌销售',
            subtext: '2018年10月',
            x:'center',
            // 添加颜色 字体大小
            textStyle:{
                color:"red",
                fontSize:25
            }
        },
         
 

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
            
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['宝马','斯巴鲁','奥迪','英菲尼迪','大众']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'宝马'},
                    {value:310, name:'斯巴鲁'},
                    {value:234, name:'奥迪'},
                    {value:135, name:'英菲尼迪'},
                    {value:1548, name:'大众'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChart.setOption(option);
 })