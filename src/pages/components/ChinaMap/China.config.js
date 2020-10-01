const options = {
    title: {
        text: '西虹市不同地区的平均收入',
        textStyle: {
            fontSize: 24
        },
        left: 'center',
        top: 32,

    },
    tooltip: {},
    geo: {
        map: 'china',
        zoom: 1,
        roam: true,
        itemStyle: {
            areaColor:'rgba(0,29,132,0.8)',
            borderColor:'#02c0ff'
        },
        emphasis: {
            itemStyle: {
                shadowColor:'#000',
                shadowOffsetY:10,
                shadowBlur:2
            }
        }
    },
    visualMap: {
        type: 'piecewise',
        min: 0,
        max: 300,
        textStyle: {
            color: '#fff'
        }
    },
    series: {
        id: 's1',
        type: 'scatter',
        coordinateSystem: 'geo',
        symbolSize: (param) => {
            return param[2] / 15
        },
        emphasis:{
            itemStyle:{
                color:'yellow'
            },
        }
    },
}

export default options