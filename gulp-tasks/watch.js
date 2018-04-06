const gulp = require("gulp"),
  watch = require("gulp-watch"),
  browserSync = require("browser-sync").create();

gulp.task("watch", () => {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch("./app/index.html", () => {
    browserSync.reload();
  });

  //watch for any css changes
  watch("./app/assets/styles/**/*.css", () => {
    gulp.start("injectCss");
  });
});

//watch for changes to temp stylesheet
gulp.task("injectCss", ["styles"], () => {
  return gulp
    .src("./app/assets/temp/styles/styles.css")
    .pipe(browserSync.stream());
});
