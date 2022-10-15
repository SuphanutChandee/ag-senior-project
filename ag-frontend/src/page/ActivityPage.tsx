import Activity from "../components/Activity"
import EventCreate from "../img/CreateEventIcon.png"

function ActivityPage () {

    return (
        <div>
            <div>
                <Activity />
            </div>
            <input type="image" src={EventCreate} className='EventCreate'/>
            <form action="/">
                <button className="ย้อนกลับ">ย้อนกลับ</button>
            </form>
        </div>
    )
}

export default ActivityPage