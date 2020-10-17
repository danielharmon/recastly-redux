import { connect } from 'react-redux';
import Comment from './../components/Comment.js';
import handleCommentSearch from '../actions/commentSearch.js';


var mapDispatchToProps = function(dispatch) {
  return {
    handleCommentSearch: (currentVideo) => {
      dispatch(handleCommentSearch(currentVideo))
    }
  }
}

var mapStateToProps = function(state) {
  return {
    commentList: state.commentList,
    video: state.currentVideo
  }
}

var CommentContainer = connect(mapStateToProps, mapDispatchToProps)(Comment)

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default CommentContainer;
