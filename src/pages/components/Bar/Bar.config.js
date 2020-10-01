const options = {
    title: {
        text: '西虹市农作物收成',
        left: 'center'
    },
    tooltip:{
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    dataset: {
        source: [
            ['时间','小麦','玉米','高粱'],
            [2017,  1000,  800,  900],
            [2018,  500,   650,  800],
            [2019,  800,   900,  1200],
        ]
    }, 
    legend: {
        top: 30
    },
    grid: {
        top:72,
        bottom:28
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            id:'xm',
            type: 'bar'
        },
        {
            id:'ym',
            type: 'bar'
        },
        {
            id:'gl',
            type: 'bar'
        }
    ]
}

export default options;