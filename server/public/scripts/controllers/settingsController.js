colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', '$http', function($scope, DataFactory, $http) {
  console.log("settings controller running");
  var self = this;
  self.colors = DataFactory.colors;
  self.allColors = DataFactory.allColors;
  self.addColor = {};
  console.log(DataFactory);
  self.addColors = function(){

    DataFactory.colors.push(self.addColor)
    alert("Added");
    self.addColor = {};
  }
  self.removeColor = function(){
    DataFactory.colors.pop()
  }


}]);




// $http.post('/colorsroute', self)
//   .then(function(response) {
//     console.log("added color", self.addColor);
//
//     DataFactory.getColors();
//   },
//   function(response) {
//     // error
//     console.log('ERROR post response: ', response.data);
//   });
