angular.module('alenlove.controllers', [])

.controller('HomeCtrl', function() {})

.controller('RSVPCtrl', function() {
  vm = this
  vm.form = {};

  vm.formIsValid = function() {
    if (vm.form.attending == 'true'){
      return vm.form.attending && vm.form.name && vm.form.bus
    } else {
      return vm.form.attending && vm.form.name
    };
  };

  vm.send = function() {};
})

.controller('TransportCtrl', function() {})

.controller('InfoCtrl', function() {})

.controller('SleepOverCtrl', function() {});
