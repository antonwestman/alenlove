angular.module('alenlove.controllers', [])

.controller('HomeCtrl', function() {})

.controller('RSVPCtrl', function($window, $state) {
  vm = this
  vm.form = {
    attending: true
  };

  vm.formIsValid = function() {
    if (vm.form.attending){
      return vm.form.name && vm.form.bus && vm.form.brunch
    } else {
      return vm.form.name
    };
  };

  vm.send = function() {
    var subject = "Bröllop - "+vm.form.name+ (vm.form.attending ? " kommer" : " kommer inte");
    var foodPrefString = "Matpreferenser: "+ (vm.form.foodPref ? vm.form.foodPref : "Inga");
    var attendString = "Jag/Vi "+ (vm.form.attending ? "vill självklart" : "har tyvärr inte möjlighet att")+" fira er stora dag.";
    var busString = "Jag/Vi "+(vm.form.bus == 'true' ? "vill gärna ha" : "behöver inte")+" plats i bussen.";
    var brunchString = "Jag/Vi kommer "+ (vm.form.brunch == 'true' ? 'gärna' : 'inte')+" på brunchen";
    var body = "Hej Therese och Johan.%0D%0A%0D%0A"+attendString+"%0D%0A"
    if (vm.form.attending){
      body += busString+"%0D%0A"+brunchString+"%0D%0A%0D%0A"+foodPrefString
    }
    body+="%0D%0A%0D%0A/"+vm.form.name

    $window.open('mailto:brollop@alenlov.se?subject='+subject+'&body='+body);
    $state.go("tab.home")
  };
})

.controller('TransportCtrl', function() {})

.controller('InfoCtrl', function() {})

.controller('SleepOverCtrl', function() {});
