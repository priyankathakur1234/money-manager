var express=require('express');
var router=express.Router();
//var mongoose=require('mongoose');
//mongoose.connect('mongodb://localhost/MoneyManager');

router.get('/',function(req,res,next){
	res.render('shop/index',{title:'Express'});

});
module.exports = router;