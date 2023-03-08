import React, { FC, useState, useEffect } from 'react'
import OverviewHeader from "../components/OverviewHeader"
import OverviewChart from "../components/OverviewChart"
import OverviewPredict from "../components/OverviewPredict"
import OverviewGoatHouses from "../components/OverviewGoatHouses"
import { OverviewPredictProps } from '../interfaces/OverviewProps'
import EventCreate from "../img/CreateEventIcon.png"
import EventSchedule from "../img/EventSchedule.png"

async function POSTData(data:any) {
    return fetch('http://localhost:3000/updateLineAleart', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(data => data.json())
}

function MainPage () {

    const [dropDown, setDropDown] = useState(false)
    const [lineAleartLV, setLineAleartLV] = useState(0);

    useEffect(() => {
		const fetchData = async () => {
			// get the data from the api
			const data = await fetch('http://localhost:3000/LineAleart');
		  	// convert the data to json
			const json = await data.json();
		  	// set state with the result
            //console.log(json[0].LineAleartLV)
            setLineAleartLV(json[0].LineAleartLV);
		}
		fetchData();
	},[]);

    const buttonDropdownHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        //console.log(DropDown)
          let newVal = dropDown
          newVal = !newVal
          return setDropDown(newVal)
      };

      async function handlerSubmit(lv:any)  {
        
        const response = await POSTData({
            "LineAleartLV" :lv
        });
        console.log(response);
        //console.log(date, type, description, gns);
        window.location.href="/"
    }

    //console.log(dropDown);

    return (
        <div>
            <div>
                <OverviewHeader />
            </div>
            <div>
                <OverviewChart />
            </div> 
            <div>
                <OverviewPredict />
            </div>
            <div>
                <OverviewGoatHouses />
            </div>
            <div>
                <button className={'alert-adjustment-'+lineAleartLV} onClick={(e) => buttonDropdownHandler(e)} type="button" >ระดับการแจ้งเตือน</button>
                { dropDown ? (
                <div>
                    <button className='alert-button0' onClick={e => handlerSubmit(100)}>ไม่แจ้งเตือน</button>
                    <button className='alert-button1' onClick={e => handlerSubmit(1)}>ผิดปกติเล็กน้อย</button>
                    <button className='alert-button2' onClick={e => handlerSubmit(2)}>ผิดปกติปานกลาง</button>
                    <button className='alert-button3' onClick={e => handlerSubmit(3)}>ผิดปกติรุนแรง</button>
                </div>
                ) : null
                }
            </div>
            
            
            <form action="/Event">
                <input type="image" src={EventSchedule} className='EventSchedule'/>
            </form>
            <form action="/newevent">
                <input type="image" src={EventCreate} className='EventCreate'/>
            </form>
        </div>
    )
}

export default MainPage
/*
            <button className='EventSchedule'><img src={EventSchedule} /></button>
            <button className='EventCreate'><img src={EventCreate} /></button>
*/


/*
import React, { FC } from 'react'

export class MainPage  {
    render(): JSX.Element {
        return (
        <div>
            <h1>Main page heading here</h1>
        </div>
        )
    }
    
}

export default MainPage*/


/*
import React, { FC, useState } from 'react'
import OverviewHeader from "../contents/OverviewHeader"
import OverviewGraphAndEventTable from "../contents/OverviewGraphAndEventTable"
import OverviewPredict from "../contents/OverviewPredict"
import OverviewGoatHouses from "../contents/OverviewGoatHouses"
import { OverviewProps } from "../interfaces/OverviewProps"

function MainPage () {

    const [OverviewList, setOverviewList] = useState<OverviewProps["OverviewList"]>([]);

    return (
        <div>
            <div>
                <OverviewHeader OverviewList={OverviewList} setOverviewList={setOverviewList}/>
            </div>
            <div>
                <OverviewGraphAndEventTable />
            </div> 
            <div>
                <OverviewPredict />
            </div>
            <div>
                <OverviewGoatHouses />
            </div>
        </div>
    )
}

export default MainPage
*/