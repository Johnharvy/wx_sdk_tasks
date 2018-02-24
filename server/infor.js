var express = require("express")
var http = require("http")
var app = require("../app")

function getInfor(){
    app.all('/getInfor',function(res,rep){
        console.log(rep.send({ok : 'ok'}));
    })
}

module.exports = {
    getInfor : getInfor
}
