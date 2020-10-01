import React, { useEffect, useContext } from "react";
import options from "./Pie.config";
import "echarts/lib/chart/pie";
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

export default function Pie ({context}) {

    const {echarts, subjectObj} = useContext(context);

    useEffect(() => {

        echarts.registerTheme('walden', subjectObj);

        const myEcharts = echarts.init(document.querySelector('#pie'), 'walden');

        myEcharts.setOption(options);

    }, [])

    return (
        <div id="pie" className='box'></div>
    )
}