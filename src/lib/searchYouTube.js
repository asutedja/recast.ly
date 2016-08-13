var searchYouTube = (options, callback) => {

  $.ajax({
    method: 'GET',
    data: options,
    url: 'https://www.googleapis.com/youtube/v3/search',

    success: (data) => callback(data.items),
    error: (error) => console.log(JSON.stringify(error))

  });
  // TODO
  
};

window.searchYouTube = searchYouTube;


