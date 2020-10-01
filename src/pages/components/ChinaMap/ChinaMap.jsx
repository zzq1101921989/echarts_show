import React, {useEffect, useContext, useState} from "react";
import options from "./China.config";
import data from "./income.json";
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/component/visualMap';
import 'echarts/map/js/china';

let timer = null;

export default function ChinaMap ({context}) {

    let [count, setCount] = useState(0);

    const { echarts, subjectObj } = useContext(context);

    function rollTooltip (echarts, count) {

        echarts.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: count
        });
        /*当前索引递增，不能超过系列元素的总数*/
        count = (count + 1) % data.length;

        /*高亮当前图形*/
        echarts.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: count
        });
        /*显示 tooltip*/
        echarts.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: count
        });
    }

    useEffect(() => {
        // 注册 echarts 主题
        echarts.registerTheme('walden', subjectObj);
        // 初始化 echarts
        const myEcharts = echarts.init(document.querySelector('#chartC'), 'walden');

        myEcharts.setOption(Object.assign(options, {
            series: {
                ...options.series,
                data
            }
        }))

        timer = setInterval( function () {

            rollTooltip(myEcharts, count);

            setCount(++count);

            if (count === data.length) {
                setCount(0);
            }
        }, 1200);

        myEcharts.on('mouseover', { seriesType: 'scatter' }, function () {
            // 取消高亮
            myEcharts.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: count
            });
            // 清除定时器
            clearInterval(timer);
        });

        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <div id="chartC"></div>
    )
}