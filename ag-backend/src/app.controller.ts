import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

let OverviewPredict = [
  {
    date: "27/7/2565",
    name: "ฉีดบาโคแล็ก",
    type: "ฉีดวัคซีน-จ่ายยา",
    details: "หมอสุชัย มาฉีดให้",
    chance: "โอกาสสูง",
    color: "แดง",
  },
  {
    date: "24/7/2565",
    name: "พีแลค",
    type: "เปลี่ยนอาหารข้น-หยาบ",
    details: "นิวทริไลน์",
    chance: "โอกาสปานกลาง",
    color: "ฟ้า",
  },
  {
    date: "20/7/2565",
    name: "ฉีดโบวิแบล็ค",
    type: "ฉีดวัคซีน-จ่ายยา",
    details: "หมอสุชัย มาฉีดให้",
    chance: "โอกาสต่ำ",
    color: "เหลือง",
  },
];

let OverviewHeader = {
  total: 6,
  abnormaly: "รุนแรง",
  total_ab: 16.67,
  ablv0: 5,
  ablv1: 0,
  ablv2: 0,
  ablv3: 1
};

let OverviewHouses = [
  {
    unit: 1,
    total: 3,
    color: "เขียว",
    ablv0: 3,
    ablv1: 0,
    ablv2: 0,
    ablv3: 0
  },
  {
    unit: 2,
    total: 3,
    color: "แดง",
    ablv0: 2,
    ablv1: 0,
    ablv2: 0,
    ablv3: 1
  },
]

let unitdata = [
  {
    goat : [
      { gnum : 41119, gender : "เมีย", status : "อุ้มท้อง", age : 3, behavior : "ปกติ", color: "เขียว" },
      { gnum : 41120, gender : "เมีย", status : "อุ้มท้อง", age : 3, behavior : "ปกติ", color: "เขียว" },
      { gnum : 41121, gender : "เมีย", status : "อุ้มท้อง", age : 3, behavior : "ปกติ", color: "เขียว" },
    ]
  },
  {
    goat : [
      { gnum : 41122, gender : "เมีย", status : "อุ้มท้อง", age : 3, behavior : "ปกติ", color: "เขียว" },
      { gnum : 41123, gender : "เมีย", status : "อุ้มท้อง", age : 3, behavior : "ผิดปกติรุนแรง", color: "แดง" },
      { gnum : 41124, gender : "เมีย", status : "อุ้มท้อง", age : 3, behavior : "ปกติ", color: "เขียว"},
    ]
  }

    
]

let ActivityList = [
  {
    date: "27/7/2565",
    name: "ฉีดบาโคแล็ก",
    type: "ฉีดวัคซีน-จ่ายยา",
    details: "หมอสุชัย มาฉีดให้",
    goats: [41122, 41123, 41124]
  },
  {
    date: "24/7/2565",
    name: "พีแลค",
    type: "เปลี่ยนอาหารข้น-หยาบ",
    details: "นวิทริไลน์",
    goats: [41119, 41120, 41121, 41122, 41123, 41124]
  },
  {
    date: "20/7/2565",
    name: "ฉีดโบวิแบล็ค",
    type: "ฉีดวัคซีน-จ่ายยา",
    details: "หมอสุชัย มาฉีดให้",
    goats: [41119, 41120, 41121, 41122, 41123, 41124]
  },
];

@Controller()
export class AppController {
  @Get()
  getHello(): any {
    return "Hello World"
  }

  @Get('OverviewHeaderList')
  OverviewHeaderList(): any {
    return OverviewHeader;
  }

  @Get('OverviewPredictList')
  OverviewPredictList(): any {
    return OverviewPredict;
  }

  @Get('OverviewHousesList')
  OverviewHousesList(): any {
    return OverviewHouses;
  }

  @Get('GoatInHousesList')
  GoatInHousesList(): any {
    return unitdata;
  }

  @Get('ActivityList')
  ActivityList(): any {
    return ActivityList;
  }
}

/*
{
      date: "27/7/2565",
      name: "ฉีดบาโคแล็ก",
      type: "ฉีดวัคซีน-จ่ายยา",
      details: "หมอสุชัย มาฉีดให้",
      other: "-",
      chance: "สูง"
    };
*/
/*
[
      {
        date: "27/7/2565",
        name: "ฉีดบาโคแล็ก",
        type: "ฉีดวัคซีน-จ่ายยา",
        details: "หมอสุชัย มาฉีดให้",
        other: "-",
        chance: "สูง"
      },
      {
        date: "24/7/2565",
        name: "พีแลค",
        type: "เปลี่ยนอาหารข้น-หยาบ",
        details: "นวิทริไลน์",
        other: "10 แถม 2",
        chance: "ปานกลาง"
      },
      {
        date: "20/7/2565",
        name: "ฉีดโบวิแบล็ค",
        type: "ฉีดวัคซีน-จ่ายยา",
        details: "หมอสุชัย มาฉีดให้",
        other: "-",
        chance: "ต่ำ"
      },
    ];
*/