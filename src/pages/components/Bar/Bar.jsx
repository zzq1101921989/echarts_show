import React, { useEffect, useContext } from "react";
import options from "./Bar.config";
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/legend';
const xmImgSrc = require('../../../static/images/xm.jpg');
const ymImgSrc = require('../../../static/images/ym.jpg');
const glImgSrc = require('../../../static/images/gl.jpg');

function createImgNode(imgSrc) {
    const img = new Image();
    img.src = imgSrc;
    return img;
}

function imgOnload(img) {
    return new Promise((resolve) => {
        img.onload = function () {
            resolve(img);
        }
    })
}

//小麦
const imgXm = createImgNode(xmImgSrc);
//玉米
const imgYm = createImgNode(ymImgSrc);
//高粱
const imgGl = createImgNode(glImgSrc);

export default function Bar({ context }) {

    const { echarts, subjectObj } = useContext(context);

    useEffect(() => {

        echarts.registerTheme('walden', subjectObj);

        const myEcharts = echarts.init(document.querySelector('#bar'), 'walden')

        myEcharts.setOption(options);

        let res = Promise.all([imgOnload(imgXm), imgOnload(imgYm), imgOnload(imgGl)]);

        res.then(() => {
            myEcharts.setOption({
                series: [
                    {
                        id:'xm',
                        symbol: imgXm,
                    },
                    {
                        id:'ym',
                        symbol: imgYm,
                    },
                    {
                        id:'gl',
                        symbol: imgGl,
                    },
                ]
            });
        })

    }, [])

    return (
        <div id="bar" className='box'></div>
    )
}