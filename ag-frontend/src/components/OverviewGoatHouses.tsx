import React, { useState, useEffect } from 'react'
import AddUnit from "../img/AddUnit.png"

const OverviewGoatHouses = ({}) => {
  const [dropDown, setDropDown] = useState([false])

  const [overviewHousesList, setOverviewHousesList] = useState([{
    unit: 0,
    total: 0,
    color: "",
    ablv0: 0,
    ablv1: 0,
    ablv2: 0,
    ablv3: 0
  }]);

  const [unitdata, setUnitdata] = useState([{
    goat : [
      { gnum : "", gender : "", status : "", age : 0, behavior : "", color: "", },
    ]
  }]);

  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch('http://localhost:3000/GoatInHousesList');
      const data2 = await fetch('http://localhost:3000/overviewHousesList');
      // convert the data to json
      const json = await data.json();
      const json2 = await data2.json();
  
      // set state with the result
      setUnitdata(json);
      setOverviewHousesList(json2);
    }
    fetchData();

    for (let i=0; i<overviewHousesList.length; i++) {
      setDropDown((dropDown) => [...dropDown, false])
    }
  },[]);


  const buttonDropdownHandler = (e: React.MouseEvent<HTMLButtonElement>, value?: any) => {
    //console.log(DropDown)
      const newVal = [...dropDown]
      newVal[value] = !newVal[value]
      return setDropDown(newVal)
  };

  return (
  <div className='OverviewHouses'>
    <h2 className='tab2'>โรงเรือน</h2>
    <div>
    {overviewHousesList.map((OverviewHouses, idx) => (
        <div key={idx} className="centerDivMorePadding">
            <button onClick={(e) => buttonDropdownHandler(e, idx)} type="button" className={OverviewHouses.color}><h2 className='tab4'>Unit {OverviewHouses.unit} มีประชากร {OverviewHouses.total} ตัว แบ่งตามอาการได้เป็น : ปกติ {OverviewHouses.ablv0} ตัว : เล็กน้อย {OverviewHouses.ablv1} ตัว : ปานกลาง {OverviewHouses.ablv2} ตัว : รุนแรง {OverviewHouses.ablv3} ตัว</h2></button>
            { dropDown[idx] ? (
              <div>
                {unitdata[idx].goat.map((unitdropdownlist, idx2) => (
                <div key={idx2} className="centerDiv">
                  <form action={"/goat/"+unitdropdownlist.gnum}> 
                    <button className={unitdropdownlist.color}><h2 className='tab4'>{unitdropdownlist.gnum} เพศ{unitdropdownlist.gender} {unitdropdownlist.status} อายุ {unitdropdownlist.age} ปี ({unitdropdownlist.behavior})</h2></button>
                  </form>    
                </div>
                ))}
                <form action="/newgoat">
                  <input type="image" src={AddUnit} className="Addunit"/>
                </form>
              </div>
            ) : null
            }
        </div>
    ))}
    </div>
  </div>
)}

export default OverviewGoatHouses


/*
return (
  <div className='OverviewHouses'>
    <h2 className='tab2'>โรงเรือน</h2>
    <div>
    {overviewHousesList.map((OverviewHouses, idx) => (
        <div key={idx} className="centerDivMorePadding">
            <button onClick={(e) => buttonDropdownHandler(e, idx)} type="button" className={OverviewHouses.color}><h2 className='tab4'>Unit {OverviewHouses.unit} มีประชากร {OverviewHouses.total} ตัว แบ่งตามอาการได้เป็น : ปกติ {OverviewHouses.ablv0} ตัว : เล็กน้อย {OverviewHouses.ablv1} ตัว : ปานกลาง {OverviewHouses.ablv2} ตัว : รุนแรง {OverviewHouses.ablv3} ตัว</h2></button>
            { dropDown[idx] ? (
              <div>
                {unitdata[idx].goat.map((unitdropdownlist, idx2) => (
                <div key={idx2} className="centerDiv">
                  <form action={"/goat/"+unitdropdownlist.gnum}> 
                    <button className={unitdropdownlist.color}><h2 className='tab4'>{unitdropdownlist.gnum} เพศ{unitdropdownlist.gender} {unitdropdownlist.status} อายุ {unitdropdownlist.age} ปี ({unitdropdownlist.behavior})</h2></button>
                  </form>    
                </div>
                ))}
                <form action="/newgoat">
                  <input type="image" src={AddUnit} className="Addunit"/>
                </form>
              </div>
            ) : null
            }
        </div>
    ))}
    </div>
  </div>
)}

export default OverviewGoatHouses
*/