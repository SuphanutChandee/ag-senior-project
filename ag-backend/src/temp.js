function fetchGoatInHousesList (gnum) {
    
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
        xhr.open("GET", "http://localhost:3000/findOneGoatInHousesList?gnum=" + gnum);
        xhr.send();
    });
}

async function GoatInHousesListUpdate(gnum, data) {
    let url = "http://localhost:3000/updateGoatInHousesList?gnum=".concat("", gnum);

    var XMLHttpRequest = require('xhr2');
    let Http = new XMLHttpRequest();

    Http.open("PUT", url);

    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    Http.send(JSON.stringify(data));

    Http.onreadystatechange = (e) => {
        console.log("GoatDetailsUpdate " + Http.responseText)
    }
}

fetchGoatInHousesList("AG-01").then(res => {
    const GIHL = JSON.parse(res);
    //console.log(GIHL);
    for (let i=0; i< GIHL.goat.length; i++){
        if (GIHL.goat[i].gnum == "AG-01"){
            GIHL.goat[i].color = "เขียว" 
            //console.log(GIHL.goat)
            let finalres = {"goat" : GIHL.goat}
            console.log(finalres)
            GoatInHousesListUpdate("AG-01", finalres)
        }
        
        
    }
})