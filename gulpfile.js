var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');


gulp.task('serve', function () {
    nodemon({
        script: 'src/server/index.js',
        ext: 'js html',
        env: {'NODE_ENV': 'development'}
    })
});