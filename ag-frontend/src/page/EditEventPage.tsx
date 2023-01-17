import React, { useState, useEffect } from 'react'

function EditEventPage () {

    
    // This holds the selected values
    const [allGoatsNum, setAllGoatsNum] = useState([{
        _id: "",
        value: ""
    }])
    const [eventList, setEventList] = useState([{
        eventNum: 0,
        date: "",
        name: "",
        type: "",
        details: "",
        goats: [""]
    }]);

    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [details, setDetails] = useState("");
    const [goats, setGoats] = useState([""]);
    const [eventNum, setEventNum] = useState(0);


    async function PUTData(data:any) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw
        };
        
        return fetch("http://localhost:3000/updateEventList?eventNum="+eventNum, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    useEffect(() => {

        const fetchData = async () => {
            let temp = window.location.href
            //console.log(temp)
            let length = temp.length
            let res = ""
            for (let i=length-2; i>=0; i--){
                if(temp[i] === '/'){break}
                res = temp[i] + res
            }
            setEventNum(parseInt(res))
            
          // get the data from the api
            const data = await fetch('http://localhost:3000/AllGoatsNum');
            const data2 = await fetch('http://localhost:3000/EventList');
          // convert the data to json
            const json = await data.json();
            const json2 = await data2.json();
          // set state with the result
            setAllGoatsNum(json);  
            setEventList(json2);
            
            for (let i=0; i<json2.length; i++){
                if(json2[i].eventNum == parseInt(res)){
                    if (date == "") setDate(json2[i].date);
                    setType(json2[i].type);
                    setDetails(json2[i].details);
                    setGoats(json2[i].goats);
                }
            }
        }
        
        fetchData();
        
        setGoats([]);
    },[]);

    const handlerSubmit1 = async (e:any) => {
        e.preventDefault();
        
        const response = await PUTData({
            date,
            type,
            details,
            goats,
            eventNum
        });
        console.log(response);
        //console.log(date, type, description, gns);
        window.location.href="/Event"
    }

    const handlerSubmit2 = async (e:any) => {
        e.preventDefault();
        
        const response = await PUTData({
            date,
            type,
            details,
            goats,
            eventNum
        });
        console.log(response);
        //console.log(date, type, description, gns);
        window.location.href="/"
    }

    const handleChange = async (x:any) =>{
        if( x.target.checked == true)
        {
            //console.log('Checked', x.target.id);
            setGoats([...goats, x.target.id])
        }
        else {
            //console.log('unChecked', x.target.id);
            setGoats(goats.filter(a => a !== x.target.id))
        }
    }
/*
    console.log(eventNum)
    console.log(date);
    console.log(type);
    console.log(details);
    console.log(goats);*/

    return (
        <div>
            {eventList.map((eventList, idx) => (
                <div key={idx}>
                    {eventList.eventNum === eventNum ? (
                        <div>
                            <div className="section" >
                                <h2>วันที่</h2>
                                <h2>:</h2>
                                <input className="inputText" type="text" id="date" name="date" onChange={e => setDate(e.target.value)} placeholder={eventList.date}></input>
                            </div>
                            <div className="section">
                                <h2>ประเภท</h2>
                                <h2>:</h2>
                                <select className="inputText" name="type" id="type" onChange={e => setType(e.target.value)}>
                                    <option value="" disabled selected hidden>{eventList.type}</option>
                                    <option value="ขายแพะออก">ขายแพะออก</option>
                                    <option value="นำแพะนอกเข้าฝูง">นำแพะนอกเข้าฝูง</option>
                                    <option value="เปลี่ยนอาหารข้น-หยาบ">เปลี่ยนอาหารข้น-หยาบ</option>
                                    <option value="ย้ายคอก-โรงเรือน">ย้ายคอก-โรงเรือน</option>
                                    <option value="ผสม">ผสม</option>
                                    <option value="หย่านม">หย่านม</option>
                                    <option value="ฉีดวัคซีน">ฉีดวัคซีน</option>
                                    <option value="คลอด">คลอด</option>
                                    <option value="ผ่าตัด">ผ่าตัด</option>
                                </select>          
                            </div>
                            <div className="section">
                                <h2>คำอธิบาย</h2>
                                <h2>:</h2>
                                <input className="inputText" type="text" id="details" name="details" onChange={e => setDetails(e.target.value)} placeholder={eventList.details}></input>
                            </div>
            
                            <div className="section">
                                <h2>แพะที่เกี่ยวข้อง</h2>
                                <h2>:</h2>
                                <div className="MultiSelecTextBackground">
                                    {allGoatsNum.map((allGoatsNum, idx2) => (
                                    <div key={idx2}>
                                        <input id={allGoatsNum.value} name={allGoatsNum.value} type="checkbox" onChange={handleChange}/>
                                        <label className="inputText" htmlFor={allGoatsNum.value}>{allGoatsNum.value}</label>
                                    </div>
                                    ))}
                            </div>
                                        
                        </div>
                            
                    </div>
                    ) : null
                    }
                </div>
            ))}

            

            <div className='gridSubThree'>
            <button className="ยืนยันแล้วเพิ่ม" onClick={handlerSubmit1}>ยืนยันแล้วกลับหน้ากิจกรรม</button>
            <button className="ยืนยันแล้วกลับหน้าหลัก" onClick={handlerSubmit2}>ยืนยันแล้วกลับหน้าหลัก</button>
            <form action="/">
                <button className="ยกเลิกแล้วกลับหน้าหลัก">ยกเลิกแล้วกลับหน้าหลัก</button>
            </form>
            </div>
            
            
        </div> 
    )
}
export default EditEventPage

/*
      const onloadHandle = async (y:any) =>{
        y.preventDefault();;
        console.log(date);
        console.log(type);
        console.log(details);
        console.log(goats);
        console.log(eventNum);
      }
*/
//onLoad={y => {setDate(eventList.date), setType(eventList.type), setDetails(eventList.details), setGoats(eventList.goats), onloadHandle}}
/*

<div className="section">
                <h2>แพะที่เกี่ยวข้อง</h2>
                <h2>:</h2>
                <div className="textBackground">{colors && colors.map((color) => <span>{color} </span>)}</div>
                <div></div>
                <div></div>
                
                <select multiple size={5} onChange={onChangeHandler} className="select" name="goats" id="goats">
                {allGoatsNum.map((allGoatsNum, idx) => (
                    <option key={idx} value={allGoatsNum}>{allGoatsNum}</option>
                ))}
                </select>
            </div>

*/