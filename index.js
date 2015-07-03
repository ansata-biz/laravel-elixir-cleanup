var gulp = require('gulp');
var elixir = require('laravel-elixir');
var del = require('del');

elixir.extend('cleanup', function (mask) {
    mask = this.publicDir + '/' + mask;

    gulp.task('cleanup', function () {
        del([mask]);
    });

    return this.queueTask('cleanup');
});
