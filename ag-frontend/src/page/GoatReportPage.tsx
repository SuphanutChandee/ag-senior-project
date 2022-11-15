import React, { useState, useEffect } from 'react'
import MockedUPGraph from '../img/GroupMockup.png'

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
            color: "", 
            },] 
        }])
    const [gnum, setGnum] = useState("")

    useEffect(() => {
        const fetchData = async () => {
          // get the data from the api
            const data = await fetch('http://localhost:3000/GoatsDetails');
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
                                                <img src={MockedUPGraph} className='MockedUPGraph'/>
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


/*
return (
        <div>
            {allGoatsDetails.map((allGoatsDetails, idx) => (
                <div key={idx} className="centerDiv">
                {allGoatsDetails.gnum == gnum ? (
                    <div>

                        <h1 className='tab1'>หมายเลขแพะ : {allGoatsDetails.gnum} ({allGoatsDetails.behavior})</h1>
                        <h2 className='tab1'>โรงเรือนหมายเลข {allGoatsDetails.unit} เพศ{allGoatsDetails.gender} อายุ {allGoatsDetails.age} ปี สถานะ {allGoatsDetails.status} (โรคและความพิการที่ได้บันทึกเอาไว้{allGoatsDetails.DD})</h2>
                        <h3 className='tab1'>เกิดเมื่อวันที่ {allGoatsDetails.birthDate} นน.แรกเกิด {allGoatsDetails.bornWeight} พันธุ์ {allGoatsDetails.gene} เบอร์พ่อ {allGoatsDetails.Fnum} พันธุ์พ่อ {allGoatsDetails.Fgene} เบอร์แม่ {allGoatsDetails.Mnum} พันธุ์แม่ {allGoatsDetails.Mgene}</h3>
                        
                        <div>
                            {allGoatsPredicts.map((allGoatsPredicts, idx2) => (
                                <div key={idx2} className="centerDiv">
                                    {allGoatsPredicts.gnum == gnum ? (
                                        <div>
                                            <div>
                                                <img src={MockedUPGraph} className='MockedUPGraph'/>
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