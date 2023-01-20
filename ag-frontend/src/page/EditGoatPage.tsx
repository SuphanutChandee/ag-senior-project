import React, { useState, useEffect } from 'react'

function EditGoatPage () {

    const [goatDetails,setGoatDetails] = useState({
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
        color: "" ,
        Activity: [0],
        predicts: [{
            date: "",
            name: "",
            type: "",
            details: "",
            chance: "",
            color: ""
            }]
    })

    const [gnum, setGnum] = useState("")
    const [status, setStatus] = useState("")
    const [unit, setUnit] = useState("")
    const [gender, setGender] = useState("")
    const [gene, setGene] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [bornWeight, setBornWeight] = useState("")
    const [Fnum, setFnum] = useState("")
    const [Fgene, setFgene] = useState("")
    const [Mnum, setMnum] = useState("")
    const [Mgene, setMgene] = useState("")
    const [DD, setDD] = useState("")
    const [age, setAge] = useState("")
    const [behavior, setBehavior] = useState("")
    const [color, setColor] = useState("")
    const [Activity, setActivity] = useState("")
    const [predicts, setpredicts] = useState("")

    async function PUTData(data:any) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(data);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw
        };
        
        return fetch("http://localhost:3000/updateGoatsDetails?gnum="+gnum, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    useEffect(() => {

        let temp = window.location.href
        //console.log(temp)
        let length = temp.length
        let res = ""
        for (let i=length-2; i>=0; i--){
            if(temp[i] == '/'){break}
            res = temp[i] + res
        }
        setGnum(res)
        console.log(res)

        const fetchData = async () => {
          // get the data from the api
            const data = await fetch('http://localhost:3000/FindOneGoatDetails?gnum='+res);
          // convert the data to json
            const json = await data.json();
          // set state with the result
            setGoatDetails(json);

            setStatus(json.status);
            setUnit(json.unit);
            setGender(json.gender);
            setGene(json.gene);
            setBirthDate(json.birthDate);
            setBornWeight(json.bornWeight);
            setFnum(json.Fnum);
            setFgene(json.Fgene);
            setMnum(json.Mnum);
            setMgene(json.Mgene);
            setDD(json.DD);
            setAge(json.age);
            setBehavior(json.behavior);
            setColor(json.color);
            setActivity(json.Activity);
            setpredicts(json.predicts);
        }
        fetchData();
    },[]);

    const handlerSubmit1 = async (e:any) => {
        e.preventDefault();
        
        const response = await PUTData({
            gnum,
            status,
            unit,
            gender,
            gene,
            birthDate,
            bornWeight,
            Fnum,
            Fgene,
            Mnum,
            Mgene,
            DD,
            age,
            behavior,
            color,
            Activity,
            predicts
        });
        console.log(response);
        //console.log(date, type, description, gns);
        window.location.href="/goat/"+gnum+"?";
    }

    return (
        <div>
            <div>

                <div className="section">
                    <h2>เลขเบอร์แพะ</h2>
                    <h2>:</h2>
                    <input className="inputText" type="text" id="gnum" name="gnum" onChange={e => setGnum(e.target.value)} placeholder={goatDetails.gnum}></input>
                </div>
                <div className="section">
                    <h2>สถานะ</h2>
                    <h2>:</h2>
                    <input className="inputText" type="text" id="status" name="status" onChange={e => setStatus(e.target.value)} placeholder={goatDetails.status}></input>
                </div>
                <div className="section">
                    <h2>โรงเรือน</h2>
                    <h2>:</h2>
                    <input className="inputText" type="text" id="unit" name="unit" onChange={e => setUnit(e.target.value)} placeholder={goatDetails.unit}></input>
                </div>
                <div className="section">
                    <h2>เพศ</h2>
                    <h2>:</h2>
                    <select className="inputText" name="gender" id="gender" onChange={e => setGender(e.target.value)}>
                        <option value="" disabled selected hidden>เพศ{goatDetails.gender}</option>
                        <option value="เพศผู้">เพศผู้</option>
                        <option value="เพศเมีย">เพศเมีย</option>
                    </select>
                </div>
                <div className="section">
                    <h2>พันธ์ุ</h2>
                    <h2>:</h2>
                    <input className="inputText" type="text" id="gene" name="gene" onChange={e => setGene(e.target.value)} placeholder={goatDetails.gene}></input>
                </div>
                <div className="section">
                    <h2>วันเกิด</h2>
                    <h2>:</h2>
                    <input className="inputText" type="text" onFocus={e => {e.currentTarget.type = "date"; e.currentTarget.focus();}} onBlur={e => {e.currentTarget.type = "text"; e.currentTarget.placeholder = goatDetails.birthDate;}} onChange={e => setBirthDate(e.target.value)} id="birthDate" name="birthDate" placeholder={goatDetails.birthDate}></input>
                </div>
                <div className="section">
                    <h2>น้ำหนักแรกเกิด(กก.)</h2>
                    <h2>:</h2>
                    <input className="inputText" type="text" id="bornWeight" name="bornWeight" onChange={e => setBornWeight(e.target.value)} placeholder={goatDetails.bornWeight}></input>
                </div>
                <div className="section">
                    <h2>เลขเบอร์พ่อ</h2>
                    <h2>:</h2>
                    <input className="inputText" type="text" id="Fnum" name="Fnum" onChange={e => setFnum(e.target.value)} placeholder={goatDetails.Fnum}></input>
                </div>
                <div className="section">
                    <h2>พันธุ์พ่อ</h2>
                    <h2>:</h2>
                    <input className="inputText" type="text" id="Fgene" name="Fgene" onChange={e => setFgene(e.target.value)} placeholder={goatDetails.Fgene}></input>
                </div>
                <div className="section">
                    <h2>เลขเบอร์แม่</h2>
                    <h2>:</h2>
                    <input className="inputText" type="text" id="Mnum" name="Mnum" onChange={e => setMnum(e.target.value)} placeholder={goatDetails.Mnum}></input>
                </div>
                <div className="section">
                    <h2>พันธุ์แม่</h2>
                    <h2>:</h2>
                    <input className="inputText" type="text" id="Mgene" name="Mgene" onChange={e => setMgene(e.target.value)} placeholder={goatDetails.Mgene}></input>
                </div>
                <div className="section">
                    <h2>โรคและความพิการที่พบ</h2>
                    <h2>:</h2>
                    <input className="inputText" type="text" id="DD" name="DD" onChange={e => setDD(e.target.value)} placeholder={goatDetails.DD}></input>
                </div>

            </div>


            <div className='gridSubThree'>
            <button className="ยืนยันแล้วเพิ่ม"  onClick={handlerSubmit1}>ยืนยันแล้วกลับหน้าแพะ</button>
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