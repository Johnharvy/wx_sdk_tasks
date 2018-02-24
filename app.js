var express = require('express')
var http = require('http')
var app = express()
var path = require('path')
var fs = require('fs')

app.use(express.static(path.resolve(__dirname,'weixin')))


module.exports = app

var baseUrl = "./server/"; //接口根目录
//同步读取文件下的方法
fs.readdirSync(baseUrl).forEach(function(fdir){
  var Actions = {};
  Actions[fdir] = require(baseUrl + fdir.slice(0,-3));
  Object.keys(Actions[fdir]).forEach(function(item){
        Actions[fdir][item]();
  });
})


http.createServer(app).listen(5000,function(){
     console.log('//localhost:5000/')
})