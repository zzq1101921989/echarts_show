import React, { Fragment } from "react";
import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import HomeCenter from "./HomeCenter";
import HomeHeader from "./HomeHeader";
import "./home.css";

export default function Home() {
    return (
        <Fragment>
            <HomeHeader />
            <div id='cont'>
                <HomeLeft />
                <HomeCenter />
                <HomeRight />
            </div>
        </Fragment>
    )
}