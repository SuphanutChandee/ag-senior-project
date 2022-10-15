import React, { useState, useEffect } from 'react'

const OverviewHeader = () => {

  const [total, setTotal] = useState(0);
  const [abnormaly, setAbnormaly] = useState("");
  const [total_ab, setTotal_ab] = useState(0);
  const [ablv0, setAbLv0] = useState(0);
  const [ablv1, setAbLv1] = useState(0);
  const [ablv2, setAbLv2] = useState(0);
  const [ablv3, setAbLv3] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3000/OverviewHeaderList')
      .then(res => res.json())
      .then(obj => {
        setTotal(obj.total)
        setAbnormaly(obj.abnormaly)
        setTotal_ab(obj.total_ab)
        setAbLv0(obj.ablv0)
        setAbLv1(obj.ablv1)
        setAbLv2(obj.ablv2)
        setAbLv3(obj.ablv3)
      });
  },[]);

  return (
  <div>
    <h1 className='tab1'>ประชากรแพะรวม : {total} ตัว (อาการผิดปกติในภาพรวม : {abnormaly})</h1>
    <h2 className='tab1'>แพะที่มีความผิดปกติคิดเป็น {total_ab}% ของประชากรทั้งหมด แบ่งได้เป็น : ปกติ {ablv0}% : เล็กน้อย {ablv1}% : ปานกลาง {ablv2}% : รุนแรง {ablv3}% </h2>


  </div>
)}

export default OverviewHeader


/*
import { FC, ChangeEvent, MouseEvent, useState, Dispatch, SetStateAction } from 'react'
import { OverviewHeaderProps } from '../interfaces/OverviewProps'

const OverviewHeader = () => {

  const [total, setTotal] = useState<OverviewHeaderProps | any>(0);
  const [abnormaly, setAbnormaly] = useState("");
  const [total_ab, setTotal_ab] = useState<OverviewHeaderProps | any>(0);
  const [ablv0, setAbLv0] = useState<OverviewHeaderProps | any>(0);
  const [ablv1, setAbLv1] = useState<OverviewHeaderProps | any>(0);
  const [ablv2, setAbLv2] = useState<OverviewHeaderProps | any>(0);
  const [ablv3, setAbLv3] = useState<OverviewHeaderProps | any>(0);

  if (total !== 100) {
    setTotal(100)
    setAbnormaly("รุนแรง")
    setTotal_ab(10)
    setAbLv0(90)
    setAbLv1(7)
    setAbLv2(2)
    setAbLv3(1)
  }

  return (
  <div>
    <h1 className='tab1'>ประชากรแพะรวม : {total} ตัว (อาการผิดปกติในภาพรวม : {abnormaly})</h1>
    <h2 className='tab1'>แพะที่มีความผิดปกติคิดเป็น {total_ab}% ของประชากรทั้งหมด แบ่งได้เป็น : ปกติ {ablv0}% : เล็กน้อย {ablv1}% : ปานกลาง {ablv2}% : รุนแรง {ablv3}% </h2>
  </div>
)}

export default OverviewHeader
*/

/*
import { FC, ChangeEvent, MouseEvent, useState, Dispatch, SetStateAction } from 'react'
import { OverviewPredictProps } from '../interfaces/OverviewProps'
import React from 'react'

type OverviewHeaderList = {
  total: number;
  abnormaly: string;
  total_ab: number;
  ablv0: number;
  ablv1: number;
  ablv2: number;
  ablv3: number;
};

class OverviewHeader extends React.Component<{}, OverviewHeaderList> {
  state: OverviewHeaderList = {
    total: 100,
    abnormaly: "รุนแรง",
    total_ab: 10,
    ablv0: 90,
    ablv1: 7,
    ablv2: 2,
    ablv3: 1
  };

  componentDidMount() {
    fetch('http://localhost:3000/OverviewHeaderList')
      .then(res => res.json())
      .then(obj => {
        this.setState({
          total: obj.total,
          abnormaly: obj.abnormaly,
          total_ab: obj.total_ab,
          ablv0: obj.ablv0,
          ablv1: obj.ablv1,
          ablv2: obj.ablv2,
          ablv3: obj.ablv3
        })
      })
  }

  render() {
    return (
      <div>
    <h1 className='tab1'>ประชากรแพะรวม : {this.state.total} ตัว (อาการผิดปกติในภาพรวม : {this.state.abnormaly})</h1>
    <h2 className='tab1'>แพะที่มีความผิดปกติคิดเป็น {this.state.total_ab}% ของประชากรทั้งหมด แบ่งได้เป็น : ปกติ {this.state.ablv0}% : เล็กน้อย {this.state.ablv1}% : ปานกลาง {this.state.ablv2}% : รุนแรง {this.state.ablv3}% </h2>
  </div>
    );
  }
}

export default OverviewHeader
*/