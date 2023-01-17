import React, { useState, useEffect } from 'react'
const Event = ({}) => {
  const [dropDown, setDropDown] = useState([false])
  const [goatsArray, setGoatsArray] = useState([""])
  const [eventList, setEventList] = useState([{
    eventNum: 0,
    date: "",
    name: "",
    type: "",
    details: "",
    goats: [""]
  }]);

  async function DELETEData(evNum:Number) {
    var requestOptions = {
      method: 'DELETE'
    };
    
    return fetch("http://localhost:3000/deleteEventList?eventNum="+evNum, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

const handlerDelete = async (e:Number) => {
  console.log(e);
  const response = await DELETEData(e);
  console.log(response);
  //console.log(date, type, description, gns);
  window.location.href="/Event"
}

  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch('http://localhost:3000/EventList');
      // convert the data to json
      const json = await data.json();
      // set state with the result
      setEventList(json);
    }
    fetchData(); 

    for (let i=0; i<eventList.length; i++) {
      setDropDown((dropDown) => [...dropDown, false])
      setGoatsArray((goatsArray) => [...goatsArray, ""])
    }
  },[]);

  const buttonDropdownHandler = (e: React.MouseEvent<HTMLButtonElement>, value?: any) => {
    //console.log(DropDown)
      const newVal = [...dropDown]
      newVal[value] = !newVal[value]

      let temp = ""
      for (let i=0; i<eventList[value].goats.length; i++){
        temp = temp + eventList[value].goats[i]
        if(i < eventList[value].goats.length-1){
          temp = temp + ", "
        }
      }
      const newVal2 = [...goatsArray]
      newVal2[value] = temp

      return setDropDown(newVal), setGoatsArray(newVal2)
  };

  return (
  <div>
    <div>
    {eventList.map((eventList, idx) => (
        <div key={idx} className="centerDivMorePadding">
            <button onClick={(e) => buttonDropdownHandler(e, idx)} className='ActivityBar'><h2 className='tab4'>({eventList.eventNum}) : {eventList.date} : "{eventList.type}" : {eventList.details}</h2></button>
            { dropDown[idx] ? (

                <button onClick={(e) => buttonDropdownHandler(e, idx)} className='SubActivityBar'><h2 className='tab4'>แพะที่เกี่ยวข้อง {goatsArray[idx]}</h2></button>

            ) : null
            }

            <div className='gridSubTwo'>
              <form action={"/editEvent/"+eventList.eventNum}>
                <button className='editNdeleteEventButton'>แก้ไข</button>
              </form>
              <form action="/Event">
                <button className='editNdeleteEventButton' onClick={e => handlerDelete(eventList.eventNum)}>ลบ</button>
              </form>
            </div>

              
              
        </div>
    ))}
    </div>
  </div>
)}

export default Event

