const gulp = require("gulp"),
  postCss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  varsCss = require("postcss-simple-vars"),
  nestedCss = require("postcss-nested"),
  importCss = require("postcss-import"),
  mixinsCss = require("postcss-mixins");

gulp.task("styles", () => {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(postCss([importCss, mixinsCss, nestedCss, varsCss, autoprefixer]))
    .on("error", function(errMsg) {
      console.log("ERROR: " + errMsg.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/assets/temp/styles"));
});
