angular.module('video-player').component('app', {
  controller: function(youTube) {
    this.videos = [];
    this.currentVideo = 0;
    this.searchService = youTube;
    this.selectVideo = index => {
      this.currentVideo = index;
    };
    this.searchResults = items => {
      this.videos = items;
    };
    this.searchService.search('dogs', this.searchResults.bind(this));
  },
  templateUrl: 'src/templates/app.html'
});
