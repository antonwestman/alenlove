angular.module('alenlove.controllers', [])

.controller('HomeCtrl', function() {})

.controller('RSVPCtrl', function($window, $state) {
  vm = this
  vm.form = {};

  vm.formIsValid = function() {
    if (vm.form.attending == 'true'){
      return vm.form.attending && vm.form.name && vm.form.bus
    } else {
      return vm.form.attending && vm.form.name
    };
  };

  vm.send = function() {
    var subject = "Bröllop - "+vm.form.name+ (vm.form.attending ? " kommer" : " kommer inte");
    var foodPrefString = "Matpreferenser: "+ (vm.form.foodPref ? vm.form.foodPref : "Inga");
    var attendString = vm.form.attending ? "vill självklart" : "kan tyvärr inte komma och";
    var busString = vm.form.bus ? "vill gärna ha" : "tar mig dit på egen hand och behöver alltså inte"
    var body = "Hej blivande brudpar.%0D%0A%0D%0AJag "+attendString+" fira er stora dag.%0D%0AJag "+busString+" en plats i bussen.%0D%0A%0D%0A"+foodPrefString
    $window.open('mailto:brollop@alenlov.se?subject='+subject+'&body='+body);
    $state.go("tab.home")
  };
})

.controller('TransportCtrl', function() {})

.controller('InfoCtrl', function() {})

.controller('SleepOverCtrl', function() {});
