/*jslint node: true */
'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            header: {
                files: {
                    'public/js/min/resptest.min.js': [
                        'public/js/resptest.js'
                    ]
                },
                options: {
                    sourceMap: 'public/js/min/resptest.min.map',
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

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-modernizr');

    grunt.registerTask('default', ['uglify', 'less']);
};
