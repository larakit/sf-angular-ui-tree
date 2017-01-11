angular.module('myApp', ['ui.tree'])
    .component('stickAndShit', {
        templateUrl: 'template.html',
        controller: ['Phone',
            function PhoneListController(Phone) {
                this.phones = Phone.query();
                this.orderProp = 'age';
            }
        ]
    });


angular.module('myApp')
    .controller('mainCtrl', ['$scope', function ($scope) {
        $scope.remove = function (scope) {
            scope.remove();
        };

        $scope.toggle = function (scope) {
            scope.toggle();
        };

        $scope.treeOptions = {
            dragStart: function (event) {
                console.log('Ветка: ', event.source.nodeScope.node);
            },
            dragStop: function (event) {
                console.log('Перемещена: ', event.dest.nodesScope.node);
            }
        };


        $scope.data = [{
            'id': 1,
            'title': 'Колькиной бабы сестры мужик',
            'nodes': [
                {
                    'id': 11,
                    'title': 'node1.1',
                    'nodes': [
                        {
                            'id': 111,
                            'title': 'node1.1.1',
                            'nodes': []
                        }
                    ]
                },
                {
                    'id': 12,
                    'title': 'node1.2',
                    'nodes': []
                }
            ]
        }, {
            'id': 2,
            'title': 'node2',
            'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
            'nodes': [
                {
                    'id': 21,
                    'title': 'node2.1',
                    'nodes': []
                },
                {
                    'id': 22,
                    'title': 'node2.2',
                    'nodes': []
                }
            ]
        }, {
            'id': 3,
            'title': 'node3',
            'nodes': [
                {
                    'id': 31,
                    'title': 'node3.1',
                    'nodes': []
                }
            ]
        }];
    }]);
