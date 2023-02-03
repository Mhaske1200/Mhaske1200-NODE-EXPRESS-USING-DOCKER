var express = require('express');
var bp = require('body-parser');
var app = express();

app.use(bp.urlencoded({extended: false}));

app.listen(8000,function(){
	console.log("server started on 8000");
});


app.use("/login",function(req,res,next){
      console.log("received login request");
      next();	
});

app.use(function(req,res,next){
      console.log("general middleware");
      next();
});

app.get('/login',function(req,res){
    res.sendFile(__dirname+"/login.html");
});


app.post('/logincheck',function(req,res){
    if(req.body.uid == 'Mhaske' && req.body.pwd == '1200')
	res.send("<h2> Login is successful </h2>");
    else
	res.send("<h2> Login is failed </h2>");
});
