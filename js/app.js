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
}])
