var gulp = require('gulp'),
	iconfont = require('gulp-iconfont')
	svgo  = require('svgo')
;


gulp.task('build-font', function(){
  gulp.src(['resources/svg-font/*.svg'])
    .pipe(iconfont({
      fontName: 'hanzi-pinyin-font', // required
      appendCodepoints: true, // recommended option
      centerHorizontally: true
    }))
      .on('codepoints', function(codepoints, options) {
        // CSS templating, e.g.
        console.log(codepoints, options);
      })
    .pipe(gulp.dest('resources/fonts/'));
});

gulp.task('default', ['build-font']);