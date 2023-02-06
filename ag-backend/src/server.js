

function DeviceUpdate(device, lastActivity, sumActivity, zeroActivity) {
    let url = 'http://localhost:3000/updateDeviceList?device='.concat("", device);

    var XMLHttpRequest = require('xhr2');
    let Http = new XMLHttpRequest();

    Http.open("PUT", url);

    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(JSON.stringify({ "device": device, "lastActivity": lastActivity, "sumActivity": sumActivity, "zeroActivity": zeroActivity }));
/*
    Http.onreadystatechange = (e) => {
        console.log("DeviceUpdate " + Http.responseText)
    }*/
}
//data = {"gnum": "41119", "status": "อุ้มท้อง", "unit": 1, "gender": "เมีย", ...};
async function GoatDetailsUpdate(gnum, data) {
    let url = "http://localhost:3000/updateGoatsDetails?gnum=".concat("", gnum);

    var XMLHttpRequest = require('xhr2');
    let Http = new XMLHttpRequest();

    Http.open("PUT", url);

    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(JSON.stringify(data));
/*
    Http.onreadystatechange = (e) => {
        console.log("GoatDetailsUpdate " + Http.responseText)
    }*/
}

//data = { "total": 6, "abnormaly": "รุนแรง", "total_ab": 16.7, "ablv0": 5, ...};
async function OverviewHeaderUpdate(data) {
    let url = "http://localhost:3000/updateOverviewHeader";

    var XMLHttpRequest = require('xhr2');
    let Http = new XMLHttpRequest();

    Http.open("PUT", url);

    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(JSON.stringify(data));
/*
    Http.onreadystatechange = (e) => {
        console.log("OverviewHeaderUpdate " + Http.responseText)
    }*/
}

//data = { "unit": 1, "total": 3, "color": "เขียว", "ablv0": 4, "ablv1": 0, ...};
async function OverviewHousesUpdate(unit, data) {
    let url = "http://localhost:3000/updateOverviewHouses?unit=".concat("", unit);

    var XMLHttpRequest = require('xhr2');
    let Http = new XMLHttpRequest();

    Http.open("PUT", url);

    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(JSON.stringify(data));
/*
    Http.onreadystatechange = (e) => {
        console.log("OverviewHousesUpdate " + Http.responseText)
    }*/
}

async function LineNotify(gnum) {

    var data = JSON.stringify({
        "to": "U437f0863d1ddd93aca8287a05d814344",
        "messages": [
            {
            "type": "text",
            "text": "พบ อาการ/พฤติกรรม ที่ผิดปกติของแพะ"
            }
            ]
        });

    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    /*
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            console.log(this.responseText);
        }
    });*/
    
    xhr.open("POST", "https://api.line.me/v2/bot/message/push");
    xhr.setRequestHeader("Authorization", "Bearer RaCqe7oD4CrvN3TxnGmlmJcAQtvcI/fmp19q0XNEp+rwVpPmyBMWSUiTkzg7EjptDAbwPd3GGz05NLS8rb2bRtaf2KKmBgLMsA06KwHpzZmZH64k5yf7UY+8J41/YqkZjYC/BAMwCSJ1fi9B7AasbQdB04t89/1O/w1cDnyilFU=");
    xhr.setRequestHeader("Content-Type", "application/json");
    
    xhr.send(data);
}

function updateAndAleart (gnum, unit, GD, OHeader, OHouse) {
    GoatDetailsUpdate(gnum, GD);
    OverviewHeaderUpdate(OHeader);
    OverviewHousesUpdate(unit, OHouse);
    LineNotify(gnum);
}

function updateButNotAleart (gnum, unit, GD, OHeader, OHouse) {
    GoatDetailsUpdate(gnum, GD);
    OverviewHeaderUpdate(OHeader);
    OverviewHousesUpdate(unit, OHouse);
}

function upLv (cur, plus) {
    if (cur + plus >= 3) return dic[3];
    else return dic[cur + plus];
}

function deLv (cur, de) {
    if (cur - de <= 0) return dic[0];
    else return dic[cur - de];
}

const behavior = {0: "ปกติ", 1: "ผิดปกติเล็กน้อย", 2: "ผิดปกติปานกลาง", 3: "ผิดปกติรุนแรง"};
const behaviorLV = {"ปกติ" : 0, "ผิดปกติเล็กน้อย" : 1, "ผิดปกติปานกลาง" : 2, "ผิดปกติรุนแรง" : 3};
const chance = {0: "ไม่มีโอกาส", 1: "โอกาสต่ำ", 2: "โอกาสปานกลาง", 3: "โอกาสสูง"};
const chanceLV = {"ไม่มีโอกาส" : 0, "โอกาสต่ำ" : 1, "โอกาสปานกลาง" : 2, "โอกาสสูง" : 3};
const colorDic = {"ปกติ": "เขียว", "ผิดปกติเล็กน้อย": "เหลือง", "ผิดปกติปานกลาง": "ฟ้า", "ผิดปกติรุนแรง": "แดง"
                , "โอกาสต่ำ": "เหลือง", "โอกาสปานกลาง": "ฟ้า", "โอกาสสูง": "แดง"};
