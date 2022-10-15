import React, { FC, useState } from 'react'
import OverviewHeader from "../components/OverviewHeader"
import OverviewChart from "../components/OverviewChart"
import OverviewPredict from "../components/OverviewPredict"
import OverviewGoatHouses from "../components/OverviewGoatHouses"
import { OverviewPredictProps } from '../interfaces/OverviewProps'
import EventCreate from "../img/CreateEventIcon.png"
import EventSchedule from "../img/EventSchedule.png"

function MainPage () {

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
            <form action="/activity">
                <input type="image" src={EventSchedule} className='EventSchedule'/>
            </form>
            <input type="image" src={EventCreate} className='EventCreate'/>
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