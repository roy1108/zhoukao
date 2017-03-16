var express = require("express");
var path = require("path");
var app = express();
//app.use(express.static(path.join(__dirname,"public")));
app.get("/",function(req,res){
	res.sendFile(__dirname+req.path);
});
app.listen(8888,function(){
	console.log("服务器启动成功");
})
