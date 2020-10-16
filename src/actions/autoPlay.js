var toggleAutoPlay = (stringInput) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  type: 'TOGGLE_AUTOPLAY',
  autoPlay: stringInput
});

export default toggleAutoPlay;
