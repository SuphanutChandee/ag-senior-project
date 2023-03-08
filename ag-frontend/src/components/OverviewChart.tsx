import React, { useState, useEffect } from 'react'
import { render } from "react-dom";

import { Chart } from "react-google-charts";

const OverviewChart = () => {

	const [overviewHeaderList, setOverviewHeaderList] = useState([{
		total: 0,
		abnormaly: "",
		total_ab: 0,
		ablv0: 0,
		ablv1: 0,
		ablv2: 0,
		ablv3: 0
	}]);

	useEffect(() => {
		const fetchData = async () => {
			// get the data from the api
			const data = await fetch('http://localhost:3000/OverviewHeader');
		  	// convert the data to json
			const json = await data.json();
		  	// set state with the result
			setOverviewHeaderList(json);
		}
		fetchData();
	},[]);

	const data = [
		["ระดับความผิดปกติ", "ตัว"],
		["ปกติ", overviewHeaderList[0].ablv0],
		["เล็กน้อย", overviewHeaderList[0].ablv1],
		["ปานกลาง", overviewHeaderList[0].ablv2],
		["รุนแรง", overviewHeaderList[0].ablv3]
	];
	
	const options = {
		colors: ['#4CAF50', '#a7af4c', '#008CBA' , '#f44336'],
		backgroundColor: 'f6fdfe'
	};
	
	function Overviewpiechart() {
		return (
		<Chart
			chartType="PieChart"
			data={data}
			options={options}
			width={"100%"}
			height={"500px"}
		/>
	);}

	return (
		<div>
            <Overviewpiechart />
    	</div>
	)
}

export default OverviewChart


/*
import CycleGraph from "../img/CycleGraph.png"

const OverviewChart = ({}) => {
	return (
		<div>
        	<table className='GraphAndEventTable'>
            	<tr>
                	<td><img src={CycleGraph} className='CycleGraph'/></td>
            	</tr>
        	</table>
    	</div>
	)
}

export default OverviewChart*/