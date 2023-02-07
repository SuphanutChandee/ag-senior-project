function updateCollectDataList(device, lastActivity, sumActivity, zeroActivity) {
    let url = 'http://localhost:3000/updateCollectDataList?device='.concat("", device);

    var XMLHttpRequest = require('xhr2');
    let Http = new XMLHttpRequest();

    Http.open("PUT", url);

    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(JSON.stringify({ "lastActivity": lastActivity, "sumActivity": sumActivity, "zeroActivity": zeroActivity }));
/*
    Http.onreadystatechange = (e) => {
        console.log("updateCollectDataList " + Http.responseText)
    }*/
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
            updateCollectDataList(device, lastActivity, sumActivity, zeroActivity)
            console.log('Received Message: ' + message.utf8Data);

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