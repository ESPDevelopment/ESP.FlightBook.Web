/// <binding BeforeBuild='Clean' AfterBuild='Build' Clean='Clean' />
"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");
var cssmin = require("gulp-cssmin");
var uglify = require("gulp-uglify");
var config = require("gulp-ng-config");
var del = require("del");

/* Path definitions */
var paths = {};
paths.webroot = "./wwwroot/";
paths.styles = "./Styles/";
paths.scripts = "./Scripts/";
paths.client = "./Client/";
paths.images = "./Images/";
paths.appConfigSrc = paths.client + "app/config.json";
paths.appConfigDest = paths.client + "app/";
paths.appModulesSrc = paths.client + "app/**/*module.js";
paths.appModulesDest = paths.client + "app/modules.tmp";
paths.appSourceSrc = [paths.client + "app/**/*.js", "!" + paths.client + "app/**/*module.js"];
paths.appSourceDest = paths.client + "app/source.tmp";
paths.appSrc = [paths.appModulesDest, paths.appSourceDest];
paths.appDest = paths.webroot + "app/";
paths.appDestFile = paths.appDest + "app.js";
paths.appDestMin = paths.appDest + "app.min.js";
paths.appClean = paths.appDest + "**/";
paths.cssSrc = [paths.styles + "**/*.css", "!" + paths.styles + "**/*.min.css"];
paths.cssDest = paths.webroot + "css/";
paths.cssDestFile = paths.cssDest + "site.css";
paths.cssDestMin = paths.cssDest + "site.min.css";
paths.cssClean = paths.cssDest + "**/";
paths.cssMapSrc = paths.styles + "**/*.css.map";
paths.cssMapDest = paths.webroot + "css/";
paths.htmlSrc = paths.client + "**/*.html";
paths.imagesSrc = paths.images + "**/*";
paths.imagesDest = paths.webroot + "images/";
paths.imagesClean = paths.imagesDest + "**/";
paths.siteJsSrc = [paths.scripts + "*.js", "!" + paths.scripts + "*.min.js"];
paths.siteJsDest = paths.webroot + "js/";
paths.siteJsClean = paths.siteJsDest + "**/";
paths.siteJsDestFile = paths.siteJsDest + "site.js";
paths.siteJsDestMin = paths.siteJsDest + "site.min.js";

/* Build angular application */
gulp.task("build:appStep1", function () {
    return gulp.src(paths.appConfigSrc)
        .pipe(config("app.config", { environment: "Development", wrap: true }))
        .pipe(gulp.dest(paths.appConfigDest));
});
gulp.task("build:appStep2", ["build:appStep1"], function () {
    var stream = gulp.src(paths.appModulesSrc)
        .pipe(concat(paths.appModulesDest))
        .pipe(gulp.dest("."));
    return stream;
});
gulp.task("build:appStep3", ["build:appStep2"], function () {
    var stream = gulp.src(paths.appSourceSrc)
        .pipe(concat(paths.appSourceDest))
        .pipe(gulp.dest("."));
    return stream;
});
gulp.task("build:appStep4", ["build:appStep3"], function () {
    var stream = gulp.src(paths.appSrc)
        .pipe(concat(paths.appDestFile))
        .pipe(gulp.dest("."));
    return stream;
});
gulp.task("build:appStep5", ["build:appStep4"], function () {
    return del(paths.appSrc);
});
gulp.task("build:app", ["build:appStep1", "build:appStep2", "build:appStep3", "build:appStep4", "build:appStep5"]);

/* Build client side files */
gulp.task("build:css", function () {
    return gulp.src(paths.cssSrc)
        .pipe(concat(paths.cssDestFile))
        .pipe(gulp.dest("."));
});
gulp.task("build:cssMap", function () {
    return gulp.src(paths.cssMapSrc)
        .pipe(gulp.dest(paths.cssMapDest));
});
gulp.task("build:htmlPartials", function () {
    return gulp.src(paths.htmlSrc)
        .pipe(gulp.dest(paths.webroot));
});
gulp.task("build:siteJs", function () {
    return gulp.src(paths.siteJsSrc)
        .pipe(concat(paths.siteJsDestFile))
        .pipe(gulp.dest("."));
});
gulp.task("build:images", function () {
    return gulp.src(paths.imagesSrc)
        .pipe(gulp.dest(paths.imagesDest));
});
gulp.task("Build", ["build:app", "build:css", "build:cssMap", "build:htmlPartials", "build:siteJs", "build:images"]);

/* Clean client side files */
gulp.task("clean:app", function () {
    return del(paths.appClean);
});
gulp.task("clean:siteJs", function () {
    return del(paths.siteJsClean);
});
gulp.task("clean:css", function () {
    return del(paths.cssClean);
});
gulp.task("clean:images", function () {
    return del(paths.imagesClean);
});
gulp.task("Clean", ["clean:app", "clean:siteJs", "clean:css", "clean:images"]);

/* Deploy angular application */
gulp.task("deploy:appStep1", function () {
    return gulp.src(paths.appConfigSrc)
        .pipe(config("app.config", { environment: "Production", wrap: true }))
        .pipe(gulp.dest(paths.appConfigDest));
});
gulp.task("deploy:appStep2", ["deploy:appStep1"], function () {
    var stream = gulp.src(paths.appModulesSrc)
        .pipe(concat(paths.appModulesDest))
        .pipe(gulp.dest("."));
    return stream;
});
gulp.task("deploy:appStep3", ["deploy:appStep2"], function () {
    var stream = gulp.src(paths.appSourceSrc)
        .pipe(concat(paths.appSourceDest))
        .pipe(gulp.dest("."));
    return stream;
});
gulp.task("deploy:appStep4", ["deploy:appStep3"], function () {
    var stream = gulp.src(paths.appSrc)
        .pipe(concat(paths.appDestMin))
        .pipe(uglify())
        .pipe(gulp.dest("."));
    return stream;
});
gulp.task("deploy:appStep5", ["deploy:appStep4"], function () {
    return del(paths.appSrc);
});
gulp.task("deploy:app", ["deploy:appStep1", "deploy:appStep2", "deploy:appStep3", "deploy:appStep4", "deploy:appStep5"]);


/* Deploy client side files */
gulp.task("deploy:css", function () {
    return gulp.src(paths.cssSrc)
        .pipe(concat(paths.cssDestMin))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});
gulp.task("deploy:cssMap", function () {
    return gulp.src(paths.cssMapSrc)
        .pipe(gulp.dest(paths.cssMapDest));
});
gulp.task("deploy:htmlPartials", function () {
    return gulp.src(paths.htmlSrc)
        .pipe(gulp.dest(paths.webroot));
});
gulp.task("deploy:siteJs", function () {
    return gulp.src(paths.siteJsSrc)
        .pipe(concat(paths.siteJsDestMin))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});
gulp.task("deploy:images", function () {
    return gulp.src(paths.imagesSrc)
        .pipe(gulp.dest(paths.imagesDest));
});
gulp.task("Deploy", ["deploy:app", "deploy:css", "deploy:cssMap", "deploy:htmlPartials", "deploy:siteJs", "deploy:images"]);
