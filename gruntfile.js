/*jslint node: true */
'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            libs: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: [
                        'bower_components/jquery/jquery.js',
                        'bower_components/jquery/jquery.min.js',
                        'bower_components/jquery/jquery.min.map'
                    ],
                    dest: 'public/js/libs/'
                }]
            }
        },
        uglify: {
            header: {
                files: {
                    'public/js/matsvampar.min.js': [
                        'public/js/resptest.js','public/js/min/resptest.min.js'
                    ]
                },
                options: {
                    sourceMap: 'public/js/resptest.min.map',
                    sourceMappingURL: 'resptest.min.map',
                    sourceMapPrefix: 5
                }
            }
        },
        less: {
            main: {
                options: {
                    paths: ['public/css'],
                    compress: true,
                    sourceMap: true,
                    sourceMapFilename: 'public/css/resptest.min.map',
                    sourceMapBasepath: 'public/css/',
                    sourceMapRootpath: '/css/'

                },
                files: {
                    'public/css/resptest.min.css': ['public/less/resptest.less']
                }
            }
        },
        watch: {
            less: {
                files: ['public/less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-modernizr');

    grunt.registerTask('default', ['bower', 'copy', 'uglify', 'less']);
};
