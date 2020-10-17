import React from 'react';


const Comment = ({commentList, video, handleCommentSearch}) => {

    return (
      <div className="video-player-details">
        {commentList.map((comment)=>console.log(comment))}

        <button onClick={() => {
          var id = video.id.videoId
          handleCommentSearch(id)
          }}>Show Comments</button>
      </div>

    );
}

export default Comment;
