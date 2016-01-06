global.appSrc = [
	'**',
	'!build{,/**}',
	'!node_modules{,/**}',
	'!typings{,/**}',
	'!app/{*.ts,*.map}',
	'!gulpfile.js',
	'!gulp-tasks{,/**}',
	'!tsconfig.json'
];

require('./gulp-tasks/gulpfile.build');
require('./gulp-tasks/gulpfile.clean');