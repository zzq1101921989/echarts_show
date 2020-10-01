import React, {useEffect, useContext} from "react";
import options from "./Map.config";
import data from "./data.json";
import 'echarts/extension/bmap/bmap';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/effectScatter';

export default function Map ({context}) {

    const { echarts, subjectObj } = useContext(context);

    useEffect(() => {
        // 注册 echarts 主题
        echarts.registerTheme('walden', subjectObj);
        // 初始化 echarts
        const myEcharts = echarts.init(document.querySelector('#mapScatter'), 'walden');

        myEcharts.setOption(options);

        myEcharts.setOption({
            series: [
                {
                    id:'s1',
                    data
                },
                {
                    id:'s2',
                    data: data.splice(data.length - 5, data.length)
                }
            ]
        })

    }, [])

    return (
        <div id="mapScatter" className='box'></div>
    )
}