module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        postcss: {
            options: {
                processors: [
                    require('lost')
                ]
            },
            dist: {
                src: 'css/build/template.css',
                dest: 'css/template.css'
            }
        },

        autoprefixer: {
            single_file: {
                src: 'css/template.css',
                dest: 'css/template.css'
            }
        },

        cssnext: {
            dist: {
                files: {
                    "css/template.css": "css/template.css" //needs to grab from the same directory after postcss has run
                }
            }
        },

        cssnano: {
            dist: {
                files: {
                    'css/template.css': 'css/template.css'
                }
            }
        },

        concat: {
                dist: {
                    src: ['templates/acl-3.0/js/libs/*.js'],
                    dest: 'templates/acl-3.0/js/build/production.js',
                },

        },

        uglify: {
                build: {
                    src: 'templates/acl-3.0/js/build/production.js',
                    dest: 'templates/acl-3.0/js/production.min.js',
                },
        },

        watch: {
            scripts: {
                files: ['js/libs/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            postcss: {
                files: ['css/build/template.css'],
                tasks: ['postcss','cssnext','autoprefixer','cssnano'],
            },
        },

    });
    grunt.loadNpmTasks('grunt-postcss');
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['concat', 'uglify', 'watch']);

};