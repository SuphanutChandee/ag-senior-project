import { SetStateAction, useEffect, useState } from 'react'

const OverviewPredict = () => {
  
  const [overviewPredictList, setOverviewPredictList] = useState([{
    date: "",
    name: "",
    type: "",
    details: "",
    other: "",
    chance: "",
    color: "",
  }]);

  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch('http://localhost:3000/OverviewPredictList');
      // convert the data to json
      const json = await data.json();
  
      // set state with the result
      setOverviewPredictList(json);
    }
    fetchData();
    
  },[]);

  //console.log(overviewPredictList)
/*
  return (
  <div className='predict'>
    <h2 className='tab2'>สาเหตุที่คาดการ</h2>
    <div>
    {overviewPredictList.map((overviewPredict, idx) => (
        <div key={idx} className="centerDivMorePadding">
            <form action="/Event">
            <button className={overviewPredict.color}><h2 className='tab4'>{overviewPredict.date} : {overviewPredict.name} : "{overviewPredict.type}" : {overviewPredict.details} ({overviewPredict.chance})</h2></button>
            </form>
        </div>
    ))}
    </div>
  </div>
    )
*/
    return (
      <div>

      </div>
    )
  }

export default OverviewPredict

//<button type="button" className={OverviewPredict.chance}><h2 className='tab4'>{OverviewPredict.date} : {OverviewPredict.name} : "{OverviewPredict.type}" : {OverviewPredict.details} : {OverviewPredict.other} ({OverviewPredict.chance})</h2></button>

/*
import { FC, ChangeEvent, MouseEvent, useState, Dispatch, SetStateAction } from 'react'
import { OverviewPredictProps } from '../interfaces/OverviewProps'

interface Props {
  OverviewPredictList: OverviewPredictProps["OverviewPredictList"],
  setOverviewPredictList: Dispatch<SetStateAction<OverviewPredictProps["OverviewPredictList"]>>
}

let ct = 0;
const OverviewPredict: FC<Props> = ({ OverviewPredictList, setOverviewPredictList }) => {
  const [date, setdate] = useState<OverviewPredictProps | any>("");
  const [name, setname] = useState<OverviewPredictProps | any>("");
  const [type, settype] = useState<OverviewPredictProps | any>("");
  const [details, setdetails] = useState<OverviewPredictProps | any>("");
  const [other, setother] = useState<OverviewPredictProps | any>("");
  const [chance, setchance] = useState<OverviewPredictProps | any>("");

  const handlerClick = (event: MouseEvent<HTMLButtonElement>) =>  {
    setdate("27/7/2565")
    setname("ฉีดบาโคแล็ก")
    settype("ฉีดวัคซีน")
    setdetails("หมอสุชัย มาฉีดให้")
    setother("-")
    setchance("สูง")
    const OverviewPredictData = { date, name, type, details, other, chance };
    setOverviewPredictList([...OverviewPredictList, OverviewPredictData]);

    //console.log(OverviewPredictList)
    console.log(date)
  }

  if (ct === 0) {
    ct = ct + 1;
    setdate("27/7/2565")
    setname("ฉีดบาโคแล็ก")
    settype("ฉีดวัคซีน")
    setdetails("หมอสุชัย มาฉีดให้")
    setother("-")
    setchance("สูง")
    let OverviewPredictData = { date, name, type, details, other, chance };
    setOverviewPredictList([...OverviewPredictList, OverviewPredictData]);

    console.log(date)
  }


  return (
  <div className='predict'>
    <button type="button" onClick={handlerClick}>test button</button>
    <div className="series-list">
    {OverviewPredictList.map((OverviewPredict, idx) => (
        <div key={idx} className="series-item">
            <h2 className='tab4'>{OverviewPredict.date} : {OverviewPredict.name} : "{OverviewPredict.type}" : {OverviewPredict.details} : {OverviewPredict.other} (โอกาส{OverviewPredict.chance})</h2>
        </div>
    ))}
  </div>
    <h2 className='tab2'>สาเหตุที่คาดการ</h2>
    <h2 className='tab4'>27/7/2565 : XXXX : “ฉีดวัคซีน” : แบลคเลค : หมอ XXX มาฉีดให้ (โอกาสสูง)</h2>
    <h2 className='tab4'>28/7/2565 : XXXX : “เปลี่ยนอาหาร” : โปรใหม่ 10 แถม 2 : หมอ XXX แนะนำ (โอกาสปานกลาง)</h2>
    <h2 className='tab4'>โรคติดต่อ (โอกาสปานกลาง)</h2>
  </div>
)}

export default OverviewPredict
*/

/*
import { FC, ChangeEvent, MouseEvent, useState, Dispatch, SetStateAction } from 'react'
import { OverviewPredictProps } from '../interfaces/OverviewProps'
import React from 'react'

type OverviewPredictList = {
  date: string;
  name: string;
  type: string;
  details: string;
  other: string;
  chance: string;
};

class OverviewPredict extends React.Component<{}, OverviewPredictList> {
  state: OverviewPredictList = {
    date: "Defult message",
    name: "Defult message",
    type: "Defult message",
    details: "Defult message",
    other: "Defult message",
    chance: "Defult message"
  };

  componentDidMount() {
    fetch('http://localhost:3000/OverviewPredictList')
      .then(res => res.json())
      .then(obj => {
        this.setState({
          date: obj.date,
          name: obj.name,
          type: obj.type,
          details: obj.details,
          other: obj.other,
          chance: obj.chance
        })
      })
  }

  render() {
    return (
      <div>
        <h2 className='tab2'>สาเหตุที่คาดการ</h2>
        <h2 className='tab4'>{this.state.date} : {this.state.name} : “{this.state.type}” : {this.state.details} : {this.state.other} (โอกาส{this.state.chance})</h2>
      </div>
    );
  }
}

export default OverviewPredict
*/