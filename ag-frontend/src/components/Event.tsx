import React, { useState, useEffect } from 'react'
import AddUnit from "../img/AddUnit.png"

const Event = ({}) => {
  const [dropDown, setDropDown] = useState([false])
  const [goatsArray, setGoatsArray] = useState([""])
  const [ActivityList, setActivityList] = useState([{
    date: "",
    name: "",
    type: "",
    details: "",
    goats: [""]
  }]);

  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch('http://localhost:3000/EventList');
      // convert the data to json
      const json = await data.json();
      // set state with the result
      setActivityList(json);
    }
    fetchData(); 

    for (let i=0; i<ActivityList.length; i++) {
      setDropDown((dropDown) => [...dropDown, false])
      setGoatsArray((goatsArray) => [...goatsArray, ""])
    }
  },[]);

  const buttonDropdownHandler = (e: React.MouseEvent<HTMLButtonElement>, value?: any) => {
    //console.log(DropDown)
      const newVal = [...dropDown]
      newVal[value] = !newVal[value]

      let temp = ""
      for (let i=0; i<ActivityList[value].goats.length; i++){
        temp = temp + ActivityList[value].goats[i]
        if(i < ActivityList[value].goats.length-1){
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
    {ActivityList.map((ActivityList, idx) => (
        <div key={idx} className="centerDivMorePadding">
            <button onClick={(e) => buttonDropdownHandler(e, idx)} className='ActivityBar'><h2 className='tab4'>{ActivityList.date} : {ActivityList.name} : "{ActivityList.type}" : {ActivityList.details}</h2></button>
            { dropDown[idx] ? (

                <button onClick={(e) => buttonDropdownHandler(e, idx)} className='ActivityBar'><h2 className='tab4'>แพะที่เกี่ยวข้อง {goatsArray[idx]}</h2></button>

            ) : null
            }
        </div>
    ))}
    </div>
  </div>
)}

export default Event

