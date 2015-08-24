var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy:true});
var config = require('./gulpconfig')();
var del = require('del');
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var concatCss = require("gulp-concat-css");

var browserify = require('browserify');
var source = require('vinyl-source-stream');




var port = process.env.PORT || config.defaultPort;


gulp.task('js', function(){
   return   browserify('./src/app.js', {debug:true})
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./public/assets/js'));


});



gulp.task('styles', ['clean-styles'], function(){

    return gulp
        .src(config.sassDir)
        .pipe($.sass())
        .pipe(gulp.dest(config.cssDir));


});


gulp.task('main-styles', function(){

    return gulp
        .src(config.sassDir)
        .pipe($.sass())
        .pipe(gulp.dest(".tmp"));


});


gulp.task('component-styles',['main-styles'], function(){
    return gulp
        .src("./public/js/**/*.scss")
        .pipe($.sass())
        .pipe(gulp.dest(".tmp"));


});


gulp.task("bundle-css", ['main-styles'], function(){
    return gulp
        .src(".tmp/**/*.css")
        .pipe(concatCss("bundle.css"))
        .pipe($.autoprefixer())
        .pipe(gulp.dest("./public/assets/css"));

});




gulp.task('clean-styles', function(callback){
    var file = config.cssFile;
    clean(file, callback);


});




gulp.task('clean-html', function(callback){
    var file = config.viewMain+'**/**/*.html';
    cleanHTML(file, callback);

});


function clean(path, callback){

    del(path, callback);
}

function cleanHTML(path, callback){

    del(path, callback);
}



//1st launch

gulp.task('launch',['styles'],function(){

    var options = config.css;

    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src([config.cssFile],{read:false}), {ignorePath:'/public', addRootSlash:true}))
        .pipe(gulp.dest(config.viewMain));

});


//serve-dev

gulp.task('serve-dev',['launch'], function(){

    var isDev = true;
    var nodeOptions = {
        script: config.nodeServer,
        delayTime: 1,
        env:{
            'PORT':port,
            'NODE_ENV': isDev? 'development':'production'
        },
        watch:[]
    };

    return $.nodemon(nodeOptions)
            .on('start', function(){
                startBrowserSync();
            })
            .on('restart', function(event){
                console.log('files have changed:: \n\n'+event);

                setTimeout(function(){
                    browserSync.notify('reloading now...');
                    browserSync.reload({stream:false});
                },10);

            });

});


function startBrowserSync(){
    if(browserSync.active){
        return;
    }

    gulp.watch(config.sassDir,['styles', 'bundle-css']);
    gulp.watch("./src/scss/**/*.scss", ['bundle-css']);
    gulp.watch("./src/scss/components/*.scss", ['bundle-css']);
    gulp.watch("./src/js/**/**/*.js", ['js']);

    var options ={
        proxy: 'localhost:' + port,
        port: 7300,
        files:[
            './public/**/*.*',
            './server/**/*.*',
            './public/css/*.css',
            '!'+config.styl,
        ],
        ghostMode: {
            clicks:true,
            location: false,
            forms:true,
            scroll:true,
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: 'debug',
        logPrefix: 'gulp-patterns',
        notify:true,
        reloadDelay:5,
        //tunnel: "sage",

    };

    browserSync(options);
}

