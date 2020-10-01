import React from "react";
import context from "../context";
import Radar from "./components/Radar/Radar";
import Bar from "./components/Bar/Bar";
import Map from "./components/Map/Map";

export default function HomeLeft() {
    return (
        <div className="cont-edge">
            {/* 西虹市财务开销 */}
            <Radar context={context} />
            {/* 西虹市农作物收成 */}
            <Bar context={context} />
            {/* 西虹市城市污染 */}
            <Map context={context} />
        </div>
    )
}