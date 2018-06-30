angular.module('video-player')
  .service('youTube', function($http) {
    this.search = (query, callback) => {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        contentType: 'application/json',
        params: {
          q: query,
          orderBy: 'relevance',
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: 'true',
          type: 'video',
          part: 'snippet'
        }
      }).then(function(response) {
        callback(response.data.items);
      },
      function(response) {
        console.log('failure', response);
      });
    };
  });
