var gulp = require('gulp');
var del = require('del');

/*************
 * CLEAN-DIR *
*************/

gulp.task('clean-dir', function(){
	return del([
		'build/app-linux-x64',
		'build/app-linux-ia32',
		'build/app-win32-x64',
		'build/app-win32-ia32',
		'build/app-darwin'
	])
});

gulp.task('clean-dir-linux-x64', function(){
	return del('build/app-linux-x64');
});

gulp.task('clean-dir-linux-ia32', function(){
	return del('build/app-linux-ia32');
});

gulp.task('clean-dir-win32-x64', function(){
	return del('build/app-win32-x64');
});

gulp.task('clean-dir-win32-ia32', function(){
	return del('build/app-win32-ia32');
});

gulp.task('clean-dir-darwin', function(){
	return del('build/app-darwin');
});

/*************
 * CLEAN-ZIP *
*************/

gulp.task('clean-zip', function(){
	return del([
		'build/app-linux-x64.zip',
		'build/app-linux-ia32.zip',
		'build/app-win32-x64.zip',
		'build/app-win32-ia32.zip',
		'build/app-darwin.zip'
	])
});

gulp.task('clean-zip-linux-x64', function(){
	return del('build/app-linux-x64.zip');
});

gulp.task('clean-zip-linux-ia32', function(){
	return del('build/app-linux-ia32.zip');
});

gulp.task('clean-zip-win32-x64', function(){
	return del('build/app-win32-x64.zip');
});

gulp.task('clean-zip-win32-ia32', function(){
	return del('build/app-win32-ia32.zip');
});

gulp.task('clean-zip-darwin', function(){
	return del('build/app-darwin.zip');
});

/*************
 * CLEAN ALL *
*************/

gulp.task('clean', [
	'clean-dir',
	'clean-zip'
]);