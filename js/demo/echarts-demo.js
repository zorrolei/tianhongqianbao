$(function () {

    var mapChart = echarts.init(document.getElementById("echarts-map-chart"));
    var mapoption = {
        title : {
            text: '用户流水分布',
            subtext: '',
            x:'center'
        },
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            x:'left',
            data:['北京 | 30%','河北 | 27%','上海 | 20%','山西 | 17%','宁夏 | 12%','四川 | 5%','重庆 | 5%','湖北 | 5%','吉林 | 5%','浙江 | 5%']
        },
        dataRange: {
            min: 0,
            max: 2500,/*这个数据为第十名的用户数量*/
            x: 'left',
            y: 'bottom',
            text:['高','低'],           // 文本，默认为数值文本
            calculable : true
        },
        toolbox: {
            show: true,
            orient : 'vertical',
            x: 'right',
            y: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        roamController: {
            show: true,
            x: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series : [
            {
                name: '北京 | 30%',
                type: 'map',
                mapType: 'china',
                roam: false,
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '北京',value: Math.round(Math.random()*1000)},
                ]
            },
            {
                name: '天津',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '天津',value: Math.round(Math.random()*3000)}
                ]
            },
            {
                name: '上海 | 20%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '上海',value: Math.round(Math.random()*3000)}
                ]
            },
            {
                name: '重庆 | 5%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '重庆',value: Math.round(Math.random()*3000)}
                ]
            },
            {
                name: '河北 | 27%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '河北',value: Math.round(Math.random()*3000)}
                ]
            },
            {
                name: '安徽 | 5%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '安徽',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '新疆 | 5%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '新疆',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '浙江 | 5%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '浙江',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '江西 | 5%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '江西',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '山西 | 17%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '山西',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '内蒙古 | 5%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '内蒙古',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '吉林 | 5%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '吉林',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '福建 | 5%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '福建',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '广东 | 5%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '广东',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '西藏 | 5%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '西藏',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '四川 | 5%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '四川',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '宁夏 | 12%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '宁夏',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '湖北 | 5%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '湖北',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '湖南 | 5%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '湖南',value: Math.round(Math.random()*1000)}
                ]
            },
            {
                name: '云南 | 5%',
                type: 'map',
                mapType: 'china',
                itemStyle:{
                    normal:{label:{show:true}},
                    emphasis:{label:{show:true}}
                },
                data:[
                    {name: '云南',value: Math.round(Math.random()*1000)}
                ]
            }
        ]
    };
    mapChart.setOption(mapoption);
    $(window).resize(mapChart.resize);



});
