/*
 * @file
 *
 * - gulp [--dev] [--nojquery]
 * - gulp watch [--dev] [--reload] [--nojquery]
 *
 * - gulp css  [--dev]
 * - gulp favicon
 * - gulp html
 * - gulp check-js
 * - gulp check-scss
 * - gulp javascript [--dev] [--nojquery]
 * - gulp imagemin
 * - gulp gitignore
 * - gulp clean
 * - gulp wordpressify
 *
 */

const config = require('./gulp-includes/gulp-configuration.js'),
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    upath = require('upath'),
    rls = require('remove-leading-slash'),
    argv = require('minimist')(process.argv.slice(2)),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    path = require('path'),
    pathExists = require('path-exists'),
    log = require('fancy-log');

if (pathExists.sync(rls('./wordpress/'))) {
    global.wordpress = true;
} else {
    global.wordpress = false;
}

if (!argv._.length || argv._[0] === 'watch' || argv._[0] === 'css' || argv._[0] === 'javascript') {
    if (argv.dev) {
        process.env.NODE_ENV = 'development';
        log.info('Notice : Consider using the --dev option for development and testing purposes only.');
    } else {
        process.env.NODE_ENV = 'production';
        log.info('Notice : Consider using the --dev option for development and testing purposes.');
    }
}

if (argv._[0] === 'watch') {
    if (!argv.reload && config.generateHtml.enable && argv.dev) {
        log.info('Notice : Consider using the --reload option to automatically reload browser when changes are detected.');
    }
}

if (!argv._.length || argv._[0] === 'watch' || argv._[0] === 'css' || argv._[0] === 'javascript') {
    log.info('GULP MODE : ' + process.env.NODE_ENV.toUpperCase());
}

var tasks = [
    {
        name: 'favicon',
        description: 'Create and attach favicon files.',
        flags: {}
    },
    {
        name: 'imagemin',
        description: 'Optimise .jpg .jpeg .png .gif .svg images.',
        flags: {}
    },
    {
        name: 'clean',
        description: 'Erase generated assets.',
        flags: {}
    },
    {
        name: 'wordpressify',
        description: 'Transforms the entire project into a ready-to-use WordPress project. Irreversible. Commit your changes first.',
        flags: {}
    }
];

var default_tasks = [];

if (config.generateJs.enable) {
    tasks.push(
        {
            name: 'check-js',
            description: 'Checks JavaScript syntax.',
            flags: {}
        },
        {
            name: 'javascript',
            description: 'Build JavaScript code.',
            flags: {
                '—-dev': 'No minification, add viewport logging in console, build sourcemaps.',
                '—-nojquery': 'jQuery won\'t be added in the bundle.'
            }
        }
    );
    default_tasks.push('check-js', 'javascript');
    config.generateJs.src_path = '/gulp-includes/js/';
}

if (config.generateCss.enable) {
    tasks.push(
        {
            name: 'check-scss',
            description: 'Checks Scss syntax.',
            flags: {}
        },
        {
            name: 'css',
            description: 'Build CSS stylesheets.',
            flags: {
                '—-dev': 'Disable px to rem conversion, build sourcemaps.'
            }
        }
    );
    default_tasks.push('check-scss', 'css');
    config.generateCss.src_path = '/gulp-includes/scss/';
}

if (config.generateHtml.enable) {
    tasks.push(
        {
            name: 'html',
            description: 'Build html templates.',
            flags: {}
        }
    );
    default_tasks.push('html');
    config.generateHtml.src = '/gulp-includes/www/';
}

if (config.generateGitignore.enable) {
    tasks.push(
        {
            name: 'gitignore',
            description: 'Build custom .gitignore according to gulp-includes/gulp-configuration.js.',
            flags: {}
        }
    );
    default_tasks.push('gitignore');
}

function getTaskByModule(task) {
    var getTask = require('./gulp-includes/core/gulp-tasks/' + task.name);
    getTask.description = task.description;
    getTask.flags = task.flags;
    return getTask;
}

for (var i in tasks) {
    gulp.task(tasks[i].name, getTaskByModule(tasks[i]));
}

gulp.task('default', default_tasks, function () {
    notifyCompilationEnded();
});

gulp.task('watch', default_tasks, function () {
    setTimeout(function () {
        notifyCompilationEnded();
        if (config.generateHtml.enable && argv.dev) {
            browserSync.init(
                {
                    server: true,
                    startPath: upath.join(rls(config.generateHtml.output), 'index.html'),
                    ui: false,
                    notify: false
                }
            );
        }
        var tasks_to_run = [];
        var watcher = gulp.watch(['./gulpfile.js', './package.json', './gulp-includes/gulp-configuration.js']);
        watcher.on('change', function (absolute_path) {
            log.info('Watch has detected changes in ' + path.relative(__dirname, absolute_path.path));
            log.info('Please restart Gulp.');
            process.exit(0);
        });
        if (config.generateJs.enable) {
            tasks_to_run = ['check-js', 'javascript'];
            if (config.generateHtml.enable) {
                tasks_to_run.push('html');
            }
            if (config.generateGitignore.enable) {
                tasks_to_run.push('gitignore');
            }
            if (config.generateHtml.enable && argv.reload && argv.dev) {
                gulp.watch(rls(upath.join(rls(config.generateJs.src_path), '*.js')), tasks_to_run).on('change', reload);
            } else {
                gulp.watch(rls(upath.join(rls(config.generateJs.src_path), '*.js')), tasks_to_run);
            }
        }
        if (config.generateCss.enable) {
            tasks_to_run = ['check-scss', 'css'];
            if (config.generateHtml.enable) {
                tasks_to_run.push('html');
            }
            if (config.generateGitignore.enable) {
                tasks_to_run.push('gitignore');
            }
            if (config.generateHtml.enable && argv.reload && argv.dev) {
                gulp.watch(rls(upath.join(rls(config.generateCss.src_path), '**', '*')), tasks_to_run).on('change', reload);
            } else {
                gulp.watch(rls(upath.join(rls(config.generateCss.src_path), '**', '*')), tasks_to_run);
            }
        }
        if (config.generateHtml.enable) {
            tasks_to_run = ['html'];
            if (config.generateGitignore.enable) {
                tasks_to_run.push('gitignore');
            }
            if (config.generateHtml.enable && argv.reload && argv.dev) {
                gulp.watch(rls(upath.join(rls(config.generateHtml.src), '**', '*')), tasks_to_run).on('change', reload);
            } else {
                gulp.watch(rls(upath.join(rls(config.generateHtml.src), '**', '*')), tasks_to_run);
            }
        }
    }, 10);
});

function notifyCompilationEnded() {
    if (config.generateHtml.enable && argv.dev) {
        log.info('index.html\'s location : ' + upath.join(__dirname, rls(config.generateHtml.output), 'index.html'));
    }
}