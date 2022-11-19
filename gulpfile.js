const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const { src, dest } = require('gulp');
const pug = require('gulp-pug');

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            port:9000,
            baseDir: "build"
        }
    });
    gulp.watch('build/**/*').on(browserSync.reload);
});


// pug compile

exports.views = () => {
  return src('./src/*.pug')
    .pipe(
      pug({
        // Your options in here.
      })
    )
    .pipe(dest('./dist'));
};

