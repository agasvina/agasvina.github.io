var app = angular.module("app",  [
	'ngResource',
  'ngSanitize',
  'ui.bootstrap',
	'nvd3',
]);

app.controller('main', function($scope, $http, $sce, $window) {
  $scope.htmlPopover = [
    $sce.trustAsHtml("<img src='/img/art/img0.jpg' width='250'/>"),
    $sce.trustAsHtml("<img src='/img/art/art2.jpg' width='250'/>"),
    $sce.trustAsHtml("<img src='/img/art/art3.jpg' width='250'/>"),
    $sce.trustAsHtml('<b style="color: blue">I love... </b>'),
    $sce.trustAsHtml("<div><img src='/img/art/art5.jpg' width='250'/><img src='/img/art/art4.jpg' width='250'/></div>"),
    $sce.trustAsHtml("<b style='color: black'>Contact</b>"),
    $sce.trustAsHtml("<img src='/img/art/its.jpg' width='250'/>"),
    $sce.trustAsHtml("<img src='/img/art/art8.png' width='250'/><p>If you <b>smile</b>, even if you're in a bad mood, it will <b>immediately improve</b> your mood...</p>"),
    $sce.trustAsHtml('<b style="color: blue">I love... </b><div class="label label-danger">Chocolate</div>'),
  ]

  $scope.hideContact = false;
  $scope.toogleHide = function() {
     $scope.hideContact = !$scope.hideContact;
     $scope.showTimeline = false;
  }

  $scope.resetting = function() {
      $scope.hideContact = true;
      $scope.showTimeline = false;
  }

  var color = d3.scale.category20()
  $scope.options = {
    chart: {
      type: 'forceDirectedGraph',
      height: 450,
      width: 550,
      margin:{top: 40, right: 30, bottom: 20, left: 30},
      color: function(d){
          return color(d.group)
      },
      gravity: 0.07,
      nodeExtras: function(node) {
          node && node
            .append("text")
            .attr("dx", 5)
            .attr("dy", ".5em")
            .text(function(d) { return d.name })
            .style('font-size', '12px');
      },
      tooltip: {
        enabled: true,
        contentGenerator: function(d) {
          return "<h3><b>" + d.series[0].value + "</b></h3><p>"+ d.series[1].value + "</p>";
        },
        headerEnabled: false,
      }
      }
  };

  $scope.items;
  $scope.showTimeline = false;

  //VIS TIMELINE:
  var agasTimeline = [
    {
      id : "timeline-01",
      start: "2011-10-29",
      content: "<span id='timeline-01'> timeline </span>",
      replaceContent: "<span id='timeline-01' ng-click='generateContent($event)'> Graduated</span>",
      imageUrl: "https://raw.githubusercontent.com/agasvina/agasvina.github.io/master/img/timeline/timeline-01.png",
      title: "Graduated from ITB",
      context: "<p>I got a Bachelor of Engineering degree (Biomedical Eng.) </p>",
      style: "background-color: red;"
    },
    {
      id: "timeline-02",
      start: "2011-11-08",
      content: "<span id='timeline-02'> timeline </span>",
      replaceContent: "<span id='timeline-02' ng-click='generateContent($event)'> Network Training</span>",
      imageUrl: "https://raw.githubusercontent.com/agasvina/agasvina.github.io/master/img/timeline/timeline-02.png",
      title: "Visited NSN R&D in India",
      context: "<p>As I was awarded as the Best Graduate Woman In Technology by Nokia Siemens Network 2011. I participated the the Networks training & Lab. overview (NSN R&D Bangalore, India)</p>",
      style: "background-color: Chartreuse;",
    },
    {
      id: "timeline-03",
      start: "2011-12-01",
      content: "<span id='timeline-03'> timeline </span>",
      replaceContent: "<span id='timeline-03' ng-click='generateContent($event)'>Visited JAPAN</span>",
      imageUrl: "https://raw.githubusercontent.com/agasvina/agasvina.github.io/master/img/timeline/timeline-03.jpg",
      title: "Visited JAPAN",
      context: "<p>This is one of the best time in my life.. <b>AKIBA!!</b>: visiting Kyushu University" +
               "EE Lab, hunting ramen noodle from Kyushu to Hokkaido" +
               ", visiting AKIBA, admiring Shibuya Scramble, etc..</p>",
      style: "background-color: red;",
    }, 
    {
      id: "timeline-04",
      start: "2012-03-05",
      end: "2013-07-31",
      content: "<span id='timeline-04'> timeline </span>",
      replaceContent: "<span id='timeline-04' ng-click='generateContent($event)'>Developer</span>",
      imageUrl: "https://raw.githubusercontent.com/agasvina/agasvina.github.io/master/img/timeline/timeline-04.png",
      title: "Developer at Accenture-Malaysia",
      context: ["<p> I was in charge of billing payment migration for TM, Telekom Malaysia, customer accounts",
                " I have successfully migrated over a million payments, adjustments, and outstanding balances",
                "</p>",
                "<p>Relevant-technology: <b><i>Java: JDBC, SQL, Unix-Scripting, C, O-BRM, CASS-MCMB</i></b></p>",
               ].join(""),
      style: "background-color: Gold;",
    },
    {
      id: "timeline-05",
      start: "2013-09-01",
      end: "2014-06-01",
      content: "<span id='timeline-05'> timeline </span>",
      replaceContent: "<span id='timeline-05' ng-click='generateContent($event)'>Student</span>",
      imageUrl: "https://raw.githubusercontent.com/agasvina/agasvina.github.io/master/img/timeline/timeline-05.png",
      title: "Student at NUIM (National University of Ireland, Maynooth)",
      context: "<p>Erasmus Mundus MSc in Dependable Software Systems, Computer Science</p>",
      style: "background-color: Aqua;",
    },
    {
      id: "timeline-06",
      start: "2014-04-01",
      content: "<span id='timeline-06'> timeline </span>",
      replaceContent: "<span id='timeline-06' ng-click='generateContent($event)'>Platinum Thropy: Lightning Return</span>",
      imageUrl: "https://raw.githubusercontent.com/agasvina/agasvina.github.io/master/img/timeline/timeline-06.jpg",
      title: "Platinum Thropy: Lightning Return",
      context: "<p><i>LIGHTNING RETURNS™: FINAL FANTASY® XIII is a new FINAL FANTASY adventure that gives the player direct control over iconic heroine Lightning in a constantly moving, expansive environment, on a quest to save a doomed world from complete destruction. How will you spend your final days?</i>~Square</p>",
      style: "background-color: Crimson;",
    },
    {
      id: "timeline-07",
      start: "2013-10-01",
      end: "2014-05-01",
      content: "<span id='timeline-07'> timeline </span>",
      replaceContent: "<span id='timeline-07' ng-click='generateContent($event)'>Class Demonstrator</span>",
      imageUrl: "https://raw.githubusercontent.com/agasvina/agasvina.github.io/master/img/timeline/timeline-05.png",
      title: "Demonstrator at NUIM (National University of Ireland, Maynooth)",
      context: "<p>Supporting teaching of undergraduate courses: Software Design (CS264), Introduction to OOP (CS142), and Computer System (CS143)</p>",
      style: "background-color: Aqua;",
    },
    {
      id: "timeline-08",
      start: "2013-01-01",
      content: "<span id='timeline-08'> timeline </span>",
      replaceContent: "<span id='timeline-08' ng-click='generateContent($event)'>Playing Skyrim</span>",
      imageUrl: "https://raw.githubusercontent.com/agasvina/agasvina.github.io/master/img/timeline/timeline-08.jpg",
      title: "Spending ~200hours playing SKYRIM",
      context: "<p>Enjoying the winner of more than 200 Game of the Year Awards</p>",
      style: "background-color: HotPink;",
    },
    {
      id: "timeline-09",
      start: "2014-09-01",
      end: "2015-06-01",
      content: "<span id='timeline-09'> timeline </span>",
      replaceContent: "<span id='timeline-09' ng-click='generateContent($event)'>Student</span>",
      imageUrl: "https://raw.githubusercontent.com/agasvina/agasvina.github.io/master/img/timeline/timeline-09.jpg",
      title: "Student at University of St. Andrews",
      context: "<p>Erasmus Mundus MSc in Dependable Software Systems, Computer Science</p>",
      style: "background-color: Aqua;",
    },
    {
      id: "timeline-10",
      start: "2015-04-01",
      content: "<span id='timeline-10'> timeline </span>",
      replaceContent: "<span id='timeline-10' ng-click='generateContent($event)'>Hackaton</span>",
      imageUrl: "https://raw.githubusercontent.com/agasvina/agasvina.github.io/master/img/timeline/timeline-10.jpg",
      title: "Won the Most Quirky Hack category",
      context: ["<p>Developed Android app for <b>Great Uni Hack - Manchester 2015</b>: <a href='https://devpost.com/software/guh-manchester'><i>love letter to stranger..</i></a> </p>",
                "<p>Relevant-technology:<b>Android, Git, Java, Parse, okio</b></p>"
              ].join(""),
      style: "background-color: lightgreen;",
    },
    {
      id: "timeline-11",
      start: "2015-10-01",
      end: "2016-09-09",
      content: "<span id='timeline-11'> timeline </span>",
      replaceContent: "<span id='timeline-11' ng-click='generateContent($event)'>Software Engineer</span>",
      imageUrl: "https://raw.githubusercontent.com/agasvina/agasvina.github.io/master/img/timeline/timeline-11.png",
      title: "Software Engineer at IBM Ireland",
      context: "<p>Developing both client (i.e. with javascript on a nodeJS server) and GraphQL-server (i.e. with Java EE) for API services in a small, focused team. </p>" + 
              "<p>Relevant-technology: <b>Java, JavaScript, Scala, nodeJS, ReactJS, Grunt, Relay, GraphQL, Docker, Jenkins, Mocha-Chai, Gattling, Spock, Play, Jersey, REST</b></p>",
      style: "background-color: Gold;",
    },
    {
      id: "timeline-12",
      start: "2015-03-01",
      content: "<span id='timeline-12'> timeline </span>",
      replaceContent: "<span id='timeline-12' ng-click='generateContent($event)'>Platinum Thropy: The Last of Us</span>",
      imageUrl: "https://raw.githubusercontent.com/agasvina/agasvina.github.io/master/img/timeline/timeline-12.jpg",
      title: "Spending ~100 hours playing The Last Of Us",
      context: "<p>Enjoying a masterpiece, an action-adventure survival horror video game developed by Naughty Dog and published by Sony Computer Entertainment. </p>",
      style: "background-color: HotPink;",
    },
    {
      id: "timeline-13",
      start: "2016-02-01",
      content: "<span id='timeline-13'> timeline </span>",
      replaceContent: "<span id='timeline-13' ng-click='generateContent($event)'>Platinum Thropy: Witcher 3</span>",
      imageUrl: "https://raw.githubusercontent.com/agasvina/agasvina.github.io/master/img/timeline/timeline-13.jpg",
      title: "Spending ~200hours playing The Witcher 3",
      context: "<p>Enjoying a masterpiece: <b>Wild Hunt, HeartStone, Blood and Wine</b>, an open world action role-playing video game developed by CD Projekt RED </p>",
      style: "background-color: red;",
    },
    {
      id: "timeline-14",
      start: "2016-11-26",
      content: "<span id='timeline-14'> timeline </span>",
      replaceContent: "<span id='timeline-14' ng-click='generateContent($event)'>EngD Student</span>",
      imageUrl: "https://raw.githubusercontent.com/agasvina/agasvina.github.io/master/img/timeline/timeline-09.jpg",
      title: "Become a student...",
      context: "<p>in the University of St. Andrews <b>again....</b></p>",
      style: "background-color: Aqua;",
    },
    {
      id: "timeline-15",
      start: "2016-12-01",
      content: "<span id='timeline-15'> timeline </span>",
      replaceContent: "<span id='timeline-15' ng-click='generateContent($event)'>Platinum Thropy: FF XV</span>",
      imageUrl: "https://raw.githubusercontent.com/agasvina/agasvina.github.io/master/img/timeline/timeline-15.jpg",
      title: "Spending ~200hours playing FINAL FANTASY® XV ",
      context: "<p>NB: <b>I've been waiting for this game for ~10years</b> </p>",
      style: "background-color: red;",
    },

  ]

$scope.items = new vis.DataSet(agasTimeline);
$scope.visOption = {};

$scope.evturl;
$scope.evttitle;
$scope.evtcontext;

  //VIS TIMELINE:


  $http.get('/data/graph.json')
    .then(function(res){
      $scope.data = res.data;
    });

  $scope.showMenu = true;
  if($window.innerWidth <= 786) {
    $scope.showMenu=false;
  }

  angular.element($window).bind('resize', function () {
    console.log($window.innerWidth);
    if($window.innerWidth <= 786) {
      $scope.$apply(function(){ 
       $scope.showMenu = false;
      });
    } else {
      $scope.$apply(function(){ 
        $scope.showMenu = true;
      });
    }
  });
});

