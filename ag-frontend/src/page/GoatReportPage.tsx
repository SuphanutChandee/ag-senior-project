import React, { useState, useEffect } from 'react'
import { Chart } from "react-google-charts";

function GoatReportPage () {

    const [GoatDetails, setGoatDetails] = useState({ 
        gnum : "", 
        status : "", 
        unit : 0, 
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
        predicts : [{ 
            date: "", 
            name: "", 
            type: "", 
            details: "", 
            chance: "", 
            color: "" 
            }],
        Activity : [0] 
        })
    const [gnum, setGnum] = useState("")

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
            //fetch('http://localhost:3000/GoatsDetails').then(data => console.log(data.json()));
          // convert the data to json
            const json = await data.json();
          // set state with the result 
            setGoatDetails(json);
        }
        fetchData();
    },[]);

    function ActivityChart(a:Number, b:Number, c:Number, d:Number, e:Number, f:Number, g:Number):any {

        let data=[
            ["", "Activity"],
            ["ย้อนหลัง 7 วัน", a],
            ["ย้อนหลัง 6 วัน", b],
            ["ย้อนหลัง 5 วัน", c],
            ["ย้อนหลัง 4 วัน", d],
            ["ย้อนหลัง 3 วัน", e],
            ["ย้อนหลัง 2 วัน", f],
            ["ย้อนหลัง 1 วัน", g]
            ]

        const options = {
            chart: {
                title: "Activity ของแพะใน 7 วันก่อนหน้า"
            },
        };

        return (
            <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        );
    }

    return (
        <div>
                <div>
                    <h1 className='tab1'>หมายเลขแพะ : {GoatDetails.gnum} ({GoatDetails.behavior})</h1>
                    <h2 className='tab1'>โรงเรือนหมายเลข {GoatDetails.unit} เพศ{GoatDetails.gender} อายุ {GoatDetails.age} ปี สถานะ {GoatDetails.status} (โรคและความพิการที่ได้บันทึกเอาไว้{GoatDetails.DD})</h2>
                    <h3 className='tab1'>เกิดเมื่อวันที่ {GoatDetails.birthDate} นน.แรกเกิด {GoatDetails.bornWeight} พันธุ์ {GoatDetails.gene} เบอร์พ่อ {GoatDetails.Fnum} พันธุ์พ่อ {GoatDetails.Fgene} เบอร์แม่ {GoatDetails.Mnum} พันธุ์แม่ {GoatDetails.Mgene}</h3>
                        
                    <div>
                        {ActivityChart(GoatDetails.Activity[0],GoatDetails.Activity[1],GoatDetails.Activity[2],GoatDetails.Activity[3],GoatDetails.Activity[4],GoatDetails.Activity[5],GoatDetails.Activity[6])}
                    </div>
                    <div>
                    {GoatDetails.predicts.map((GoatPredicts, idx2) => (
                            <div key={idx2} className="centerDiv">
                                <div key={idx2} className="centerDivMorePadding">
                                    <form action="/Event">
                                        <button className={GoatPredicts.color}><h2 className='tab4'>{GoatPredicts.date} : {GoatPredicts.name} : "{GoatPredicts.type}" : {GoatPredicts.details} ({GoatPredicts.chance})</h2></button>
                                    </form>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            
            
            <form action="/">
                <button className="ย้อนกลับ">กลับหน้าหลัก</button>
            </form>
            <form action={"/editgoat/"+gnum}>
                <button className="แก้ไขข้อมูลแพะ">แก้ไขข้อมูลแพะ</button>
            </form>
        </div>
        
    )
}
export default GoatReportPage

/*
import React, { useState, useEffect } from 'react'
import MockedUPGraph from '../img/GroupMockup.png'
import { Chart } from "react-google-charts";

function GoatReportPage () {

    const [goatsDetails, setGoatsDetails] = useState([{ 
        gnum : "", 
        status : "", 
        unit : 0, 
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
        predicts : [{ 
            date: "", 
            name: "", 
            type: "", 
            details: "", 
            chance: "", 
            color: "" 
            }],
        Activity : [0] 
        }])
    const [gnum, setGnum] = useState("")

    useEffect(() => {
        const fetchData = async () => {
          // get the data from the api
            const data = await fetch('http://localhost:3000/GoatsDetails');
            //fetch('http://localhost:3000/GoatsDetails').then(data => console.log(data.json()));
          // convert the data to json
            const json = await data.json();
          // set state with the result 
            setGoatsDetails(json);
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

/*
    function ReportBar() {
        let i=0;
        let a=0, b=0, c=0, d=0, e=0, f=0, g=0;

        const data = [
            ["date", "Activity"],
            ["11/11", a],
            ["12/11", b],
            ["13/11", c],
            ["14/11", d],
            ["15/11", e],
            ["16/11", f],
            ["17/11", g]
        ];

        const options = {
            chart: {
                title: "",
                subtitle: "",
            },
        };

        return (
            <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        );
    }
*/
/*
return (
    <div>
        {goatsDetails.map((allGoatsDetails, idx) => (
            <div key={idx} className="centerDiv">
            {allGoatsDetails.gnum == gnum ? (
                <div>

                    <h1 className='tab1'>หมายเลขแพะ : {allGoatsDetails.gnum} ({allGoatsDetails.behavior})</h1>
                    <h2 className='tab1'>โรงเรือนหมายเลข {allGoatsDetails.unit} เพศ{allGoatsDetails.gender} อายุ {allGoatsDetails.age} ปี สถานะ {allGoatsDetails.status} (โรคและความพิการที่ได้บันทึกเอาไว้{allGoatsDetails.DD})</h2>
                    <h3 className='tab1'>เกิดเมื่อวันที่ {allGoatsDetails.birthDate} นน.แรกเกิด {allGoatsDetails.bornWeight} พันธุ์ {allGoatsDetails.gene} เบอร์พ่อ {allGoatsDetails.Fnum} พันธุ์พ่อ {allGoatsDetails.Fgene} เบอร์แม่ {allGoatsDetails.Mnum} พันธุ์แม่ {allGoatsDetails.Mgene}</h3>
                    
                    <div>
                        {goatsDetails.map((allGoatsPredicts, idx2) => (
                            <div key={idx2} className="centerDiv">
                                {allGoatsPredicts.gnum == gnum ? (
                                    <div>
                                        <div>
                                            <Chart
                                                chartType="Bar"
                                                width="100%"
                                                height="400px"
                                                data={[
                                                    ["", "Activity"],
                                                    ["ย้อนหลัง 7 วัน", allGoatsPredicts.Activity[0]],
                                                    ["ย้อนหลัง 6 วัน", allGoatsPredicts.Activity[1]],
                                                    ["ย้อนหลัง 5 วัน", allGoatsPredicts.Activity[2]],
                                                    ["ย้อนหลัง 4 วัน", allGoatsPredicts.Activity[3]],
                                                    ["ย้อนหลัง 3 วัน", allGoatsPredicts.Activity[4]],
                                                    ["ย้อนหลัง 2 วัน", allGoatsPredicts.Activity[5]],
                                                    ["ย้อนหลัง 1 วัน", allGoatsPredicts.Activity[6]]
                                                ]}
                                                options={{
                                                    chart: {
                                                        title: "Activity ของแพะใน 7 วันก่อรหน้า"
                                                    },
                                                }}
                                            />
                                        </div>

                                        {allGoatsPredicts.predicts.map((Predicts, idx3) => (
                                        <div key={idx3} className="centerDivMorePadding">
                                            <form action="/Event">
                                                <button className={Predicts.color}><h2 className='tab4'>{Predicts.date} : {Predicts.name} : "{Predicts.type}" : {Predicts.details} ({Predicts.chance})</h2></button>
                                            </form>
                                        </div>
                                        ))}

                                    </div>
                                ) : null
                                }
                            </div>
                        ))}
                    </div>

                </div>
            ) : null
            }
            </div>
            ))}

        
        
        <form action="/">
            <button className="ย้อนกลับ">กลับหน้าหลัก</button>
        </form>
        <form action={"/editgoat/"+gnum}>
            <button className="แก้ไขข้อมูลแพะ">แก้ไขข้อมูลแพะ</button>
        </form>
    </div>
    
)
}
export default GoatReportPage

*/