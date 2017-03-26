var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            proxy: "local.dev"
        }
    })
});

gulp.task('watch', ['browserSync'], function (){
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/views/*.html', browserSync.reload);
    gulp.watch('app/scripts/**/*.js', browserSync.reload);
});