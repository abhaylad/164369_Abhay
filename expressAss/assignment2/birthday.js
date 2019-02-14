var express = require('express');
var app = express();

app.get('/:year/:age', function(req, res){
	var year=req.params.year;
	
	var age=req.params.age;
	var result=req.params.year - age;
   res.send('your age is ' +result);
});
app.listen(8081);