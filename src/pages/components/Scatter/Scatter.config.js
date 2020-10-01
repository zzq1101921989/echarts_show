const options = {
    title: {
        text: '西虹市人民收入和年龄关系',
        left:'center'
    },
    tooltip:{},
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'value'
    },
    grid: {
        left: '15%'
    },
    dataset: {
        dimensions: ['收入', '年龄', '人口', '住址', '时间'],
        source: []
    },
    series: {
        type: 'scatter',
        symbolSize: 4,
        encode: {
            x: 1,
            y: 0,
            tooltip: [0, 1]
        },
        itemStyle: {
            opacity:0.5
        }
    } 
}

export default options;