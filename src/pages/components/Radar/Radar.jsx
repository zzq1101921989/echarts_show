import React, { useEffect, useContext } from "react";
import options from "./Radar.config";
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/chart/radar';
import 'echarts/lib/component/legend';

export default function Radar ({context}) {

    const {echarts, subjectObj} = useContext(context);

    useEffect(() => {

        echarts.registerTheme('walden', subjectObj);

        const myEcharts = echarts.init(document.querySelector('#radar'), 'walden')

        myEcharts.setOption(options)

    }, [])

    return (
        <div id="radar" className='box'></div>
    )
}