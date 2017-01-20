angular.module('ngTimelineDemoApp')

  /* jshint -W106 */
  .controller('DemoController', ['$scope', '$timeout', function ($scope, $timeout) {

    $scope.options = {
      debug: true,
      timenav_position: 'top',
      language: 'en'
    };

    $timeout(function () {
      var data = {
        'title' :         { 
          'media': {
            'url': 'img/timeline/timeline-00.jpg',
            'caption': 'the story of my life...',
            'credit': ''
          },
          'text': {
            'headline': 'The Story of My Life',
            'text': '<p>I\'ve lived for more than a quarter century and yet.. it\'s still untitled</p>'
          }
        },
        'events': [ 
        {
          'media': {
            'url': 'img/art/art5.jpg',
            'caption': 'Raiden-MGS ',
            'credit': ''
          },
          'start_date': {
            'year': '2011',
            'month': '03',
            'day': '15'
          },
          'text': {
            'headline': 'Started Learning How to Draw Seriously',
            'text': 'I love drawing.. doodling.. and anything related to it..'
          },
        }, 
        {
          'media': {
            'url': 'img/timeline/timeline-01.png',
            'caption': 'Institute Technology Bandung',
            'credit': ''
          },
          'start_date': {
            'year': '2011',
            'month': '10',
            'day': '29'
          },
          'text': {
            'headline': 'Graduated from ITB',
            'text': 'I was an Engineering student, majored in Electrical Engineering, minored in Biomedical Engineering'
          },
        }, 
        {
            'media': {
              'url': 'img/timeline/timeline-02.png',
              'caption': '',
              'credit': ''
            },
            'start_date': {
              'year': '2011',
              'month': '11',
              'day': '08'
            },
            'text': {
              'headline': 'Best Graduate Woman In Technology',
              'text': "<p>Participated the the Networks training & Lab. overview (NSN R&D Bangalore, India)</p>",
            },
        }, 
        {
            'media': {
              'url': 'img/timeline/timeline-03.jpg',
              'caption': '',
              'credit': ''
            },
            'start_date': {
              'year': '2011',
              'month': '12',
              'day': '01'
            },
            'text': {
              'headline': 'Visited JAPAN',
              'text': "<p>This is one of the best time in my life.. <b>AKIBA!!</b>: visiting Kyushu University" +
               " EE Lab, hunting ramen noodle from Kyushu to Hokkaido" +
               ", visiting AKIBA, admiring Shibuya Scramble, etc..</p>",
            },
        },
        {
            'media': {
              'url': 'img/timeline/timeline-04.png',
              'caption': '',
              'credit': ''
            },
            'start_date': {
              'year': '2012',
              'month': '03',
              'day': '05'
            },
            'end_date': {
              'year': '2013',
              'month': '07',
              'day': '31'
            },
            'text': {
              'headline': 'Developer at Accenture-Malaysia',
              'text': ["<p> I was in charge of billing payment migration for TM, Telekom Malaysia, customer accounts",
                " I have successfully migrated over a million payments, adjustments, and outstanding balances",
                "</p>",
                "<p>Relevant-technology: <b><i>Java: JDBC, SQL, Unix-Scripting, C, O-BRM, CASS-MCMB</i></b></p>",
               ].join(""),
            },
        }, 
        {
            'media': {
              'url': 'img/timeline/timeline-05.png',
              'caption': '',
              'credit': ''
            },
            'start_date': {
              'year': '2013',
              'month': '09',
              'day': '01'
            },
            'end_date': {
              'year': '2014',
              'month': '06',
              'day': '01'
            },
            'text': {
              'headline': 'Student at NUIM (National University of Ireland, Maynooth)',
              'text': "<p>Erasmus Mundus MSc in Dependable Software Systems, Computer Science</p>",
            },
        },
        {
            'media': {
              'url': 'img/timeline/timeline-06.jpg',
              'caption': '',
              'credit': ''
            },
            'start_date': {
              'year': '2013',
              'month': '02',
              'day': '01'
            },
            'text': {
              'headline': 'Got a Platinum Thropy: Lightning Return',
              'text': "<p>Spending ~100hours playing FINAL FANTASY® XIII</p>",
            },
        }, 
        {
            'media': {
              'url': 'img/timeline/timeline-05.png',
              'caption': '',
              'credit': ''
            },
            'start_date': {
              'year': '2013',
              'month': '10',
              'day': '01'
            },
            'end_date': {
              'year': '2014',
              'month': '05',
              'day': '01'
            },
            'text': {
              'headline': 'Demonstrator at NUIM (National University of Ireland, Maynooth)',
              'text': "<p>Supporting teaching of undergraduate courses: Software Design (CS264), Introduction to OOP (CS142), and Computer System (CS143)</p>",
            },
        },
        {
            'media': {
              'url': 'img/timeline/timeline-08.jpg',
              'caption': '',
              'credit': ''
            },
            'start_date': {
              'year': '2013',
              'month': '04',
              'day': '01'
            },
            'text': {
              'headline': 'Spending ~200hours playing SKYRIM',
              'text': "<p>Enjoying the winner of more than 200 Game of the Year Awards</p>",
            },
        },
        {
            'media': {
              'url': 'img/timeline/timeline-09.jpg',
              'caption': '',
              'credit': ''
            },
            'start_date': {
              'year': '2014',
              'month': '09',
              'day': '01'
            },
            'end_date': {
              'year': '2015',
              'month': '06',
              'day': '01'
            },
            'text': {
              'headline': 'Student at University of St. Andrews',
              'text': "<p>Erasmus Mundus MSc in Dependable Software Systems, Computer Science</p>",
            },
        },
        {
            'media': {
              'url': 'img/timeline/timeline-10.jpg',
              'caption': '',
              'credit': ''
            },
            'start_date': {
              'year': '2015',
              'month': '04',
              'day': '01'
            },
            'text': {
              'headline': 'Won the Most Quirky Hack category',
              'text': ["<p>Developed Android app for <b>Great Uni Hack - Manchester 2015</b>: <a href='https://devpost.com/software/guh-manchester'><i>love letter to stranger..</i></a> </p>",
                "<p>Relevant-technology:<b>Android, Git, Java, Parse, okio</b></p>"
              ].join(""),
            },
        },
        {
            'media': {
              'url': 'img/timeline/timeline-11.png',
              'caption': '',
              'credit': ''
            },
            'start_date': {
              'year': '2015',
              'month': '10',
              'day': '01'
            },
            'end_date': {
              'year': '2016',
              'month': '09',
              'day': '09'
            },
            'text': {
              'headline': 'Software Engineer at IBM Ireland',
              'text':  "<p>Developing both client (i.e. with javascript on a nodeJS server) and GraphQL-server (i.e. with Java EE) for API services in a small, focused team. </p>" + 
              "<p>Relevant-technology: <b>Java, JavaScript, Scala, nodeJS, ReactJS, Grunt, Relay, GraphQL, Docker, Jenkins, Mocha-Chai, Gattling, Spock, Play, Jersey, REST</b></p>",
            },
          },
          {
                'media': {
                  'url': 'img/timeline/timeline-12.jpg',
                  'caption': '',
                  'credit': ''
                },
                'start_date': {
                  'year': '2015',
                  'month': '03',
                  'day': '01'
                },
                'text': {
                  'headline': 'Got a Platinum Thropy: The Last of Us',
                  'text': "<p>Enjoying a masterpiece, an action-adventure survival horror video game developed by Naughty Dog and published by Sony Computer Entertainment, for around ~100hours... </p>",
                },
            },
            {
                  'media': {
                    'url': 'img/timeline/timeline-13.jpg',
                    'caption': '',
                    'credit': ''
                  },
                  'start_date': {
                    'year': '2016',
                    'month': '02',
                    'day': '01'
                  },
                  'text': {
                    'headline': 'Got a Platinum Thropy: The Witcher 3',
      'text': "<p>Enjoying a masterpiece: <b>Wild Hunt, HeartStone, Blood and Wine</b>, an open world action role-playing video game developed by CD Projekt RED, for around ~200hours </p>",
                  },
              },
              {
                    'media': {
                      'url': 'img/timeline/timeline-15.jpg',
                      'caption': '',
                      'credit': ''
                    },
                    'start_date': {
                      'year': '2016',
                      'month': '12',
                      'day': '01'
                    },
                    'text': {
                      'headline': 'Got a Platinum Thropy: FINAL FANTASY® XV',
                      'text': "<p>NB: <b>I've been waiting for this game for ~10years</b> </p>"
                    },
                },
              {
                    'media': {
                      'url': 'img/timeline/timeline-09.jpg',
                      'caption': '',
                      'credit': ''
                    },
                    'start_date': {
                      'year': '2016',
                      'month': '11',
                      'day': '26'
                    },
                    'text': {
                      'headline': "Becoming an EngD student...",
                      'text': "<p>in the University of St. Andrews <b>again....</b></p>"
                    },
                },
        ]
      };

      $scope.timeline.setData(data);
      $scope.timeline.goTo(1);
    }, 200);

    $scope.$watch('options', function(newOptions) {
      if($scope.timeline) {
        $scope.timeline.setOptions(newOptions);
      }
    }, true);
  }]);
/* jshint +W106 */