const gulp = require("gulp"),
  watch = require("gulp-watch"),
  postCss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  varsCss = require("postcss-simple-vars"),
  nestedCss = require("postcss-nested"),
  importCss = require("postcss-import");

gulp.task("default", () => {
  console.log("Git-Travel-Site");
});

gulp.task("html", () => {
  console.log("HTML file changed");
});

gulp.task("styles", () => {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postCss([importCss, nestedCss, varsCss, autoprefixer]))
    .pipe(gulp.dest("./app/assets/temp/styles"));
});

gulp.task("watch", () => {
  watch("./app/index.html", () => {
    gulp.start("html");
  });

  //watch for any css changes
  watch("./app/assets/styles/**/*.css", () => {
    gulp.start("styles");
  });
});
