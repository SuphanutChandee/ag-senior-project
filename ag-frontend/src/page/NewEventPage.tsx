import { useState, useEffect } from 'react'

async function POSTData(data:any) {
    return fetch('http://localhost:3000/newEventList', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(data => data.json())
}

function NewEventPage () {
    const [allGoatsNum, setAllGoatsNum] = useState([{
        _id: "",
        value: ""
    }])

    const [date, setDate] = useState("");
    const [type, setType] = useState("");
    const [details, setDetails] = useState("");
    const [goats, setGoats] = useState([""]);
    const [eventNum, setEventNum] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
          // get the data from the api
            const data = await fetch('http://localhost:3000/AllGoatsNum');
            const data2 = await fetch('http://localhost:3000/EventList');
          // convert the data to json
            const json = await data.json();
            const json2 = await data2.json();
          // set state with the result
            setAllGoatsNum(json);  
            let maxNumber = 0;
            for (let i = 0; i < json2.length; i++) {
                if(json2[i].eventNum > maxNumber){
                    maxNumber = json2[i].eventNum;
                }
            }
            setEventNum(maxNumber+1);
        }
        fetchData();
        setGoats([])
    },[]);

    const handlerSubmit1 = async (e:any) => {
        e.preventDefault();
        
        const response = await POSTData({
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
        
        const response = await POSTData({
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

    return (
        <div>
            <div className="section">
                <h2>วันที่</h2>
                <h2>:</h2>
                <input className="inputText" type="text" onFocus={e => {e.currentTarget.type = "date"; e.currentTarget.focus();}} onBlur={e => {e.currentTarget.type = "text"; e.currentTarget.placeholder = "กรุณากรอกวันที่";}} id="date" name="date" onChange={e => setDate(e.target.value)} placeholder="กรุณากรอกวันที่"></input>
            </div>
            <div className="section">
                <h2>ประเภท</h2>
                <h2>:</h2>
                <select className="inputText" name="type" id="type" onChange={e => setType(e.target.value)}>
                    <option value="" disabled selected hidden>กรุณาเลือกประเภทของกิจกรรม</option>
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
                <input className="inputText" type="text" id="details" name="details" onChange={e => setDetails(e.target.value)} placeholder="หากไม่ทราบหรือไม่ต้องการกรอก ให้ใส่ -"></input>
            </div>
            
            <div className="section">
                <h2>แพะที่เกี่ยวข้อง</h2>
                <h2>:</h2>
                <div className="MultiSelecTextBackground">
                    {allGoatsNum.map((allGoatsNum, idx) => (
                        <div>
                            <input key={idx} id={allGoatsNum.value} name={allGoatsNum.value} type="checkbox" onChange={handleChange}/>
                            <label className="inputText" htmlFor={allGoatsNum.value}>{allGoatsNum.value}</label>
                        </div>
                    ))}
                </div>
                
            </div>

            <div className='gridSubThree'>
            <button className="ยืนยันแล้วเพิ่ม" onClick={handlerSubmit1}>ยืนยันแล้วลับหน้ากิจกรรม</button>
            <button className="ยืนยันแล้วกลับหน้าหลัก" onClick={handlerSubmit2}>ยืนยันแล้วกลับหน้าหลัก</button>
            <form action="/">
                <button className="ยกเลิกแล้วกลับหน้าหลัก">ยกเลิกแล้วกลับหน้าหลัก</button>
            </form>
            </div>
            
            
        </div> 
    )
}
export default NewEventPage

//

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