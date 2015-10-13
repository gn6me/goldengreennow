module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        postcss: {
            options: {
                map: true,
                processors: [
                    require('lost')
                ]
            },
            dist: {
                src: 'css/build/template',
                dest: 'css/template'
            }
        },

        autoprefixer: {
            single_file: {
                src: 'css/template.css',
                dest: 'css/template.css'
            }
        },

        concat: {
                dist: {
                    src: ['js/libs/*.js'],
                    dest: 'js/build/production.js',
                },

        },

        uglify: {
                build: {
                    src: 'js/build/production.js',
                    dest: 'js/production.min.js',
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
                tasks: ['postcss'],
                options: {
                    spawn: false,
                },
            },
        },

    });
    grunt.loadNpmTasks('grunt-postcss');
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['concat', 'uglify', 'watch', 'postcss', 'autoprefixer', 'cssnext']);

};