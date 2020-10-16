import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import VideoListContainer from '../containers/VideoListContainer.js';
import VideoPlayerContainer from '../containers/VideoPlayerContainer.js';
import SearchContainer from '../containers/SearchContainer.js';

const App = () => {

const handleToggle = () => {
  let input = document.getElementById('toggleAutoPlay');
  let label = document.getElementById('toggleAuto');
  label.innerText = input.checked ? 'Turn AutoPlay Off' : 'Turn AutoPlay On'
}
  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <SearchContainer />
            <div className="Auto">
              <label id="toggleAuto">Turn AutoPlay On?</label>
              <input type="checkbox" id="toggleAutoPlay" onChange={handleToggle}/>
            </div>

          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayerContainer />
          </div>
          <div className="col-md-5">
            <VideoListContainer />
          </div>
        </div>
      </div>
    );
}

export default App;
