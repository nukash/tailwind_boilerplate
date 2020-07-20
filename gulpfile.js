const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const resizeImage = require("gulp-image-resize");
const packageImporter = require("node-sass-package-importer");
const imagemin = require("gulp-imagemin");
const rename = require("gulp-rename");
const changed = require("gulp-changed");

const compileSass = () =>
  src("./assets/sass/**/*.scss")
    .pipe(
      sass({
        outputStyle: "expanded",
        importer: packageImporter({
          extensions: [".scss", ".css"],
        }),
      })
    )
    .pipe(postcss([require("tailwindcss")]))
    .pipe(dest("./assets/css"));

// const imgDestGlob = "./assets/img/";

// const compressImages = () =>
//   src("./assets/img/original/**/*.+(jpg|jpeg|png)")
//     .pipe(changed(imgDestGlob))
//     .pipe(
//       resizeImage({
//         width: 1080,
//         crop: false,
//         upscale: false,
//       })
//     )
//     .pipe(
//       imagemin({
//         optimizationLevel: 7,
//       })
//     )
//     .pipe(dest(imgDestGlob));

// const thumb = [64, 128, 400].map((size) => (done) => {
//   src("./assets/img/original/**/*.+(jpg|jpeg|png)")
//     .pipe(changed(imgDestGlob))
//     .pipe(
//       resizeImage({
//         width: size,
//         crop: false,
//         upscale: false,
//       })
//     )
//     .pipe(rename((path) => (path.basename += "_" + size)))
//     .pipe(
//       imagemin({
//         optimizationLevel: 7,
//       })
//     )
//     .pipe(dest(imgDestGlob));
//   done();
// });

const watchSassFiles = () => {
  watch("./assets/sass/**/*.scss", compileSass);
  watch("./tailwind.config.js", compileSass);
  //   watch("./assets/img/main/*.png", compressImages);
};
exports.default = watchSassFiles;

// exports.compress = compressImages;

// exports.thumb = series(...thumb);
