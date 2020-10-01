import React from "react";
import echarts from "echarts/lib/echarts";
import subjectObj from "./pages/subject.json";
import {Provider} from "./context";
import Home from "./pages/Home";


export default function App() {
	return <Provider 
		value={{
			echarts,
			subjectObj,
		}} 
	>
		<Home />
	</Provider>
}