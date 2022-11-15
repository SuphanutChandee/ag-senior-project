import React, { useState, useEffect } from 'react'

function EditGoatPage () {

    const [allGoatsDetails,setAllGoatsDetails] = useState([{
        gnum : "", 
        status : "", 
        unit : "", 
        gender : "", 
        gene : "", 
        birthDate : "", 
        bornWeight : "", 
        Fnum : "", 
        Fgene : "", 
        Mnum : "", 
        Mgene : "", 
        DD : "",
        age : 0, 
        behavior : "", 
        color: "" 
    }])

    const [gnum, setGnum] = useState("")

    useEffect(() => {
        const fetchData = async () => {
          // get the data from the api
            const data = await fetch('http://localhost:3000/AllGoatsDetails');
          // convert the data to json
            const json = await data.json();
          // set state with the result
            setAllGoatsDetails(json);
        }
        fetchData();
        let temp = window.location.href
        //console.log(temp)
        let length = temp.length
        let res = ""
        for (let i=length-2; i>=0; i--){
            if(temp[i] == '/'){break}
            res = temp[i] + res
        }
        setGnum(res)
    },[]);

    return (
        <div>
            {allGoatsDetails.map((allGoatsDetails, idx) => (
                <div key={idx} className="centerDiv">
                {allGoatsDetails.gnum == gnum ? (
                    <div>

                        <div className="section">
                            <h2>เลขเบอร์แพะ</h2>
                            <h2>:</h2>
                            <input className="inputText" type="text" id="gnum" name="gnum" placeholder={allGoatsDetails.gnum}></input>
                        </div>
                        <div className="section">
                            <h2>สถานะ</h2>
                            <h2>:</h2>
                            <input className="inputText" type="text" id="status" name="status" placeholder={allGoatsDetails.status}></input>
                        </div>
                        <div className="section">
                            <h2>โรงเรือน</h2>
                            <h2>:</h2>
                            <input className="inputText" type="text" id="unit" name="unit" placeholder={allGoatsDetails.unit}></input>
                        </div>
                        <div className="section">
                            <h2>เพศ</h2>
                            <h2>:</h2>
                            <select className="inputText" name="gender" id="gender">
                                <option value="" disabled selected hidden>เพศ{allGoatsDetails.gender}</option>
                                <option value="เพศผู้">เพศผู้</option>
                                <option value="เพศเมีย">เพศเมีย</option>
                            </select>
                        </div>
                        <div className="section">
                            <h2>พันธ์ุ</h2>
                            <h2>:</h2>
                            <input className="inputText" type="text" id="gene" name="gene" placeholder={allGoatsDetails.gene}></input>
                        </div>
                        <div className="section">
                            <h2>วันเกิด</h2>
                            <h2>:</h2>
                            <input className="inputText" type="text" id="birthDate" name="birthDate" placeholder={allGoatsDetails.birthDate}></input>
                        </div>
                        <div className="section">
                            <h2>น้ำหนักแรกเกิด(กก.)</h2>
                            <h2>:</h2>
                            <input className="inputText" type="text" id="bornWeight" name="bornWeight" placeholder={allGoatsDetails.bornWeight}></input>
                        </div>
                        <div className="section">
                            <h2>เลขเบอร์พ่อ</h2>
                            <h2>:</h2>
                            <input className="inputText" type="text" id="Fnum" name="Fnum" placeholder={allGoatsDetails.Fnum}></input>
                        </div>
                        <div className="section">
                            <h2>พันธุ์พ่อ</h2>
                            <h2>:</h2>
                            <input className="inputText" type="text" id="Fgene" name="Fgene" placeholder={allGoatsDetails.Fgene}></input>
                        </div>
                        <div className="section">
                            <h2>เลขเบอร์แม่</h2>
                            <h2>:</h2>
                            <input className="inputText" type="text" id="Mnum" name="Mnum" placeholder={allGoatsDetails.Mnum}></input>
                        </div>
                        <div className="section">
                            <h2>พันธุ์แม่</h2>
                            <h2>:</h2>
                            <input className="inputText" type="text" id="Mgene" name="Mgene" placeholder={allGoatsDetails.Mgene}></input>
                        </div>
                        <div className="section">
                            <h2>โรคและความพิการที่พบ</h2>
                            <h2>:</h2>
                            <input className="inputText" type="text" id="DD" name="DD" placeholder={allGoatsDetails.DD}></input>
                        </div>

                    </div>
                ) : null
                }
                </div>
                ))}


            <div className='gridSubThree'>
            <form action={"/goat/"+gnum}>
                <button className="ยืนยันแล้วเพิ่ม">ยืนยันแล้วกลับหน้าแพะ</button>
            </form>
            <form action={"/goat/"+gnum}>
                <button className="ยืนยันแล้วกลับหน้าหลัก">ยกเลิกแล้วกลับหน้าแพะ</button>
            </form>
            <form action="/">
                <button className="ยกเลิกแล้วกลับหน้าหลัก">ยกเลิกแล้วกลับหน้าหลัก</button>
            </form>
            </div>
            
            
        </div> 
    )
}
export default EditGoatPage