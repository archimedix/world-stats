angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {


})


.controller('NobelCtrl', function($scope, $http) {
    var url = "https://api.import.io/store/connector/e7deeec9-3950-43fc-8f92-145ce16d0a7b/_query?input=webpage/url:https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FList_of_Nobel_Peace_Prize_laureates&&_apikey=04fcb86ae59049f2868d883961c0d3f2fe711727f9b8853dcf9080b29dd97f7517b79aa0b2e720b898b3802c0bda21ce000b43f9f7e5783f1751414a00ad3a21d22a4e136ec4e99e4b90dab5b82cfa77"
    $http.get(url)
    .then(function(response){
        
        $scope.list = response.data.results;
        console.log($scope.list.name)
    })

})

.controller('CompanyCtrl', function($scope, $http) {
    var url = "https://api.import.io/store/connector/894715bf-43ea-41f2-afc4-17b81148098f/_query?input=webpage/url:https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FList_of_largest_companies_by_revenue&&_apikey=04fcb86ae59049f2868d883961c0d3f2fe711727f9b8853dcf9080b29dd97f7517b79aa0b2e720b898b3802c0bda21ce000b43f9f7e5783f1751414a00ad3a21d22a4e136ec4e99e4b90dab5b82cfa77"
    $http.get(url)
    .then(function(response){
        console.log(response.data.results)
        $scope.list = response.data.results;
    })

})

;
