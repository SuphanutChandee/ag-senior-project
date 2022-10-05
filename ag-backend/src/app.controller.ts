import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  getHello(): any {
    return "Hello World"
  }

  @Get('OverviewHeaderList')
  OverviewHeaderList(): any {
    return {
      total: 100,
      abnormaly: "รุนแรง",
      total_ab: 10,
      ablv0: 90,
      ablv1: 7,
      ablv2: 2,
      ablv3: 1
    };
  }

  @Get('OverviewPredictList')
  OverviewPredictList(): any {
    return [
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