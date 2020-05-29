'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

const AUTOPREFIXER_BROWSERS = [
	'ff >= 30',
	'chrome >= 34',
	'safari >= 7',
	'opera >= 23',
	'ios >= 7',
	'android >= 4.4',
	'bb >= 10'
];

// Gulp task to minify CSS files
gulp.task('minify_css', function () {
	return gulp.src('./public/**/*.css')
		// Auto-prefix css styles for cross browser compatibility
		.pipe(autoprefixer({
			browsers: AUTOPREFIXER_BROWSERS
		}))
		// Minify the file
		.pipe(csso())
		// Output
		.pipe(gulp.dest('./dist/css'))
});

// Gulp task to minify HTML files
gulp.task('minify_html', function () {
	return gulp.src(['./src/**/*.html'])
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('minify_js', function () {
	return gulp.src('./src/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
});

gulp.task('default', ['minify_all'], function () {
	runSequence(
		'minify_css',
		'minify_js',
		'minify_html'
	);
});