angular.module('video-player')
  .component('search', {
    bindings: {
      service: '<',
      result: '<'
    },
    controller: function() {
      this.enterSearch = (e) => {
        if (e.key === 'Enter') {
          this.service.search(this.query, this.result);
        }
      };
    },
    templateUrl: 'src/templates/search.html' 
  });
