var Transfer=require('../models/transfer');
var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/MoneyManager');


	
//mongoose.connect('mongodb://Expenses:Expenses@ds147979.mlab.com:47979/moneymanager');

var transfer = [
new Transfer({
	Date:'2017-02-20 00:00:00',
	From:'21u2848764',
	To:'sdhfbhs',
	Amount:'76767675',
	Content:'hvhgvhgc',
	Memo:'hgsdhsgvfhs'
    }),

 new Transfer({
	Date:'2017-02-20 00:00:00',
	From:'21u2848764',
	To:'sdhfbhs',
	Amount:'76767675',
	Content:'hvhgvhgc',
	Memo:'nbchsdvbfd'
    })


];
var done = 0;
for(var i=0;i<transfer.length;i++){
    transfer[i].save(function(err,result){
  	console.log(result)
  	done++;
if(done === transfer.length){
	exit();
}
  });
}
function exit(){
	mongoose.disconnect();
}