app.directive("ngMobileClick", [function () {
    return function (scope, elem, attrs) {
        elem.bind("touchstart click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            scope.$apply(attrs["ngMobileClick"]);
        });
    }
}]).directive("visTimeline", function( $compile) {
  return {
    restrict: "AE",
    transclude: true,
    link: function(scope, element, attrs) {

      var timeline = null;
      scope.$watch('items', function(newVal, oldVal) {
        container = element[0];
        
        // if(oldVal != null && (oldVal.length != newVal.length || newVal.patient != oldVal.patient) && newVal.length > 0) {
          if(timeline != null) {
            timeline.destroy();
          }

          timeline = new vis.Timeline(container, newVal, scope.option);

          scope.generateContent = function(event) {
                var value = newVal._data[event.target.id];
                var $elem = angular.element(document.querySelector( '#event-timeline-detail' ) );
                console.log(value)
                scope.evttitle = value.title;
                scope.evturl = value.imageUrl;
                scope.evtcontext = value.context;
                scope.showTimeline = true;
          }

          for(id of Object.keys(newVal._data)) {
            var data = newVal._data[id];
            var $elem = angular.element(document.querySelector('#'+id));
            $elem.replaceWith($compile(data.replaceContent)(scope));
          }
      }, true);
    }
  };
});
