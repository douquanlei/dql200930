const gulp = require("gulp");

const htmlmin = require("gulp-htmlmin");
//1、拷贝.html代码
gulp.task("copy-html", function () {
  return gulp
    .src("html/*.html")
    .pipe(
      htmlmin({
        removeEmptyAttibutes: true, // 移出所有空属性
        collapseWhitespace: true, // 压缩 html
      })
    )
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload());
});

//处理图片 imagesmin  对图片再次进行压缩
gulp.task("images", function(){
  return gulp.src("img/*.{jpg,png,gif,svg}")
  .pipe(gulp.dest("./dist/images"))
  .pipe(connect.reload());
})

//处理js文件
gulp.task("scripts", function(){
  return gulp.src(["js/*.js", "!gulpfile.js"])
  .pipe(gulp.dest("./dist/js"))
  .pipe(connect.reload());
})

//处理数据源json
gulp.task("data", function(){
  return gulp.src(["json/*.json", "!package.json"])
  .pipe(gulp.dest("./dist/json"))
  .pipe(connect.reload());
})
gulp.task("php", function(){
  return gulp.src("php/*.php")
  .pipe(gulp.dest("./dist/php"))
  .pipe(connect.reload());
})
//处理css样式
const sass = require("gulp-sass");
sass.compiler = require('node-sass');
const minifycss = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("sassIndex", function(){
  return gulp.src("./scss/index.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("./dist/css"))
  .pipe(minifycss())
  .pipe(rename("index.min.css"))
  .pipe(gulp.dest("./dist/css"))
  .pipe(connect.reload());
})

gulp.task("sassBanner", function(){
  return gulp.src("./scss/banner.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("./dist/css"))
  .pipe(minifycss())
  .pipe(rename("banner.min.css"))
  .pipe(gulp.dest("./dist/css"))
  .pipe(connect.reload());
})
gulp.task("sassList", function(){
  return gulp.src("./scss/list.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("./dist/css"))
  .pipe(minifycss())
  .pipe(rename("list.min.css"))
  .pipe(gulp.dest("./dist/css"))
  .pipe(connect.reload());
})
gulp.task("sassDetails", function(){
  return gulp.src("./scss/details.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("./dist/css"))
  .pipe(minifycss())
  .pipe(rename("details.min.css"))
  .pipe(gulp.dest("./dist/css"))
  .pipe(connect.reload());
})
gulp.task("sassGoodslist", function(){
  return gulp.src("./scss/goodslist.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("./dist/css"))
  .pipe(minifycss())
  .pipe(rename("goodslist.min.css"))
  .pipe(gulp.dest("./dist/css"))
  .pipe(connect.reload());
})
gulp.task("sassSettlement", function(){
  return gulp.src("./scss/settlement.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("./dist/css"))
  .pipe(minifycss())
  .pipe(rename("settlement.min.css"))
  .pipe(gulp.dest("./dist/css"))
  .pipe(connect.reload());
})
gulp.task("sassLogin", function(){
  return gulp.src("./scss/login.scss")
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("./dist/css"))
  .pipe(minifycss())
  .pipe(rename("login.min.css"))
  .pipe(gulp.dest("./dist/css"))
  .pipe(connect.reload());
})

gulp.task("build", ["sassLogin","sassSettlement","sassGoodslist","sassList","sassDetails","copy-html", "images", "scripts","data", "sassIndex", "sassBanner", "php"]);


//编写监听
gulp.task("watch", function(){
  gulp.watch("html/*.html", ["copy-html"]);
  gulp.watch("img/*.{jpg,png,gif,svg}", ["images"]);
  gulp.watch(["js/*.js", "!gulpfile.js"], ['scripts']);
  gulp.watch(["json/*.json", "!package.json"], ['data']);
  gulp.watch(["php/*.php"], ['php']);
  gulp.watch("./scss/index.scss", ["sassIndex"]);
  gulp.watch("./scss/banner.scss", ['sassBanner']);
  gulp.watch("./scss/list.scss", ['sassList']);
  gulp.watch("./scss/details.scss", ['sassDetails']);
  gulp.watch("./scss/goodslist.scss", ['sassGoodslist']);
  gulp.watch("./scss/settlement.scss", ['sassSettlement']);
  gulp.watch("./scss/login.scss", ['sassLogin']);
})


const connect = require("gulp-connect");
gulp.task("server", function(){
  connect.server({
    
    root: "dist",
    port: 3333,  //0-65535
    livereload: true
  })
})


//同时启动服务和监听

gulp.task("default", ['watch', 'server']);
