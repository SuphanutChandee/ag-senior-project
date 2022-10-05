import React, { FC, useState } from 'react'
import OverviewHeader from "../contents/OverviewHeader"
import OverviewGraphAndEventTable from "../contents/OverviewGraphAndEventTable"
import OverviewPredict from "../contents/OverviewPredict"
import OverviewGoatHouses from "../contents/OverviewGoatHouses"
import { OverviewPredictProps } from '../interfaces/OverviewProps'

function MainPage () {

    const [OverviewPredictList, setOverviewPredictList] = useState<OverviewPredictProps["OverviewPredictList"]>([]);

    return (
        <div>
            <div>
                <OverviewHeader />
            </div>
            <div>
                <OverviewGraphAndEventTable />
            </div> 
            <div>
            {/*<OverviewPredict OverviewPredictList={OverviewPredictList} setOverviewPredictList={setOverviewPredictList} />*/}
            <OverviewPredict />
            </div>
            <div>
                <OverviewGoatHouses />
            </div>
        </div>
    )
}

export default MainPage



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