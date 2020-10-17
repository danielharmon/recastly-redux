import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';

var CommentList = (commentList) => {

return {
  type: 'CHANGE_COMMENT_LIST',
  commentList
}

};

export default CommentList
