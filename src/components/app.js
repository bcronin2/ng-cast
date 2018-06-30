angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      this.videos = window.exampleVideoData;
      this.currentVideo = 0;
      this.searchService = youTube;

      this.onClick = (index) => {
        this.currentVideo = index;
      };
      this.selectVideo = () => {};
      this.searchResults = (items) => {
        this.videos = items;
      };
    },  
    templateUrl: 'src/templates/app.html' 
  });
