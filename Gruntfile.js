module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/build/template.css': 'css/template.scss'
                },
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
            css: {
                files: ['css/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
        },

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);

};