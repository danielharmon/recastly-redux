import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import CommentList from './CommentList.js'

var handleCommentSearch = (currentVideo) => {

  return function(dispatch) {

    const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=${YOUTUBE_API_KEY}&videoId=${currentVideo}&maxResults=5`

    fetch(url)
      .then(data => data.json())
      .then(comment => {

        dispatch(CommentList(comment.items));
      })
      .catch((error) => console.error(error))

  }

};

export default handleCommentSearch
