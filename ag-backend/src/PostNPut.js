const express=require("express");
const app=express();
const mongoose=require("mongoose");
const { async, identity } = require("rxjs");
app.use(express.json());

//DB Connection
mongoose.connect("mongodb+srv://mothmam:1q2w3e4r@cluster0.xrlafdg.mongodb.net/AG",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err)
    {
        console.log("connected to db")
    }else{
        console.log("error")
    }
})


//SCHEMA
const sch={
    id:Number,
    device:String,
    lastActivity:Number,
    sumActivity:Number,
    zeroActivity:Number
}
const monmodel=mongoose.model("devices",sch);


//POST
app.post("/post",async(req,res)=>{
    console.log("inside post function");

    const data=new monmodel({
        //id:req.body.id,
        device:req.body.device,
        lastActivity:req.body.lastActivity,
        sumActivity:req.body.sumActivity,
        zeroActivity:req.body.zeroActivity
    });

    const val=await data.save();
    res.json(val);
    //res.send("posted");
})


//PUT
//app.put("/update/:id",async(req,res)=>{
app.put("/update/:device",async(req,res)=>{
    let updevice=req.params.device;
    let uplastActivity=req.body.lastActivity;
    let upsumActivity=req.body.sumActivity;
    let upzeroActivity=req.body.zeroActivity;

    //find id
    //update
    monmodel.findOneAndUpdate({device:updevice},{$set:{lastActivity:uplastActivity, sumActivity:upsumActivity, zeroActivity:upzeroActivity}},
        {new:true},(err,data)=>{
        if(err)
        {
            res.send("ERROR")
        }else{
            if(data==null)
            {
                res.send("nothing found")
            }else{
                res.send(data)
            }
        }
    })
})


app.listen(4000,()=>{
    console.log("on port 4000")
})



////Line API
var request = require('request');
var router = express.Router();

router.post('/', function(req, res, next) {
    var token = req.body.token;
    var message = req.body.message;
 
    request({
        method: 'POST',
        uri: 'https://notify-api.line.me/api/notify',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        auth: {
        'bearer': token
        },
        form: {
        message: message
        }
    }, (err, httpResponse, body) => {
        if(err){
        console.log(err);
        } else {
        res.json({
            httpResponse: httpResponse,
            body: body
        });
        }
    });
});

module.exports = router;