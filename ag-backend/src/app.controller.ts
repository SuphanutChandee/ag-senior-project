import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

let OverviewHeader = {
  "total": 6,
  "abnormaly": "รุนแรง",
  "total_ab": 16.67,
  "ablv0": 83.33,
  "ablv1": 0,
  "ablv2": 0,
  "ablv3": 16.67
};

let OverviewHouses = [
  {
    "unit": 1,
    "total": 3,
    "color": "เขียว",
    "ablv0": 3,
    "ablv1": 0,
    "ablv2": 0,
    "ablv3": 0
  },
  {
    "unit": 2,
    "total": 3,
    "color": "แดง",
    "ablv0": 2,
    "ablv1": 0,
    "ablv2": 0,
    "ablv3": 1
  },
]

let unitdata = [
  {
    "goat" : [
      { "gnum" : "41119", "gender" : "เมีย", "status" : "อุ้มท้อง", "age" : 3, "behavior" : "ปกติ", "color": "เขียว" },
      { "gnum" : "41120", "gender" : "เมีย", "status" : "อุ้มท้อง", "age" : 3, "behavior" : "ปกติ", "color": "เขียว" },
      { "gnum" : "41121", "gender" : "เมีย", "status" : "อุ้มท้อง", "age" : 3, "behavior" : "ปกติ", "color": "เขียว" },
    ]
  },
  {
    "goat" : [
      { "gnum" : "41122", "gender" : "เมีย", "status" : "อุ้มท้อง", "age" : 3, "behavior" : "ปกติ", "color": "เขียว" },
      { "gnum" : "41123", "gender" : "เมีย", "status" : "อุ้มท้อง", "age" : 3, "behavior" : "ผิดปกติรุนแรง", "color": "แดง" },
      { "gnum" : "41124", "gender" : "เมีย", "status" : "อุ้มท้อง", "age" : 3, "behavior" : "ปกติ", "color": "เขียว"},
    ]
  }
]

let AllGoatsNum = [41119, 41120, 41121, 41122, 41123, 41124]

let EventList = [
  {
    "date": "27/7/2565",
    "type": "ฉีดวัคซีน-จ่ายยา",
    "details": "หมอสุชัย มาฉีดบาโคแล็กให้",
    "goats": ["41122", "41123", "41124"]
  },
  {
    "date": "24/7/2565",
    "type": "เปลี่ยนอาหารข้น-หยาบ",
    "details": "พีแลค ของ นวิทริไลน์",
    "goats": ["41119", "41120", "41121", "41122", "41123", "41124"]
  },
  {
    "date": "20/7/2565",
    "type": "ฉีดวัคซีน-จ่ายยา",
    "details": "หมอสุชัย มาฉีดโบวิแบล็คให้",
    "goats": ["41119", "41120", "41121", "41122", "41123", "41124"]
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

  @Get('OverviewHousesList')
  OverviewHousesList(): any {
    return OverviewHouses;
  }

  @Get('GoatInHousesList')
  GoatInHousesList(): any {
    return unitdata;
  }

  @Get('EventList')
  EventList(): any {
    return EventList;
  }

  @Get('AllGoatsNum')
  AllGoats(): any {
    return AllGoatsNum;
  }
  
}

/*
{
      "date": "27/7/2565",
      "name": "ฉีดบาโคแล็ก",
      "type": "ฉีดวัคซีน-จ่ายยา",
      "details": "หมอสุชัย มาฉีดให้",
      other: "-",
      "chance": "สูง"
    };
*/
/*
[
      {
        "date": "27/7/2565",
        "name": "ฉีดบาโคแล็ก",
        "type": "ฉีดวัคซีน-จ่ายยา",
        "details": "หมอสุชัย มาฉีดให้",
        other: "-",
        "chance": "สูง"
      },
      {
        "date": "24/7/2565",
        "name": "พีแลค",
        "type": "เปลี่ยนอาหารข้น-หยาบ",
        "details": "นวิทริไลน์",
        other: "10 แถม 2",
        "chance": "ปานกลาง"
      },
      {
        "date": "20/7/2565",
        "name": "ฉีดโบวิแบล็ค",
        "type": "ฉีดวัคซีน-จ่ายยา",
        "details": "หมอสุชัย มาฉีดให้",
        other: "-",
        "chance": "ต่ำ"
      },
    ];
*/