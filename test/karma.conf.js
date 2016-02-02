module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
        'app/bower_components/angular/angular.js',
        'app/bower_components/angular-route/angular-route.js',
        'app/bower_components/angular-resource/angular-resource.js',
        'app/bower_components/angular-animate/angular-animate.js',
        'app/bower_components/angular-mocks/angular-mocks.js',
        'node_modules/systemjs/dist/system.src.js',
        'test/karma_test_shim.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/es6-shim/es6-shim.js',
        'node_modules/es6-promise/dist/es6-promise.js',
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/upgrade.dev.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/http.dev.js',
        'node_modules/angular2/bundles/testing.dev.js',
        {pattern: 'app/js/**/*.js', included: false, watched: true},
        {pattern: 'test/unit/**/*.js', included: false, watched: true}
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};