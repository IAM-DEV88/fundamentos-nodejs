const gulp = require('gulp')
const server = require('gulp-server-livereload')

gulp.task('build', function(cb) {
    console.log('building website');
    setTimeout(cb, 1500);
})

gulp.task('serve', function(cb) {
    gulp.src('www')
    .pipe(server({
        livereload: true,
        open: true,
    }))
    console.log('serving website');
})

gulp.task('default', gulp.series('build', 'serve'))