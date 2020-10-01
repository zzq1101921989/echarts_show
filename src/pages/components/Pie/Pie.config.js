const source = [
    {value:5000, name:'旅游'},
    {value:4500, name:'饮食'},
    {value:6500, name:'服装'},
    {value:3500, name:'电影'},
    {value:2500, name:'其它'}
];

let options = {
    title:{
        text:'西虹市人民衣食住行支出比',
        left:'center'
    },
    dataset: {
        source
    },
    tooltip: {
        formatter (param) {
            const str = Math.round(param.percent)+'%';
            return str
        }
    },
    series: {
        type: 'pie',
        roseType: 'radius',
        top: 35,
        radius: [50, 90]
    }
}

export default options;