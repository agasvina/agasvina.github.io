angular.module('ngTimelineDemoApp', [
  'ng',
  'ngRoute',
  'ngTimeline'
]).

  config(['$routeProvider', '$sceDelegateProvider', 'timelineMediaTypeServiceProvider', function ($routeProvider, $sceDelegateProvider, timelineMediaTypeServiceProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'demo.html',
        controller: 'DemoController'
      })
      .otherwise({redirectTo: '/'});

    $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://www.w3schools.com/**']);

    timelineMediaTypeServiceProvider.addMediaType({type: 'media-demo', name: 'DemoMedia', urlRegex: /^<demo[^>]*>.*<\/demo>$/, cls: TL.Media.DemoMedia});
  }]);
