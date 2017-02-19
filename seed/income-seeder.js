var Income=require('../models/income');
var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/MoneyManager');


	
//mongoose.connect('mongodb://Expenses:Expenses@ds147979.mlab.com:47979/moneymanager');

var income = [
new Income({
	Date:'2017-02-20 00:00:00',
	Account:'21u2848764',
	Category:'sdhfbhs',
	Amount:'76767675',
	Content:'hvhgvhgc',
	Memo:'hgsdhsgvfhs'
    }),

 new Income({
	Date:'2017-02-20 00:00:00',
	Account:'21u2848764',
	Category:'sdhfbhs',
	Amount:'76767675',
	Content:'hvhgvhgc',
	Memo:'nbchsdvbfd'
    })


];
var done = 0;
for(var i=0;i<income.length;i++){
    income[i].save(function(err,result){
  	console.log(result)
  	done++;
if(done === income.length){
	exit();
}
  });
}
function exit(){
	mongoose.disconnect();
}