//console.log(colorDic.ปกติ);
const eventType = ["ขายแพะออก", "นำแพะนอกเข้าฝูง", "เปลี่ยนอาหารข้น-หยาบ", "ย้ายคอก-โรงเรือน", "ผสม", "หย่านม", "ฉีดวัคซีน", "คลอด", "ผ่าตัด"];
const avgActivity = 35; //Action ที่ควรจะเป็นใน 10 นาที

Date.prototype.timeNow = function () { return ((this.getHours() < 10)?"0":"") + this.getHours();}
const wakeup = 5; //ตื่นตอน ตี 5
const sleep = 20; //นอนหลับตอน 2 ทุ่ม

function fetchgoatDetails (gnum) {
    
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    //xhr.open("GET", "http://localhost:3000/FindOneGoatDetails?gnum=" + gnum);
    //xhr.send();
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = (e) => {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status === 200) {
                //console.log('SUCCESS', xhr.responseText);
                resolve(xhr.responseText);
            } else {
                //console.warn('request_error');
            }
        };
        xhr.open("GET", "http://localhost:3000/FindOneGoatDetails?gnum=" + gnum);
        xhr.send();
    });
}

function fetchOverviewHeader () {
    
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = (e) => {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
            }
        };
        xhr.open("GET", "http://localhost:3000/OverviewHeader");
        xhr.send();
    });
    //const OverviewHeader = JSON.stringify(temp2);
    //console.log(OverviewHeader)
}

function fetchoverviewHouses (unit) {
    
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = (e) => {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
            }
        };
        xhr.open("GET", "http://localhost:3000/FindOneOverviewHouses?unit="+unit);
        xhr.send();
    });
    //const overviewHouses = JSON.stringify(temp3);
    //console.log(overviewHouses)
}

function fetchLineAleartLV () {
    
    var XMLHttpRequest = require('xhr2');
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = (e) => {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
            }
        };
        xhr.open("GET", 'http://localhost:3000/LineAleart');
        xhr.send();
    });
}

