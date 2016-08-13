var searchYouTube = (options, callback) => {

  $.ajax({
    method: 'GET',
    data: {
      key: options.key, 
      maxResults: options.max, 
      q: options.query, 
      part: 'snippet',
      order: 'title'},
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'video',
    success: (data) => callback(data.items), 
    error: (error) => console.log(JSON.stringify(error))

  }).done();
  // TODO
  
  
};

window.searchYouTube = searchYouTube;


