angular.module('video-player')
  .component('app', {
    controller: function() {
      this.videos = window.exampleVideoData;
      this.onClick = function() {};
    },
    templateUrl: 'src/templates/app.html' 
  });
