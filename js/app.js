var app = angular.module("app",  [
	'ngResource',
  'ngSanitize',
  'ui.bootstrap',
	'nvd3'
]);

app.controller('main', function($scope, $http, $sce) {
  $scope.htmlPopover = [
    $sce.trustAsHtml("<img src='/img/art/art1.jpg' width='250'/>"),
    $sce.trustAsHtml("<img src='/img/art/art2.jpg' width='250'/>"),
    $sce.trustAsHtml("<img src='/img/art/art3.jpg' width='250'/>"),
    $sce.trustAsHtml('<b style="color: blue">I love... </b>'),
    $sce.trustAsHtml("<img src='/img/art/art5.jpg' width='250'/>"),
    $sce.trustAsHtml("<img src='/img/art/art6.jpg' width='250'/><p class='text-right'><b> Hello there! Somebody I don't know</b></p>"),
    $sce.trustAsHtml("<img src='/img/art/its.jpg' width='250'/>"),
    $sce.trustAsHtml("<img src='/img/art/art8.png' width='250'/><p>If you <b>smile</b>, even if you're in a bad mood, it will <b>immediately improve</b> your mood...</p>"),
    $sce.trustAsHtml('<b style="color: blue">I love... </b><div class="label label-danger">Chocolate</div>'),
  ]

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

});