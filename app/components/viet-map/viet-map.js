'use strict';

angular.module('viet-map', [])
    .directive('vietMap', function () {
        return {
            restrict: 'E',
            templateUrl: "components/viet-map/viet-map.html",
            controller: 'MapController',
            scope:{
                center: '=?',
                width: '@',
                height: '@'
            }
        };
    })
    .controller('MapController', ['$scope', '$element', function ($scope, $element) {

        // Instance of map style.
        $scope.mapStyle = {
            width: '100%',
            height: '400px'
        };

        // Map instance.
        $scope.map = null;

        // Load map style.
        $scope.loadMapStyle = function(){
            if ($scope.width != null && $scope.width.length > 0)
                $scope.mapStyle.width = $scope.width;
            if ($scope.height != null && $scope.height.length > 0)
                $scope.mapStyle.height = $scope.height;
        };

        // Watch center property for its change.
        $scope.$watch('center', function(value){
            if ($scope.map == null)
                return;

            $scope.map.setCenter(value);
        });

        // Initiate the map when document is ready.
        angular.element(document).ready(function(){

            // Load the map style first.
            $scope.loadMapStyle();

            var mapProp = {
                center: new vietbando.LatLng(10.8152328, 106.680505),
                zoom: 5
            };
            /*Tạo map object với property(mapProp)*/
            var element = $element[0].getElementsByClassName('map-layout');
            if (element == null || element.length < 1 || element[0] == null)
                return;

            $scope.map  = new vietbando.Map(element[0], mapProp);


        });
    }]);