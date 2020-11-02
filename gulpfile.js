let gulp = require("gulp");
let path = require("path");
let vueify = require('gulp-vueify2');

function vueParser(cb) {
    console.log("vueParser")
    return gulp.src(path.resolve('./src/components/**/*.vue'))
        .pipe(vueify({
            extractCSS: true,
            CSSOut: "./foo/bundle.css"
        }))
        .pipe(gulp.dest('./dist'));
}

exports.default = vueParser