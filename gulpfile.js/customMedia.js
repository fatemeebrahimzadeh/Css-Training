const postcss = require('gulp-postcss');
const customMedia = require('postcss-custom-media');

const customMediaQuery = () =>
    gulp.src('./src/css/**/*.css')
        .pipe(postcss([
            customMedia()
        ]))
        .pipe(gulp.dest('./dist/css'));

exports.customMediaQuery = customMediaQuery;