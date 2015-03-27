module.exports = function(grunt) {

    grunt.initConfig({
        //  LESS file compilation
        //  This instruction is launched with grunt watch
        less: {
            dist: {
                options: {
                    paths            : ["stylesheet"],
                    cleancss         : true,
                    sourceMap        : true,
                    sourceMapFilename: 'build/css/ns-css.css.map',
                    sourceMapRootpath: ''
                },
                files: {
                    "build/css/nds-css.min.css": "src/less/all.less",
                    "demo/styles.css": "demo/styles.less"
                }
            },
            demo: {
                options: {
                    cleancss         : true,
                    sourceMap        : true,
                    sourceMapFilename: 'demo/style.css.map',
                    sourceMapRootpath: ''
                },
                files: {
                    "demo/style.css": "demo/style.less"
                }
            }
        },

        // Watch less file changes for compile
        watch: {
            stylesheet: {
                files: ['src/less/**/*.less'],
                tasks: ['less:dist', 'autoprefixer:single_file']
            },
            demo: {
                files: ['demo/*.less'],
                tasks: ['less:demo', 'autoprefixer:demo']
            }
        },

        autoprefixer: {
            single_file: {
                src: "build/css/nds-css.min.css"
            },
            demo: {
                src: "demo/style.css"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-bower-clean');

}