var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),//лайв-релоад
    reload = browserSync.reload; //упрощение обращения к релоаду
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('reload', function(){
     console.log('asdf');
    browserSync.stream()
});

gulp.task('watch', function () {
    gulp.watch('css/*.css', reload);
    gulp.watch("*.html").on('change', reload);
});

//default
gulp.task('dev', ['browser-sync', 'watch']);