import Event from "../components/Event"
import EventCreate from "../img/CreateEventIcon.png"

function EventPage () {

    return (
        <div>
            <div>
                <Event />
            </div>
            <input type="image" src={EventCreate} className='EventCreate'/>
            <form action="/newevent">
                <input type="image" src={EventCreate} className='EventCreate'/>
            </form>
            <form action="/">
                <button className="ย้อนกลับ">กลับหน้าหลัก</button>
            </form>
        </div>
    )
}

export default EventPage