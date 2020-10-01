import React from "react";
import context from "../context";
import Line from "./components/Line/Line";
import Pie from "./components/Pie/Pie";
import Scatter from "./components/Scatter/Scatter";

export default function HomeLeft() {
    return (
        <div className="cont-edge">
            {/* 西虹市人民收入增长情况 */}
            <Line context={context} />
            {/* 西虹市人民衣食住行消费比 */}
            <Pie context={context} />
            {/* 西虹市人民收入和年龄关系 */}
            <Scatter context={context} />
        </div>
    )
}