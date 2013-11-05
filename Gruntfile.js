module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },

      build: {
        src: ['src/js/plugins.js'],
        dest: 'js/main.min.js'
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'src/css',
          cssDir: 'css',
          environment: 'production'
        }
      }
    },
    copy: {
      jslib: {
        expand: true,
        cwd: 'src/js/',
        src: ['jquery-1.10.2.min.js',
          'modernizr-2.6.2.min.js'],
        dest: 'js/'
      },
      images: {
        expand: true,
        cwd: 'src/images',
        src: '**',
        dest: 'images/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};
