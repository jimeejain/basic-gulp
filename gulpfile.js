var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync',function(){
	browserSync.init({
		server:{
			baseDir:'app'
		}
	});
});

gulp.task('sass',function(){
    return gulp.src('app/scss/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('app/css/'))
            .pipe(browserSync.reload({
                stream:true
            }))            
});

gulp.task('watch',['browserSync','sass'],function(){
    gulp.watch('src/scss/*.scss',['sass']);
    gulp.watch('src/js/*.js',browserSync.reload);
    gulp.watch('src/*.html',browserSync.reload);
});

gulp.task('default',['watch']);