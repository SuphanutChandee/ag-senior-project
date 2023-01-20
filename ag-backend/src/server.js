
function DeviceUpdate(device, lastActivity, sumActivity, zeroActivity) {
    let url = 'http://localhost:3000/updateDeviceList?device='.concat("", device);

    var XMLHttpRequest = require('xhr2');
    let Http = new XMLHttpRequest();

    Http.open("PUT", url);

    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(JSON.stringify({ "device": device, "lastActivity": lastActivity, "sumActivity": sumActivity, "zeroActivity": zeroActivity }));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
}

const behaviorLV = {0: "ปกติ", 1: "ผิดปกติเล็กน้อย", 2: "ผิดปกติปานกลาง", 3: "ผิดปกติรุนแรง"};
const chanceLV = {0: "โอกาสต่ำ", 1: "โอกาสปานกลาง", 2: "โอกาสสูง"};
const colorDic = {"ปกติ": "เขียว", "ผิดปกติเล็กน้อย": "เหลือง", "ผิดปกติปานกลาง": "ฟ้า", "ผิดปกติรุนแรง": "เขียว"
                , "โอกาสต่ำ": "เหลือง", "โอกาสปานกลาง": "ฟ้า", "โอกาสสูง": "แดง"};
//console.log(colorDic["ปกติ"]);
//console.log(colorDic.ปกติ);
const eventType = ["ขายแพะออก", "นำแพะนอกเข้าฝูง", "เปลี่ยนอาหารข้น-หยาบ", "ย้ายคอก-โรงเรือน", "ผสม", "หย่านม", "ฉีดวัคซีน", "คลอด", "ผ่าตัด"];
const avgActivity = 35; //Action ที่ควรจะเป็นใน 10 นาที

Date.prototype.timeNow = function () { return ((this.getHours() < 10)?"0":"") + this.getHours();}
const wakeup = 5; //ตื่นตอน ตี5
const sleep = 20; //นอนหลับตอน 2 ทุ่ม


function analyze(device, lastActivity, sumActivity, zeroActivity) {
    device = parseInt(device);
    lastActivity = parseInt(lastActivity);
    sumActivity = parseInt(sumActivity);
    zeroActivity = parseInt(zeroActivity);

    let activityDiff = Math.abs(((lastActivity - avgActivity)/avgActivity)*100); //ผลต่างของ avgActivity กับ lastActivity เป็น %

    var HoursNow = parseInt(new Date().timeNow()); //เวลา ปจบ. เป็น ชม.

}






















var WebSocketServer = require('websocket').server;
var http = require('http');

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
    console.log(request)
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