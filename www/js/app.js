// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            return StatusBar.hide();
        }
    });
})


.controller('MainCtrl', function($scope) {



    $scope.numbers = [{
        number: 1,
    }, {
        number: 2,
    }, {
        number: 3,
    }, {
        number: 5,
    }, {
        number: 8,
    }, {
        number: 13,
    }, {
        number: 20,
    }, {
        number: 40,
    }, {
        number: 100,
    }];
    $scope.onTap = function(number) {
        console.log('number', number)
        $scope.selectedNumber = number.number;
        number.toggled = !number.toggled;

        if (!number.toggled) {
          $scope.showSelected = false;
        } else {
          $scope.showSelected = true;
        }
    }


})

.directive('circle', function() {

    return {
        scope: {
            number: "@number"

        },

        link: function(scope, element, attrs) {


            scope.onTap = function() {
                console.log('tap', scope.number)
                element.class = "changedClass";
                scope.active = true;
                console.log('current number', scope.currentNumber);
            }



        },

        template: '<div class="circle" ng-repeat="n in numbers" ng-hide="" ng-class="{changedClass : number.toggled}" on-tap="onTap(n)"><span>{{n.number}}</span></div>'
    }

})

.directive('message', function() {

    return {
        scope: {
            number: "@number"


        },



        template: '<div class="message">Okay, lets go</div>'
    }

})