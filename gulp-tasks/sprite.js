const gulp = require("gulp"),
  svgSprite = require("gulp-svg-sprite"),
  rename = require("gulp-rename"),
  del = require("del");

const config = {
  mode: {
    css: {
      sprite: "sprite.svg",
      render: {
        css: {
          template: "./gulp-tasks/templates/sprite.css"
        }
      }
    }
  }
};

gulp.task("beginCleanup", () => {
  return del(["./app/assets/temp/sprite", "./app/assets/images/sprites"]);
});

gulp.task("createSprite", ["beginCleanup"], () => {
  return gulp
    .src("./app/assets/images/icons/**/*.svg")
    .pipe(svgSprite(config))
    .on("error", function(errMsg) {
      console.log(errMsg);
    })
    .pipe(gulp.dest("./app/assets/temp/sprite/"));
});

gulp.task("copySVGGraphic", ["createSprite"], () => {
  return gulp
    .src("./app/assets/temp/sprite/css/**/*.svg")
    .on("error", function(errMsg) {
      console.log(errMsg);
    })
    .pipe(gulp.dest("./app/assets/images/sprites"));
});

gulp.task("copySpriteCss", ["createSprite"], () => {
  return gulp
    .src("./app/assets/temp/sprite/css/sprite.css")
    .pipe(rename("_sprite.css"))
    .on("error", function(errMsg) {
      console.log(errMsg);
    })
    .pipe(gulp.dest("./app/assets/styles/modules/"));
});

gulp.task("endCleanup", ["copySpriteCss", "copySVGGraphic"], () => {
  return del(["./app/assets/temp/sprite"]);
});

gulp.task("icons", [
  "beginCleanup",
  "createSprite",
  "copySVGGraphic",
  "copySpriteCss",
  "endCleanup"
]);
