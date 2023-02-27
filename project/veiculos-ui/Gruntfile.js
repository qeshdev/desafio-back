module.exports = function (grunt) {
    grunt.initConfig({

        sass: {
            dist: {
                options: {
                    style: 'expanded',
                },
                files: {
                    './styles/main.module.css': './styles/config/config.scss'
                }
            }
        },

        watch: {
            sass: {
                files:'./styles/**/*',
                tasks: ['sass'],            
            },

            livereload: {
                options: { livereload: true },
                files: ['./styles/**/*'],
            }
        },


    })

    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-contrib-watch')

    grunt.registerTask('default', ['sass'])


}