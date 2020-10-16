import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';

var handleVideoSearch = (q) => {

  return function(dispatch) {

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&max=5&key=${YOUTUBE_API_KEY}&q=${q}`

    fetch(url)
      .then(data => data.json())
      .then(videos => {
        dispatch(changeVideoList(videos.items));
        dispatch(changeVideo(videos.items[0]));
      })
      .catch((error) => console.error(error))

    // $.ajax({
    //   url: url,
    //   type: 'GET',
    //   contentType: 'application/JSON',
    //   success: function(data) {
    //     console.log('Success')
    //     dispatch(changeVideoList(data.items))
    //     dispatch(changeVideo(data.items[0]))
    //     //changeVideoList(data.items)
    //   }
    // }).done(data => console.log(data.items))

  }

};

export default handleVideoSearch
