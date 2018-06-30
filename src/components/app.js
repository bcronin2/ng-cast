angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = 0;
      this.searchService = youTube;
      
      this.selectVideo = (index) => {
        this.currentVideo = index;
      };
      this.searchResults = (items) => {
        this.videos = items;
      };
    },  
    templateUrl: 'src/templates/app.html' 
  });
