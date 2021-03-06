const gulp = require("gulp"),
  svgSprite = require("gulp-svg-sprite"),
  rename = require("gulp-rename"),
  del = require("del"),
  svg2png = require("gulp-svg2png");

const config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      variables: {
        replaceSvgWithPng: function() {
          return function(sprite, render) {
            return render(sprite)
              .split(".svg")
              .join(".png");
          };
        }
      },
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

gulp.task("createPngCopy", ["createSprite"], () => {
  return gulp
    .src("./app/assets/temp/sprite/css/**/*.svg")
    .pipe(svg2png())
    .pipe(gulp.dest("./app/assets/temp/sprite/css"));
});

gulp.task("copySVGGraphic", ["createPngCopy"], () => {
  return gulp
    .src("./app/assets/temp/sprite/css/**/*.{svg,png}")
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
  "createPngCopy",
  "copySVGGraphic",
  "copySpriteCss",
  "endCleanup"
]);
