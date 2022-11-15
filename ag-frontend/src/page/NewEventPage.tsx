import { Divider } from 'antd';
import React, { useState, useEffect } from 'react'

function NewEventPage () {

    // This holds the selected values
    const [colors, setColors] = useState<String[]>();
    const [allGoatsNum, setAllGoatsNum] = useState([""])

    // Handle the onChange event of the select
    const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = event.currentTarget.selectedOptions;
        const newColors = [];
        for (let i = 0; i < selectedOptions.length; i++) {
            newColors.push(selectedOptions[i].value);
        }
        setColors(newColors);
    };

    useEffect(() => {
        const fetchData = async () => {
          // get the data from the api
            const data = await fetch('http://localhost:3000/AllGoatsNum');
          // convert the data to json
            const json = await data.json();
          // set state with the result
            setAllGoatsNum(json);  
        }
        fetchData();
    },[]);

    //console.log(AllGoatsNum)

    return (
        <div>
            <div className="section">
                <h2>วันที่</h2>
                <h2>:</h2>
                <input className="inputText" type="text" id="date" name="date" placeholder="กรุณากรอกในรูปแบบ วัน/เดือน/ปี, หากไม่ทราบหรือไม่ต้องการกรอก ให้ใส่ -"></input>
            </div>
            <div className="section">
                <h2>ประเภท</h2>
                <h2>:</h2>
                <select className="inputText" name="type" id="type">
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
                <input className="inputText" type="text" id="description" name="description" placeholder="หากไม่ทราบหรือไม่ต้องการกรอก ให้ใส่ -"></input>
            </div>
            
            <div className="section">
                <h2>แพะที่เกี่ยวข้อง</h2>
                <h2>:</h2>
                <div className="MultiSelecTextBackground">
                    {allGoatsNum.map((allGoatsNum, idx) => (
                        <div>
                            <input key={idx} id={allGoatsNum} name={allGoatsNum} type="checkbox"/>
                            <label className="inputText" htmlFor={allGoatsNum}>{allGoatsNum}</label>
                        </div>
                    ))}
                </div>
                
            </div>

            <div className='gridSubThree'>
            <form action="newevent">
                <button className="ยืนยันแล้วเพิ่ม">ยืนยันแล้วเพิ่มกิจกรรม</button>
            </form>
            <form action="/">
                <button className="ยืนยันแล้วกลับหน้าหลัก">ยืนยันแล้วกลับหน้าหลัก</button>
            </form>
            <form action="/">
                <button className="ยกเลิกแล้วกลับหน้าหลัก">ยกเลิกแล้วกลับหน้าหลัก</button>
            </form>
            </div>
            
            
        </div> 
    )
}
export default NewEventPage

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