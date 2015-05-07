module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        serve: {
            options: {
                port: 8888
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['**/*.sass','**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
        },


        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'style.css': 'css/style.sass'
                }
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-serve');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);

};