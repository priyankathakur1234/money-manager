

var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
var Schema=mongoose.Schema;

 
 var schema=new Schema({
     Date:{type:String,required:true},
     Account:{type:String,required:true},
     Category:{type:String,required:true},
     Amount:{type:String,required:true},
     Content:{type:String,required:true},
     Memo:{type:String,required:true}


 });
 module.exports=mongoose.model('Income',schema);
 