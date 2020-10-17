import Redux from 'redux';

var commentListReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  if (action.type === 'CHANGE_COMMENT_LIST') {
    return action.commentList || null;
  } else {
    return state;
  }

};

export default commentListReducer;
