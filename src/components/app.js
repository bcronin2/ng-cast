angular.module('video-player')
  .component('app', {
    controller: function() {
      this.videos = window.exampleVideoData;
      this.currentVideo = 0;
      this.onClick = (index) => {
        this.currentVideo = index;
      };
      this.selectVideo = () => {};
      this.searchResults = () => {};
    },
    templateUrl: 'src/templates/app.html' 
  });
