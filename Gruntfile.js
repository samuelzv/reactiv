module.exports = function (grunt) {
    grunt.initConfig({
        shell: {
            options: {
                stderr:false
            },
            runweb: {
                command: 'cd /Users/szuniga/WebstormProjects/reactivo/dist/client && httpster'
            }
        },
        bowercopy: {
            options: {
            },
            scripts: {
                options: {
                    destPrefix: './dist/client/vendor'
                },
                files:{
                    'react/react.js': 'react/react.js'
                }
            }
        },
        copy: {
            src_client: {
                expand: true,
                cwd: 'src/client',
                src: ['*.html'],
                dest: 'dist/client',
                flatten: true
            }
        },
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify",{loose: "all"}]
                    ]
                },
                files: {
                    // if the source file has an extension of es6 then
                    // we change the name of the source file accordingly.
                    // The result file's extension is always .js
                    "./dist/client/js/bundle.js": ["./src/client/App.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["./src/client/**/*.js"],
                tasks: ["browserify"]
            },
            src_client: {
                files: ["./src/client/index.html"],
                tasks: ['copy:src_client']
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["browserify"]);
    grunt.registerTask('runweb', ["shell:runweb"])
};