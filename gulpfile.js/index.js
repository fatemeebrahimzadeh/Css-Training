const cssBundle = require('./cssBundle');
// const customMediaQuery = require('./customMedia');

gulp.task('css-bundle', cssBundle);
// gulp.task('custom-media', customMediaQuery);

gulp.task('default', gulp.parallel('css-bundle'));