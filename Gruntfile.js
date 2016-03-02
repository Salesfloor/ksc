module.exports = function(grunt) {
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),

   sass: {
     dist: {
       options: {
         outputStyle: 'compressed',
         sourceMap: true,
       },
       files: {
         'css/main.css': 'scss/main.scss'
       }
     }
   },
   
   autoprefixer:{
      dist:{
        files:{
          'css/main.css':'css/main.css'
        }
      }
    },

   watch: {
     grunt: {
       options: {
         reload: true
       },
       files: ['Gruntfile.js']
     },

     css: {
       files: 'scss/main.scss',
       tasks: ['sass', 'autoprefixer']
     }

   }
 });

 grunt.loadNpmTasks('grunt-sass');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-autoprefixer');
 
 grunt.registerTask('build', ['sass', 'autoprefixer']);
 grunt.registerTask('default', ['build','watch']);
};