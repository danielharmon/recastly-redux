import React from 'react';
import Youtube from 'react-youtube'

var VideoPlayer = ({video, autoPlay}) => (
  !video.id
    ? <div className="video-player">Please wait...</div>
    : <div className="video-player">
      {/* <Youtube
      videoId={video.id.videoId}
      autoplay={true}
      muted={true}
      /> */}
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}${autoPlay}`} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
      </div>
    </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

export default VideoPlayer;