function analyze (device, lastActivity, sumActivity, zeroActivity){
    gnum = device;
    lastActivity = parseInt(lastActivity);
    sumActivity = parseInt(sumActivity);
    nap = parseInt(zeroActivity);

    let activityDiff = Math.abs(((lastActivity - avgActivity)/avgActivity)*100); //ผลต่างของ avgActivity กับ lastActivity เป็น %

    var HoursNow = parseInt(new Date().timeNow()); //เวลา ปจบ. เป็น ชม.

    

    fetchgoatDetails(gnum).then(res => {
        const goatDetails = JSON.parse(res);
        //console.log(goatDetails);
        let BHlv = behaviorLV[goatDetails.behavior];
        let unit = goatDetails.unit;
        fetchOverviewHeader().then(res2 => {
            const overviewHeader = JSON.parse(res2);
            //console.log(overviewHeader);
            let ablv = [];
            ablv[0] = overviewHeader[0].ablv0;
            ablv[1] = overviewHeader[0].ablv1;
            ablv[2] = overviewHeader[0].ablv2;
            ablv[3] = overviewHeader[0].ablv3;
            //console.log(ablv);
            fetchoverviewHouses(unit).then(res3 => {
                const overviewHouses = JSON.parse(res3);
                //console.log(overviewHouses);
                let oablv = [];
                oablv[0] = overviewHouses.ablv0;
                oablv[1] = overviewHouses.ablv1;
                oablv[2] = overviewHouses.ablv2;
                oablv[3] = overviewHouses.ablv3;
                //console.log(oablv);
                //////////////////////////////////
                //////////เขียนเงื่อนไขในนี้///////////

                if (HoursNow >= wakeup && HoursNow < sleep) {
                    if (nap >= 6 && BHlv != 3){ //หลับนานอย่างน้อย 1 ชม.
                        ablv[BHlv] = ablv[BHlv] - 1;
                        oablv[BHlv] = oablv[BHlv] - 1;
                        BHlv = 3;
                        ablv[BHlv] = ablv[BHlv] + 1;  
                        oablv[BHlv] = oablv[BHlv] + 1;  
                    }
                    else{ //เงื่อนไขที่เหลือให้อยู่ในนี้
                        if (nap == 0){
                            if (activityDiff < 10) BHlv = deLv(BHlv, 1);
                            else if (activityDiff < 20) BHlv = 1;
                            else if (activityDiff < 30) BHlv = 2;
                            else BHlv = 3;
                        }
                    }
                }
                /*
                else if (HoursNow == sleep) { 
                    //เมื่อแพะนอนให้อัพเดท Activity สะสมใน GoatDetails
                    let Activity = goatDetails.Activity;
                    for (let i=0; i<Activity.length-1; i++){
                        Activity[i] = Activity[i+1];
                    }
                    Activity[Activity.length-1] = sumActivity;
                    GoatDetailsUpdate(gnum, {"Activity": Activity});
                }*/

                let total_ab = ((ablv[1]+ablv[2]+ablv[3]) / overviewHeader[0].total) * 100;
                total_ab = total_ab.toFixed(2);
                let GD = {"behavior": behavior[BHlv], "color": colorDic[behavior[BHlv]]};
                let OHeader = { "total": overviewHeader[0].total, "abnormaly": behavior[BHlv], "total_ab": total_ab, "ablv0": ablv[0], "ablv1": ablv[1], "ablv2": ablv[2], "ablv3": ablv[3]}
    
                let ocolor = "เขียว"
                if(oablv[3] != 0) ocolor = "แดง";
                else if(oablv[2] != 0) ocolor = "ฟ้า";
                else if(oablv[1] != 0) ocolor = "เหลือง";
                let OHouse = { "unit": unit, "total": overviewHouses.total, "color": ocolor, "ablv0": oablv[0], "ablv1": oablv[1], "ablv2": oablv[2], "ablv3": oablv[3]};
                console.log(gnum)
                console.log(unit)
                console.log(GD)
                console.log(OHeader)
                console.log(OHouse)

                /*
                fetchLineAleartLV().then(res4 => {
                    const LineAleartLV = JSON.parse(res4);
                    //console.log(LineAleartLV[0]);        
                    if (BHlv > LineAleartLV[0].LineAleartLV) updateAndAleart(gnum, unit, GD, OHeader, OHouse);
                    else updateButNotAleart(gnum, unit, GD, OHeader, OHouse);
                })*/

                


                //////////////////////////////////
            });
        });
    });

/*
    

    
    
    

    if (HoursNow >= wakeup && HoursNow < sleep) {
        if (nap >= 6 && BHlv != 3){ //หลับนานอย่างน้อย 1 ชม.
            ablv[BHlv] = ablv[BHlv] - 1;
            oablv[BHlv] = oablv[BHlv] - 1;
            BHlv = 3;
            ablv[BHlv] = ablv[BHlv] + 1;  
            oablv[BHlv] = oablv[BHlv] + 1;  
        }
        else{ //เงื่อนไขที่เหลือให้อยู่ในนี้
            if (nap > 0){
                if (activityDiff < 10) BHlv = deLv(BHlv, 1);
                else if (activityDiff < 20) BHlv = 1;
                else if (activityDiff < 30) BHlv = 2;
                else BHlv = 3;
            }
        }

    }
    else if (HoursNow == sleep) { //เมื่อแพะนอนให้อัพเดท Activity สะสมใน GoatDetails
        let Activity = goatDetails.Activity;
        for (let i=0; i<Activity.length-1; i++){
            Activity[i] = Activity[i+1];
        }
        Activity[Activity.length-1] = sumActivity;
        GoatDetailsUpdate(gnum, {"Activity": Activity});
    }


    let total_ab = ((ablv[1]+ablv[2]+ablv[3]) / ablv[0]) * 100;
    let GD = {"behavior": behaviorLV[BHlv], "color": colorDic[behaviorLV[BHlv]]};
    let OHeader = { "total": OverviewHeader.total, "abnormaly": behaviorLV[BHlv], "total_ab": total_ab, "ablv0": ablv[0], "ablv1": ablv[1], "ablv2": ablv[2], "ablv3": ablv[3]}
    
    let ocolor = "เขียว"
    if(oablv[3] != 0) ocolor = "แดง";
    else if(oablv[2] != 0) ocolor = "ฟ้า";
    else if(oablv[1] != 0) ocolor = "เหลือง";
    let OHouse = { "unit": unit, "total": overviewHouses.total, "color": ocolor, "ablv0": oablv[1], "ablv1": oablv[1], "ablv2": oablv[2], "ablv3": oablv[3]};
    console.log(gnum)
    console.log(unit)
    console.log(GD)
    console.log(OHeader)
    console.log(OHouse)
    if (BHlv > 0) updateAndAleart(gnum, unit, GD, OHeader, OHouse);
    else updateButNotAleart(gnum, unit, GD, OHeader, OHouse);
    */


}






















var WebSocketServer = require('websocket').server;
var http = require('http');
const { ReadableStreamBYOBRequest } = require('node:stream/web');

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(5000, function() {
    console.log((new Date()) + ' Server is listening on port 5000');
});

wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

wsServer.on('request', function(request) {
    //console.log(request)
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
        request.reject();
        console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
        return;
    }
    
    var connection = request.accept(null, request.origin)
    console.log((new Date()) + ' Connection accepted.');

    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            let temp = message.utf8Data.replace(/{/g, "").replace(/}/g, "").replace(/:/g, "").replace('device', "").replace('lastActivity', "").replace('sumActivity', "").replace('zeroActivity', "").replace(/"/g, "");
            temp = temp.split(',');
            let device = temp[0];
            let lastActivity = temp[1];
            let sumActivity = temp[2];
            let zeroActivity = temp[3]
            DeviceUpdate(device, lastActivity, sumActivity, zeroActivity)
            console.log('Received Message: ' + message.utf8Data);
            //////////////////
            analyze(device, lastActivity, sumActivity, zeroActivity);
            //////////////////

        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            //connection.sendBytes(message.binaryData);
        }
    });

    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});