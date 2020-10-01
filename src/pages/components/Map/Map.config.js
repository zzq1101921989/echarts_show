const options = {
    title: {
        text: '西虹市的空气质量',
        left: 'center',
        top: 12,
    },
    bmap: {
        center: [121.48, 31.22],
        zoom: 6,
        roam: true,
        mapStyleV2: {
            styleId: '082dd479f32b3f7bc749703460d7a31a'
        }
    },
    tooltip: {
        formatter (param) {
            let str = param.marker + param.name + " : " + param.value[2]
            return str;
        }
    },
    series: [
        {
            id: 's1',
            type: 'scatter',
            coordinateSystem: 'bmap',
            symbolSize: function (val) {
                return val[2] / 10;
            },
            itemStyle: {
                opacity: 0.5
            }
        },
        {
            id: 's2',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            symbolSize: function (param) {
                return param[2]/15
            },
        },
    ]
}

export default options;