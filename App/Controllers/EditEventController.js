﻿'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope) {
        $scope.saveEvent = function (event, newEventForm) {
            if (newEventForm.$valid) {
                window.alert('event: ' + event.name + ' saved!');
            }
        };

        $scope.cancelEdit = function () {
            window.location = './EventDetails.html';
        };
    }
);