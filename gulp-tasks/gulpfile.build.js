/* global appSrc */

var gulp = require('gulp');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var electron = require('gulp-atom-electron');
var symdest = require('gulp-symdest');
var zip = require('gulp-vinyl-zip');

require('./gulpfile.clean');

var jsFilter = filter('**/*.js', { restore: true });

/*************
 * BUILD-DIR *
*************/

gulp.task('build-dir', [
	'build-dir-linux-x64',
	'build-dir-linux-ia32',
	'build-dir-win32-x64',
	'build-dir-win32-ia32',
	'build-dir-darwin'
]);

gulp.task('build-dir-linux-x64', ['clean-dir-linux-x64'], function () {
	return gulp.src(appSrc)
		.pipe(jsFilter)
		.pipe(uglify())
		.pipe(jsFilter.restore)
		.pipe(electron({
			version: '0.36.1',
			platform: 'linux',
			arch: 'x64'
		}))
		.pipe(symdest('build/app-linux-x64'));
});

gulp.task('build-dir-linux-ia32', ['clean-dir-linux-ia32'], function () {
	return gulp.src(appSrc)
		.pipe(jsFilter)
		.pipe(uglify())
		.pipe(jsFilter.restore)
		.pipe(electron({
			version: '0.36.1',
			platform: 'linux',
			arch: 'ia32'
		}))
		.pipe(symdest('build/app-linux-ia32'));
});

gulp.task('build-dir-win32-x64', ['clean-dir-win32-x64'], function () {
	return gulp.src(appSrc)
		.pipe(jsFilter)
		.pipe(uglify())
		.pipe(jsFilter.restore)
		.pipe(electron({
			version: '0.36.1',
			platform: 'win32',
			arch: 'x64'
		}))
		.pipe(symdest('build/app-win32-x64'));
});

gulp.task('build-dir-win32-ia32', ['clean-dir-win32-ia32'], function () {
	return gulp.src(appSrc)
		.pipe(jsFilter)
		.pipe(uglify())
		.pipe(jsFilter.restore)
		.pipe(electron({
			version: '0.36.1',
			platform: 'win32',
			arch: 'ia32'
		}))
		.pipe(symdest('build/app-win32-ia32'));
});

gulp.task('build-dir-darwin', ['clean-dir-darwin'], function () {
	return gulp.src(appSrc)
		.pipe(jsFilter)
		.pipe(uglify())
		.pipe(jsFilter.restore)
		.pipe(electron({
			version: '0.36.1',
			platform: 'darwin'
		}))
		.pipe(symdest('build/app-darwin'));
});

/************
 * BUILD-ZIP *
 ***********/

gulp.task('build-zip', [
	'build-zip-linux-x64',
	'build-zip-linux-ia32',
	'build-zip-win32-x64',
	'build-zip-win32-ia32',
	'build-zip-darwin'
]);

gulp.task('build-zip-linux-x64', ['clean-zip-linux-x64'], function () {
	return gulp.src(appSrc)
		.pipe(jsFilter)
		.pipe(uglify())
		.pipe(jsFilter.restore)
		.pipe(electron({
			version: '0.36.1',
			platform: 'linux',
			arch: 'x64'
		}))
		.pipe(zip.dest('build/app-linux-x64.zip'));
});

gulp.task('build-zip-linux-ia32', ['clean-zip-linux-ia32'], function () {
	return gulp.src(appSrc)
		.pipe(jsFilter)
		.pipe(uglify())
		.pipe(jsFilter.restore)
		.pipe(electron({
			version: '0.36.1',
			platform: 'linux',
			arch: 'ia32'
		}))
		.pipe(zip.dest('build/app-linux-ia32.zip'));
});

gulp.task('build-zip-win32-x64', ['clean-zip-win32-x64'], function () {
	return gulp.src(appSrc)
		.pipe(jsFilter)
		.pipe(uglify())
		.pipe(jsFilter.restore)
		.pipe(electron({
			version: '0.36.1',
			platform: 'win32',
			arch: 'x64'
		}))
		.pipe(zip.dest('build/app-win32-x64.zip'));
});

gulp.task('build-zip-win32-ia32', ['clean-zip-win32-ia32'], function () {
	return gulp.src(appSrc)
		.pipe(jsFilter)
		.pipe(uglify())
		.pipe(jsFilter.restore)
		.pipe(electron({
			version: '0.36.1',
			platform: 'win32',
			arch: 'ia32'
		}))
		.pipe(zip.dest('build/app-win32-ia32.zip'));
});

gulp.task('build-zip-darwin', ['clean-zip-darwin'], function () {
	return gulp.src(appSrc)
		.pipe(jsFilter)
		.pipe(uglify())
		.pipe(jsFilter.restore)
		.pipe(electron({
			version: '0.36.1',
			platform: 'darwin'
		}))
		.pipe(zip.dest('build/app-darwin.zip'));
});

/*********
 * BUILD *
*********/

gulp.task('build-linux-x64', [
	'build-dir-linux-x64',
	'build-zip-linux-x64'
]);

gulp.task('build-linux-ia32', [
	'build-dir-linux-ia32',
	'build-zip-linux-ia32'
]);

gulp.task('build-win32-x64', [
	'build-dir-win32-x64',
	'build-zip-win32-x64'
]);

gulp.task('build-win32-ia32', [
	'build-dir-win32-ia32',
	'build-zip-win32-ia32'
]);

gulp.task('build-darwin', [
	'build-dir-darwin',
	'build-zip-darwin'
]);

/*************
 * BUILD ALL *
*************/

gulp.task('build', [
	'build-dir',
	'build-zip'
]);