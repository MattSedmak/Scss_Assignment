// variables.
var gulp = require("gulp");
var sass = require("gulp-sass");
var csso = require("gulp-csso");
var rename = require("gulp-rename");

// css task.
function style() {
    return gulp
        .src("scss/*.scss")
        .pipe(sass()) // compile scss to css.
        .pipe(gulp.dest("css")) // send compiled scss to css folder.
        .pipe(csso()) // minimise the css file.
        .pipe(rename({ suffix: ".min" })) // remname file with .min suffix.
        .pipe(gulp.dest("dist/css")); // send minimised css to dist folder.
}

// Watch files.
function watch() {
    gulp.watch("scss/**/*.scss", style);
}
// Default task.
gulp.task("default", gulp.series(style, watch));