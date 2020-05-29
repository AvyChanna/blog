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
/*************** PROCESS ASSETS ***************/
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

/*************** HUGO TASKS ***************/
gulp.task('serve', function (cb) {
	var serve_spawn = spawn('hugo', ['serve', '-D']);
	serve_spawn.stdout.on('data', (data) => {
		log(`${data}`);
	});
	serve_spawn.stderr.on('data', (data) => {
		log(`stderr: ${data}`);
	});
	serve_spawn.on('close', (code) => {
		log(`serve_spawn process exited with code ${code}`);
		cb(code);
	});
	return serve_spawn;
});
gulp.task('publish', function (cb) {
	var hugo_spawn = spawn('hugo');
	hugo_spawn.stdout.on('data', (data) => {
		log(`${data}`);
	});
	hugo_spawn.stderr.on('data', (data) => {
		log(`publish stderr: ${data}`);
	});
	hugo_spawn.on('close', (code) => {
		log(`======== PUBLISH DONE [code=${code}] ========`);
		cb(code);
	});
	return hugo_spawn;
});

/*************** UTILITY TASKS ***************/
gulp.task('clean', function () {
	return del(['./new/*', "./public/*", '!./public/.git'])
});
gulp.task('build', gulp.series('publish', gulp.parallel(
	"minify_css",
	"minify_html",
	"minify_js",
	"copy_others")));
gulp.task('rebuild', gulp.series('clean', 'build'));
// gulp.task('github_upload', function () {});
/*************** DEPLOY SITE ***************/
// gulp.task('deploy', gulp.series('rebuild', 'github_upload'));
/*************** DEFAULT TASK ***************/
gulp.task('default', gulp.series('build'));