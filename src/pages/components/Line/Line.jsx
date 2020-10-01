import React, { useEffect, useContext } from "react";
import options from "./Line.config";
import "echarts/lib/chart/line";
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

export default function Line ({context}) {

    const {echarts, subjectObj} = useContext(context);

    useEffect(() => {

        echarts.registerTheme('walden', subjectObj);

        const myEcharts = echarts.init(document.querySelector('#line'), 'walden');

        myEcharts.setOption(options);

    }, [])

    return (
        <div id="line" className='box'></div>
    )
}