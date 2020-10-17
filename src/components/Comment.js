import React from 'react';


const Comment = ({commentList, video, handleCommentSearch}) => {

    return (
      <div className="video-player-details">
        <ul>

        {commentList.map((comment) => {
          console.log(comment)
          let author = comment.snippet.topLevelComment.snippet.authorDisplayName;
          let text = comment.snippet.topLevelComment.snippet.textOriginal;
          return (
            <li key={comment.id}>
              <div>
                <div className="video-list-entry-title">{author}</div>
                <p className="video-list-entry-detail">{text}</p>
              </div>

            </li>
          )
        }
       )}

        </ul>



        <button onClick={() => {
          var id = video.id.videoId
          handleCommentSearch(id)
          }}>Show Comments</button>
      </div>

    );
}

export default Comment;
