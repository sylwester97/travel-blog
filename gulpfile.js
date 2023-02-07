const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano')
const autoprefixer = require('gulp-autoprefixer');
const gulpCssnano = require('gulp-cssnano');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');




function sassCompiler(done) {
    src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist/css'));
    done()
}

function javascript(done) {
    src('./src/js/**/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist/js'));




    done()
}
function convertImages(done) {
    src('./src/img/*')
        .pipe(imagemin())
        .pipe(dest('./dist/img'));




    done()
}

exports.default = series(sassCompiler, javascript, convertImages)