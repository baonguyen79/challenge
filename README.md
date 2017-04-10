# challenge
New stepd to build new repository:

- create / push basic new repository as normal
- make folder javascripts  and lib
- cd to lib to pull jquery and bootstrap down with these command
  bower install jquery --save
  bower install bootstrap --save
- At repository root directory create file .GITIGNORE with these lines:
  lib/bower_components
  lib/node_modules
- cd to lib , run NPM init
- replace package.json with this:
      {
     "name": "modules",
     "version": "0.1.0",
     "devDependencies": {
       "grunt": "~0.4.5",
       "grunt-contrib-jshint": "^0.11.2",
       "grunt-contrib-nodeunit": "~0.4.1",
       "grunt-contrib-uglify": "~0.5.0",
       "grunt-contrib-watch": "^0.6.1",
       "matchdep": "^0.3.0"
     }
    }
- Run NPM install
- Create Gruntfile.js with these lines and make adjustment as need
         module.exports = function(grunt) {

        require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

        grunt.initConfig({
          jshint: {
            files: ['../javascripts/**/*.js']
          },

          // Adding a watch task. When any file that matches the pattern(s)
          // in the `files` key changes, Grunt will automatically start the
          // jshint task
          watch: {
            javascripts: {
              files: ['../javascripts/**/*.js'],
              tasks: ['jshint']
            }
          }
        });


        grunt.registerTask('default', ['jshint', 'watch']);
      };

- Verify lib/bower_components and lib/node_modules not include when push to Github
