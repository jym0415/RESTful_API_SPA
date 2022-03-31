
express = require("express");
var app = express();

app.get('/',(req,res)=>{
    res.send('노드첫페이지')
})

app.listen(8080,function(){
    console.log('접속완료')
})