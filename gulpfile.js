const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Caminhos de origem
const paths = {
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'dist/styles/'
    },
    scripts: {
        src: 'src/js/**/*.js',
        dest: 'dist/js/'
    },
    images: {
        src: 'src/images/**/*',
        dest: 'dist/images/'
    }
};

// Tarefa para compilar SASS
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(gulp.dest(paths.styles.dest));
}

// Tarefa para minificar JS
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
}

// Tarefa para otimizar imagens
function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

// Tarefa padrão
const build = gulp.series(gulp.parallel(styles, scripts, images));
exports.default = build;
