var express = require('express')
var http = require('http')
var app = express()
var path = require('path')
var fs = require('fs')


app.use(express.static(path.resolve(__dirname,'weixin')))

var weixinAction = require('./server/weixin.js')

//验证微信开发测试账号申请时的接口
weixinAction.examWxAction()

//管理票据生成签名并返回签名等信息给前端
weixinAction.getTicket()

http.createServer(app).listen(3003,function(){
  console.log('Server running at port:'+ '3003'); 
})