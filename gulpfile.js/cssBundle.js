const { src, dest } = require('gulp');
const concat = require('gulp-concat');

const cssBundle = () =>
  src([
    'assets/styles/about-hotel.css',
    'assets/styles/aside.css',
    'assets/styles/features.css',
    'assets/styles/footer.css',
    'assets/styles/gallery.css',
    'assets/styles/global.css',
    'assets/styles/header.css',
    'assets/styles/main.css',
    'assets/styles/modal.css',
    'assets/styles/other-places.css',
    'assets/styles/rooms.css',
    'assets/styles/ruls.css'
  ])
    .pipe(concat('styles.css'))
    .pipe(dest('dist/css'));

exports.cssBundle = cssBundle;