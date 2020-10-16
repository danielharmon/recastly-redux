import Redux from 'redux';

var autoPlayReducer = (state = null, action) => {

  if (action.type === 'TOGGLE_AUTOPLAY') {
    return action.autoPlay || null;
  } else {
    return state;
  }

};

export default autoPlayReducer;
