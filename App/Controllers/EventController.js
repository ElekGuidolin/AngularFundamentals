'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {
        $scope.snippet = '<span style="color:red">Hello World!</span>';
        $scope.boolValue = true;
        $scope.myStyle = { color: 'red' };
        $scope.buttonDisabled = true;
        $scope.myClass = "blue";
        $scope.sortOrder = 'name';
        $scope.event = eventData.event;

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    }
);