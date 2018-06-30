angular.module('video-player')
  .component('search', {
    bindings: {
      service: '<',
      result: '<'
    },
    templateUrl: 'src/templates/search.html' 
  });
