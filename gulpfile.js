'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var debug = require('gulp-debug');
var spawn = require('child_process').spawn;
var log = require('fancy-log');

gulp.task('minify_css', function () {
	return gulp.src('./new/**/*.css')
		.pipe(autoprefixer())
		.pipe(csso())
		.pipe(gulp.dest('./public/'))
});




gulp.task('minify_html', function () {
	return gulp.src(['./new/**/*.html'])
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('./public/'))
});




gulp.task('minify_js', function () {
	return gulp.src('./new/**/*.js')
		.pipe(babel({
			compact: true,
			minified: true,
			presets: [
				'@babel/preset-env'
			]
		}))
		.pipe(uglify())
		.pipe(gulp.dest('./public/'))
});




gulp.task('copy_others', function () {
	return gulp.src(["./new/**/*", "!./new/**/*.{js,css,html}"])
		.pipe(gulp.dest("./public/"))
});


gulp.task('build', gulp.parallel(
	"minify_css",
	"minify_html",
	"minify_js",
	"copy_others",
));

gulp.task('clean', function () {
	return del(['./new/*', "./public/*", '!./public/.git'])
});

gulp.task('default', gulp.series('build'));

gulp.task('serve', function (cb) {
	var serve_spawn = spawn('hugo',['serve', '-D']);

	serve_spawn.stdout.on('data', (data) => {
		console.log(`${data}`);
	});

	serve_spawn.stderr.on('data', (data) => {
		log(`stderr: ${data}`);
	});

	serve_spawn.on('close', (code) => {
		log(`serve_spawn process exited with code ${code}`);
		cb(code);
	});

});

gulp.task('deploy', gulp.series('clean', 'build'))