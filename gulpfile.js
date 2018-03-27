var gulp = require("gulp");
var plumber = require("gulp-plumber");

var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var frontnote = require("gulp-frontnote");

var browser = require("browser-sync");
var uglify = require("gulp-uglify");

var babel = require("gulp-babel");

gulp.task("sass", function() {
  gulp.src("sass/**/*scss")
    .pipe(plumber())
    .pipe(frontnote({
        css: '../css/style.css'
    }))
    .pipe(sass({
      outputStyle: 'compact'
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./css"))
    .pipe(browser.reload({stream:true}));
});


gulp.task("js", function() {
  gulp.src(["js/**/*.js","!js/min/**/*.js"])
    .pipe(plumber())
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest("./js/min"))
    .pipe(browser.reload({stream:true}));
});

gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});

var imagemin = require("gulp-imagemin");
gulp.task("imageMinTask", function() {
  gulp.src("images/*.png")
    .pipe(imagemin())
    .pipe(gulp.dest("minified_images/"));
});

gulp.task("default", ['server'], function() {
  gulp.watch(["js/**/*.js","js/es6/**/*.js","!js/min/**/*.js"],["js"]);
  gulp.watch("sass/**/*.scss",["sass"]);
});