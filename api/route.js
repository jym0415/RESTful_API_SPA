var express = require('express');
var router = express.Router()


router.get('/',(req,res) =>{
    res.send('route페이지/get에서 옴')
})


module.exports = router;