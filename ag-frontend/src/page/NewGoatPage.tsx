import React, { useState, useEffect } from 'react'

function NewGoatPage () {

    return (
            <div>
            <div className="section">
                <h2>เลขเบอร์แพะ</h2>
                <h2>:</h2>
                <input className="inputText" type="text" id="gnum" name="gnum" placeholder="กรุณากรอกเลขเบอร์แพะ"></input>
            </div>
            <div className="section">
                <h2>สถานะ</h2>
                <h2>:</h2>
                <input className="inputText" type="text" id="status" name="status" placeholder="สถาณะ เช่น ตั้งครร อย่านม เป็นต้น, หากไม่ทราบหรือไม่ต้องการกรอก ให้ใส่ -"></input>
            </div>
            <div className="section">
                <h2>โรงเรือน</h2>
                <h2>:</h2>
                <input className="inputText" type="text" id="unit" name="unit" placeholder="กรุณากรอกเลขโรงเรือน"></input>
            </div>
            <div className="section">
                <h2>เพศ</h2>
                <h2>:</h2>
                <select className="inputText" name="gender" id="gender">
                    <option value="" disabled selected hidden>กรุณาเลือกเพศ</option>
                    <option value="เพศผู้">เพศผู้</option>
                    <option value="เพศเมีย">เพศเมีย</option>
                </select>
            </div>
            <div className="section">
                <h2>พันธ์ุ</h2>
                <h2>:</h2>
                <input className="inputText" type="text" id="gene" name="gene" placeholder="หากไม่ทราบหรือไม่ต้องการกรอก ให้ใส่ -"></input>
            </div>
            <div className="section">
                <h2>วันเกิด</h2>
                <h2>:</h2>
                <input className="inputText" type="text" id="birthDate" name="birthDate" placeholder="กรุณากรอกในรูปแบบ วัน/เดือน/ปี, หากไม่ทราบหรือไม่ต้องการกรอก ให้ใส่ -"></input>
            </div>
            <div className="section">
                <h2>น้ำหนักแรกเกิด(กก.)</h2>
                <h2>:</h2>
                <input className="inputText" type="text" id="bornWeight" name="bornWeight" placeholder="หากไม่ทราบหรือไม่ต้องการกรอก ให้ใส่ -"></input>
            </div>
            <div className="section">
                <h2>เลขเบอร์พ่อ</h2>
                <h2>:</h2>
                <input className="inputText" type="text" id="Fnum" name="Fnum" placeholder="หากไม่ทราบหรือไม่ต้องการกรอก ให้ใส่ -"></input>
            </div>
            <div className="section">
                <h2>พันธุ์พ่อ</h2>
                <h2>:</h2>
                <input className="inputText" type="text" id="Fgene" name="Fgene" placeholder="หากไม่ทราบหรือไม่ต้องการกรอก ให้ใส่ -"></input>
            </div>
            <div className="section">
                <h2>เลขเบอร์แม่</h2>
                <h2>:</h2>
                <input className="inputText" type="text" id="Mnum" name="Mnum" placeholder="หากไม่ทราบหรือไม่ต้องการกรอก ให้ใส่ -"></input>
            </div>
            <div className="section">
                <h2>พันธุ์แม่</h2>
                <h2>:</h2>
                <input className="inputText" type="text" id="Mgene" name="Mgene" placeholder="หากไม่ทราบหรือไม่ต้องการกรอก ให้ใส่ -"></input>
            </div>
            <div className="section">
                <h2>โรคและความพิการที่พบ</h2>
                <h2>:</h2>
                <input className="inputText" type="text" id="DD" name="DD" placeholder="หากไม่ทราบหรือไม่ต้องการกรอก ให้ใส่ -"></input>
            </div>

            
            <div className='gridSubThree'>
            <form action="/newgoat">
                <button className="ยืนยันแล้วเพิ่ม">ยืนยันแล้วเพิ่มแพะ</button>
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
export default NewGoatPage