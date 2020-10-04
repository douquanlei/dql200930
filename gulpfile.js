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
  return gulp.src("img/*.{jpg,png}")
  .pipe(gulp.dest("./dist/images"))
  .pipe(connect.reload());
})

//处理js文件
gulp.task("scripts", function(){
  return gulp.src(["js/*.js", "!gulpfile.js"])
  .pipe(gulp.dest("./dist/js"))
  .pipe(connect.reload());
})

//处理数据源json改tool
gulp.task("data", function(){
  // return gulp.src(["*.json", "!package.json"])
  // .pipe(gulp.dest("dist/data"))
  return gulp.src(["tool/*.js", "!gulpfile.js"])
  .pipe(gulp.dest("./dist/tool"))
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

gulp.task("build", ["copy-html", "images", "scripts", "data", "sassIndex", "sassBanner"]);


//编写监听
gulp.task("watch", function(){
  gulp.watch("html/*.html", ["copy-html"]);
  gulp.watch("img/*.{jpg,png}", ["images"]);
  gulp.watch(["js/*.js", "!gulpfile.js"], ['scripts']);
  gulp.watch(["tool/*.js", "!package.json"], ['data']);
  gulp.watch("./scss/index.scss", ["sassIndex"]);
  gulp.watch("./scss/banner.scss", ['sassBanner']);
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
