function PUTDATA(message) {
    let temp = message.utf8Data.replace(/{/g, "").replace(/}/g, "").replace(/:/g, "").replace('device', "").replace('activity', "").replace(/"/g, "");
    temp = temp.split(',');
    let device = temp[0];
    let activity = temp[1];

    let url = 'http://localhost:3000/update/'.concat("", device);

    var XMLHttpRequest = require('xhr2');
    let Http = new XMLHttpRequest();

    Http.open("PUT", url);

    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(JSON.stringify({ "activity": activity }));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }

    return true;
}