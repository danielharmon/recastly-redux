import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from 'redux-thunk';

var handleVideoSearch = (q) => {

  return function() {

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&max=5&key=${YOUTUBE_API_KEY}&q=${q}`

    // fetch(url)
    //   .then(data => {
    //     if (!data.ok) {
    //       throw Error(data.statusText)
    //     }

    //     return data

    //   })
    //   .then(data => data.json())
    //   .then(videos => dispatch(changeVideoList(videos.items)))
    //   .catch((error) => console.error(error))

    $.ajax({
      url: url,
      type: 'GET',
      contentType: 'application/JSON',
      success: function() {
        console.log('Success')
      }
    }).done(data => console.log(data.items))

  }

};

export default handleVideoSearch;
