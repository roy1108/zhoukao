//引入express模块
var express = require("express");

var path = require("path");
//用post请求获取参数
//var bodyParser = require('body-parser');
////创建application/x-www-form-urlencoded编码解析
//var urlencodedParser = bodyParser.urlencoded({extended:false});
//初始化
var app = express();
//app.use(express.static(path.join(__dirname,"public")));
app.get("/",function(req,res){
	res.sendFile(__dirname+req.path);
});
app.get("/form",function(req,res){
	console.log(req.query);
	if(req.query.username=="admin"&&req.query.passwd=="123456"){
		res.send("恭喜您，登陆成功");
	}else{
		res.send("对不起登陆失败");
	}
});
//创建服务器
app.listen(8888,function(){
	console.log("服务器启动成功");
});
