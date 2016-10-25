'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.snippet = '<span style="color:red">Hello World!</span>';
        $scope.boolValue = true;
        $scope.myStyle = { color: 'red' };
        $scope.buttonDisabled = true;
        $scope.myClass = "blue";
        $scope.sortOrder = 'name';
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '23/10/2016',
            time: '18:00',
            price: 34,
            location: {
                address: 'Rua das Flores, 123',
                city: 'São Paulo',
                province: 'SP'
            },
            imgUrl: '/Img/AngularJS-large.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives.',
                    upVoteCount: 3
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'Basic',
                    abstract: 'This session will take a closer look to scopes.',
                    upVoteCount: 2
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Great Guy',
                    duration: 4,
                    level: 'Medium',
                    abstract: 'Controllers are the beginning of everything Angular does.',
                    upVoteCount: 35
                }
            ]
        };

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    }
);