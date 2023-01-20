const { type } = require("os");

// For the time now
Date.prototype.timeNow = function () { return ((this.getHours() < 10)?"0":"") + this.getHours();}
var HoursNow = parseInt(new Date().timeNow());

console.log(HoursNow);