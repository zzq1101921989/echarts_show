const options = {
    title:{
        text:'西虹市财务开销',
    },
    tooltip:{},
    radar: {
        indicator: [
            { name: '销售', min: 0, max: 60000},
            { name: '管理', min: 0, max: 60000},
            { name: '信息技术', min: 0, max: 60000},
            { name: '客服', min: 0, max: 60000},
            { name: '研发', min: 0, max: 60000},
            { name: '市场', min: 0, max: 60000}
        ]
    },
    legend: {
        left:'left',
        top: 30,
        orient:'vertical'
    },
    series: {
        type: 'radar',
        data: [
            {
                name : '预算分配',
                value : [43000, 45000, 42000, 45000, 40000, 49000],
            },
            {
                name : '实际开销',
                value : [30000, 34000, 55000, 35000, 32000, 31000],
            }
        ]
    }
}

export default options;