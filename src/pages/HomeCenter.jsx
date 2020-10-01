import React from "react";
import ChinaMap from "./components/ChinaMap/ChinaMap";
import context from "../context";

export default function () {
    return (
        <div className="cont-center">
            <div className="center-tit">
                <div className="center-row">
                    <div className="center-num">12345678</div>
                    <div className="center-num">67890542</div>
                </div>
                <div className="center-row">
                    <div className="center-text">2020年收入情况</div>
                    <div className="center-text">2020年总支出情况</div>
                </div>
            </div>
            <div className="center-cont">
                <div className="centerImg">
                    <img className="img1" src={require('../static/images/lbx.png')} />
                </div>
                <div className="centerImg">
                    <img className="img2" src={require('../static/images/jt.png')} />
                </div>
                <ChinaMap context={context} />
            </div>
        </div>
    )
}