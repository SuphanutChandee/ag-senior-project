import React, { FC } from 'react'
import CycleGraph from "../img/CycleGraph.png"
import EventCreate from "../img/CreateEventIcon.png"
import EventSchedule from "../img/EventSchedule.png"

const OverviewGraphAndEventTable = ({}) => (
  <div>
    <table className='GraphAndEventTable'>
        <tr>
            <td><img src={CycleGraph} className='CycleGraph'/></td>
            <td className='EventMenuGrid'>
                <img src={EventCreate} />
                <img src={EventSchedule} />
            </td>
        </tr>
    </table>
  </div>
)

export default OverviewGraphAndEventTable