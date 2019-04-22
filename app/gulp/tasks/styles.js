const gulp = require('gulp'),
    postCSS = require('gulp-postcss'),
    customMedia = require('postcss-custom-media'),
    simple = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    customProps = require('postcss-custom-properties'),
    autoPreFixer = require('autoprefixer'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');

gulp.task('styles', function () {
	return gulp.src('./app/assets/styles/styles.css')
        .pipe(postCSS([cssImport, mixins, customMedia, customProps, nested, simple, autoPreFixer]))
        .on('error', function(errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
