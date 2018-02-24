var gulp = require("gulp");
var htmlone = require("gulp-htmlone");
var fs = require("fs");
var path = require("path");
var sftp = require('gulp-sftp');


gulp.task('build', function() {
    (function () {
        var baseCata = "weixin/view/";
        fs.readdir(baseCata,function(err,catas){
            catas.forEach(function(files){
                var st = gulp.src(baseCata + files);
                st.pipe(
                    htmlone({ keepliveSelector: '[keep]' })
                ).pipe(
                    gulp.dest('build/')
                )
            });
        });

    }());
});

//ftp上传
gulp.task('push',['build'],function () {
    return gulp.src('build/**')
        .pipe(sftp({
            host: '106.14.123.71',
            remotePath: '/home/weixin/wx_sdk_tasks/weixin/view/', //部署到服务器的路径
            user: 'root', //帐号
            pass: "2428347yu()", //密码
            port: 22 //端口           
        }));
});



