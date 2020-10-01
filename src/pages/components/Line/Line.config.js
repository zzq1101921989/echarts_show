const source = [
    ['年', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
    ['收入', 820, 932, 901, 934, 1290, 1330, 1520],
    ['支出', 200, 632, 601, 634, 850, 1000, 1100]
]

const options = {
    title: {
        text: '西虹市人民收入增长情况',
        left:'center'
    }, 
    tooltip: {},
    legend:{
        top:30
    },
    xAxis: {
        type: 'category',
        axisLabel:{
            // rotate:30
        }
    },
    yAxis: {
        type: 'value'
    },
    dataset: {
        source
    },
    series: [
        {
            type: 'line',
            seriesLayoutBy:'row'
        },
        {
            type: 'line',
            seriesLayoutBy:'row'
        }
    ]
}

export default options;