import React, { useEffect, useContext } from "react";
import options from "./Scatter.config";
import data from "./data.json";
import "echarts/lib/chart/scatter";
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

export default function Scatter ({context}) {

    const {echarts, subjectObj} = useContext(context);

    useEffect(() => {

        echarts.registerTheme('walden', subjectObj);

        const myEcharts = echarts.init(document.querySelector('#scatter'), 'walden');

        // 真正的开发数据都是请求下来的，一般都是有什么先画什么
        myEcharts.setOption(options);
        // 等到数据加载过来再添加绘制
        setTimeout(() => {
            myEcharts.setOption({
                dataset: {
                    source: data
                }
            });
        }, 1500)

    }, [])

    return (
        <div id="scatter" className='box'></div>
    )
}